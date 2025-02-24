"use server";

import { CountryCode } from "plaid";

import { plaidClient } from "@/lib/plaid";
import { parseStringify } from "../utils";

import { getTransactionsByBankId } from "./transaction.actions";
import { getBanks, getBank } from "./user.actions";

// Get multiple bank accounts
export const getAccounts = async ({ userId }: getAccountsProps) => {
	try {
		// get banks from db
		const banks = await getBanks({ userId });

		const accounts = await Promise.all(
			banks?.map(async (bank: Bank) => {
				// get each account info from plaid
				const accountsResponse = await plaidClient.accountsGet({
					access_token: bank.accessToken,
				});
				const accountData = accountsResponse.data.accounts[0];

				// get institution info from plaid
				const institution = await getInstitution({
					institutionId: accountsResponse.data.item.institution_id!,
				});

				const account = {
					id: accountData.account_id,
					availableBalance: accountData.balances.available!,
					currentBalance: accountData.balances.current!,
					institutionId: institution.institution_id,
					name: accountData.name,
					officialName: accountData.official_name,
					mask: accountData.mask!,
					type: accountData.type as string,
					subtype: accountData.subtype! as string,
					appwriteItemId: bank.$id,
					shareableId: bank.shareableId,
				};

				return account;
			})
		);

		const totalBanks = accounts.length;
		const totalCurrentBalance = accounts.reduce((total, account) => {
			return total + account.currentBalance;
		}, 0);

		return parseStringify({ data: accounts, totalBanks, totalCurrentBalance });
	} catch (error) {
		console.error("Error on getAccounts() in bank.actions:", error);
	}
};

// Get one bank account
export const getAccount = async ({ appwriteItemId }: getAccountProps) => {
	try {
		// get bank from db
		const bank = await getBank({ documentId: appwriteItemId });

		// get account info from plaid
		const accountsResponse = await plaidClient.accountsGet({
			access_token: bank.accessToken,
		});
		const accountData = accountsResponse.data.accounts[0];

		// get transfer transactions from appwrite
		const transferTransactionsData = await getTransactionsByBankId({
			bankId: bank.$id,
		});

		const transferTransactions = transferTransactionsData.documents.map((transferData: Transaction) => ({
			id: transferData.$id,
			name: transferData.name!,
			amount: transferData.amount!,
			date: transferData.$createdAt,
			paymentChannel: transferData.channel,
			category: transferData.category,
			type: transferData.senderBankId === bank.$id ? "debit" : "credit",
		}));

		// get institution info from plaid
		const institution = await getInstitution({
			institutionId: accountsResponse.data.item.institution_id!,
		});

		// console.log("Bank Access Token:", bank?.accessToken);

		const transactionsResponse = await getTransactions({
			accessToken: bank?.accessToken,
		});

		// console.log("transactionsResponse", transactionsResponse);

		// console.log("bank?.accessToken", bank?.accessToken);

		// Ensure transactions is always an array
		const transactions = Array.isArray(transactionsResponse) ? transactionsResponse : [];

		const account = {
			id: accountData.account_id,
			availableBalance: accountData.balances.available!,
			currentBalance: accountData.balances.current!,
			institutionId: institution.institution_id,
			name: accountData.name,
			officialName: accountData.official_name,
			mask: accountData.mask!,
			type: accountData.type as string,
			subtype: accountData.subtype! as string,
			appwriteItemId: bank.$id,
		};

		// sort transactions by date such that the most recent transaction is first
		const allTransactions = [...transactions, ...transferTransactions].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

		return parseStringify({
			data: account,
			transactions: allTransactions,
		});
	} catch (error) {
		console.error("An error on getAccount() in bank.actions:", error);
	}
};

// Get bank info
export const getInstitution = async ({ institutionId }: getInstitutionProps) => {
	try {
		const institutionResponse = await plaidClient.institutionsGetById({
			institution_id: institutionId,
			country_codes: ["US"] as CountryCode[],
		});

		const institution = institutionResponse.data.institution;

		return parseStringify(institution);
	} catch (error) {
		console.error("Error on getInstitution() in bank.actions:", error);
	}
};

// Get transactions
export const getTransactions = async ({ accessToken }: getTransactionsProps) => {
	let hasMore = true;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	let transactions: any[] = []; // Initialize an empty array to accumulate transactions
	let cursor: string | undefined = undefined; // Use a cursor to paginate through transactions

	try {
		// console.log("Fetching transactions with access token:", accessToken);

		// Iterate through each page of new transaction updates for item
		while (hasMore) {
			const response = await plaidClient.transactionsSync({
				access_token: accessToken,
				cursor: cursor, // Pass the cursor to get the next page of transactions
			});

			// console.log("Plaid Transactions Response:", response.data);

			const data = response.data;

			// Log the Plaid API response for debugging
			// console.log("Plaid API Response:", data);

			// Append new transactions to the existing array
			transactions = transactions.concat(
				data.added.map((transaction) => ({
					id: transaction.transaction_id,
					name: transaction.name,
					paymentChannel: transaction.payment_channel,
					type: transaction.payment_channel,
					accountId: transaction.account_id,
					amount: transaction.amount,
					pending: transaction.pending,
					category: transaction.category ? transaction.category[0] : "",
					date: transaction.date,
					image: transaction.logo_url,
				}))
			);

			// Update the cursor and hasMore flag
			cursor = data.next_cursor;
			hasMore = data.has_more;

			// Log the current state of transactions and pagination
			// console.log(`Fetched ${data.added.length} transactions. Total so far: ${transactions.length}`);
			// console.log(`Cursor: ${cursor}, Has More: ${hasMore}`);
		}

		return parseStringify(transactions); // Return the accumulated transactions
	} catch (error) {
		console.error("Error on getTransactions() in bank.actions:", error);
	}
};
