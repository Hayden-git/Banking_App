"use server";

import { ID } from "node-appwrite";
import { createAdminClient, createSessionClient } from "../appwrite";
import { cookies } from "next/headers";
import { parseStringify } from "../utils";

export const signIn = async ({ email, password }: signInProps) => {
	try {
		// Mutation / Database / Make Fetch
		const { account } = await createAdminClient();

		// * Create a session for the user (based on their email and password)
		const response = await account.createEmailPasswordSession(email, password);

		// * Then, return the response to the client-side
		return parseStringify(response);
	} catch (error) {
		console.log("Error from user.actions signIn()", error);
	}
};

export const signUp = async (userData: SignUpParams) => {
	// * Destructure userData
	const { email, password, firstName, lastName } = userData;

	try {
		// * Appwrite will create a new user account
		const { account } = await createAdminClient();

		const newUserAccount = await account.create(ID.unique(), email, password, `${firstName} ${lastName}`);

		const session = await account.createEmailPasswordSession(email, password);

		cookies().set("appwrite-session", session.secret, {
			path: "/",
			httpOnly: true,
			sameSite: "strict",
			secure: true,
		});

		// * Then, return the "newUserAccount" after it has been run through the utils function "parseStringify()" so we can properly send the user object using Next.js
		return parseStringify(newUserAccount);
	} catch (error) {
		//
		console.log("Error from user.actions signUp()", error);
	}
};

// ... appwrite initilization functions
export async function getLoggedInUser() {
	try {
		const { account } = await createSessionClient();

		const user = await account.get();

		return parseStringify(user);
	} catch (error) {
		return null;
	}
}

export const logoutAccount = async () => {
	try {
		const { account } = await createSessionClient();

		cookies().delete("appwrite-session");

		await account.deleteSession("current");
	} catch (error) {
		return null;
	}
};
