import React from "react";

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { formatAmount, formatDateTime, getTransactionStatus, removeSpecialCharacters } from "@/lib/utils";

const TransactionsTable = ({ transactions }: TransactionTableProps) => {
	return (
		<Table>
			<TableHeader className="bg-[#f9fafb]">
				<TableRow>
					<TableHead className="px-2">Transaction</TableHead>
					<TableHead className="px-2">Amount</TableHead>
					<TableHead className="px-2">Status</TableHead>
					<TableHead className="px-2">Date</TableHead>
					<TableHead className="px-2 max-md:hidden">Channel</TableHead>
					<TableHead className="px-2 max-md:hidden">Category</TableHead>
				</TableRow>
			</TableHeader>

			<TableBody>
				{transactions.map((t: Transaction) => {
					const status = getTransactionStatus(new Date(t.date));
					const amount = formatAmount(t.amount);

					// ! Refers to when we are subtracting money from our bank account - not literally debit card...
					const isDebit = t.type === "debit";

					// ! Refers to when we are adding money to our bank account - not literally credit card...
					const isCredit = t.type === "credit";

					return (
						<TableRow key={t.id}>
							<TableCell className="px-2">
								<div>
									<h1>{removeSpecialCharacters(t.name)}</h1>
								</div>
							</TableCell>

							<TableCell className="px-2">{isDebit ? `-${amount}` : isCredit ? amount : amount}</TableCell>

							<TableCell className="px-2">{status}</TableCell>

							<TableCell className="px-2">{formatDateTime(new Date(t.date)).dateTime}</TableCell>

							<TableCell className="px-2 max-md:hidden">{t.paymentChannel}</TableCell>

							<TableCell className="px-2 max-md:hidden">{t.category}</TableCell>
						</TableRow>
					);
				})}
			</TableBody>
		</Table>
	);
};

export default TransactionsTable;
