import type { Metadata } from "next";
import ReactLenis from 'lenis/react';
import { Bricolage_Grotesque, Righteous } from "next/font/google";
import "../index.css";
import { ContactModalProvider } from "@/contexts/contact-modal-context";
import { FooterProvider } from "@/contexts/footer-context";
import TitleChanger from "@/components/title-changer";
import ContactModal from "@/components/contact-modal";

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

const noOverlayWorkaroundScript = `
  window.addEventListener('error', event => {
    event.stopImmediatePropagation()
  })

  window.addEventListener('unhandledrejection', event => {
    event.stopImmediatePropagation()
  })
`

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			{process.env.NEXT_PUBLIC_URL?.includes('localhost') && (
				<head>
					<script dangerouslySetInnerHTML={{ __html: noOverlayWorkaroundScript }} />
				</head>
			)}
			<ReactLenis root>
				<FooterProvider>
					<body
						className={`${bricolageGrotesque.variable} ${righteous.variable} antialiased`} suppressHydrationWarning
					>
						<ContactModalProvider>
							<TitleChanger />
							<div className="bg-background grid grid-rows-[auto_1fr] min-h-svh ">
								{children}
							</div>
							<ContactModal />
						</ContactModalProvider>
					</body>
				</FooterProvider>
			</ReactLenis>
		</html>
	);
}
