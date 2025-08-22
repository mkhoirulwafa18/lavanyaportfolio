import type { Metadata } from "next";
import { Bricolage_Grotesque, Righteous } from "next/font/google";
import "../index.css";
import Providers from "@/components/providers";
import Header from "@/components/header";

const bricolageGrotesque = Bricolage_Grotesque({
	variable: "--font-bricolage-grotesque",
	subsets: ["latin"],
});

const righteous = Righteous({
	variable: "--font-righteous",
	subsets: ["latin"],
	weight: "400",
});

export const metadata: Metadata = {
	title: "jazzicreatesclone",
	description: "jazzicreatesclone",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={`${bricolageGrotesque.variable} ${righteous.variable} antialiased`} suppressHydrationWarning
			>
				<Providers>
					<div className="bg-background grid grid-rows-[auto_1fr] min-h-svh ">
						{/* <Header /> */}
						{children}
					</div>
				</Providers>
			</body>
		</html>
	);
}
