"use server";

import { Client, Account, Databases, Users } from "node-appwrite";
import { cookies } from "next/headers";

export async function createSessionClient() {
	// * Create a new appwrite client, and setting its "endpoint" and "project" so the appwrite client knows which project to modify
	const client = new Client().setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!).setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT!);

	const session = await cookies().get("appwrite-session");
	if (!session || !session.value) {
		throw new Error("No session");
	}

	// * Attach the session to the client
	client.setSession(session.value);

	return {
		// * Then, we can use this "get()" method to extract the session and get access to it...
		get account() {
			return new Account(client);
		},
	};
}

export async function createAdminClient() {
	// * This works the same way as the createSessionClient() function, but it needs extra info like the "next_appwrite_key" in order for createAdminClient() to work...
	// * This also means it must be more secure because it has admin permissions...
	const client = new Client().setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!).setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT!).setKey(process.env.NEXT_APPWRITE_KEY!);

	return {
		get account() {
			return new Account(client);
		},
		// * Return some additional info for admin
		get database() {
			return new Databases(client);
		},
		// * Return some additional info for admin
		get user() {
			return new Users(client);
		},
	};
}
