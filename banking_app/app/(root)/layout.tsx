export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<main className="">
			SIDEBAR
			{children}
		</main>
	);
}

// import type { Metadata } from "next";
// import localFont from "next/font/local";
// import { Inter, IBM_Plex_Serif } from "next/font/google";
// import "./globals.css";

// const geistSans = localFont({
// 	src: "./fonts/GeistVF.woff",
// 	variable: "--font-geist-sans",
// 	weight: "100 900",
// });
// const geistMono = localFont({
// 	src: "./fonts/GeistMonoVF.woff",
// 	variable: "--font-geist-mono",
// 	weight: "100 900",
// });

// const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
// const ibmPlexSerif = IBM_Plex_Serif({
// 	subsets: ["latin"],
// 	weight: ["400"],
// 	variable: "--font-ibm-plex-serif",
// });

// export const metadata: Metadata = {
// 	title: "Brink",
// 	description: "Brink is a modern banking platform.",
// 	icons: {
// 		icon: "/icons/logo.svg",
// 	},
// };
