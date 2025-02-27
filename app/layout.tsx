export const dynamic = "force-dynamic";

import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter, IBM_Plex_Serif } from "next/font/google";
import "./globals.css";
// import "./darkstyles.css";

const geistSans = localFont({
	src: "./fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900",
});
const geistMono = localFont({
	src: "./fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
	weight: "100 900",
});

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const ibmPlexSerif = IBM_Plex_Serif({
	subsets: ["latin"],
	weight: ["400"],
	variable: "--font-ibm-plex-serif",
});

export const metadata: Metadata = {
	title: "",
	description: "Modern banking platform.",
	icons: {
		icon: "/icons/building-bank.png",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${ibmPlexSerif.variable} antialiased`}>{children}</body>
		</html>
	);
}
