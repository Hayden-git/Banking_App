import Image from "next/image";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<main className="flex min-h-screen w-full justify-between font-inter">
			{children}
			<div className="auth-asset">
				<div className="p-4">
					<Image
						src="/icons/auth-image.jpg"
						alt="Auth image"
						className="rounded-xl"
						width={1000}
						height={500}
					/>
				</div>
			</div>
		</main>
	);
}
