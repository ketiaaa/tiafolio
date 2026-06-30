import "../global.css";
import { Inter } from "@next/font/google";
import LocalFont from "@next/font/local";
import { Metadata } from "next";
import { Analytics } from "./components/analytics";

export const metadata: Metadata = {
	title: {
		default: "ketia",
		template: "%s | ketia",
	},
	description:
		"IT professional based in Sydney, AU. Diploma of IT from UTS. Previously at National Bank of Cambodia.",
	openGraph: {
		title: "ketia",
		description: "IT professional based in Sydney, AU.",
		url: "https://soksophoanketia.com",
		siteName: "soksophoanketia.com",
		images: [
			{
				url: "https://soksophoanketia.com/og.png",
				width: 1920,
				height: 1080,
			},
		],
		locale: "en-AU",
		type: "website",
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	twitter: {
		title: "ketia",
		card: "summary_large_image",
	},
	icons: {
		shortcut: "/favicon.png",
	},
};

const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
});

const calSans = LocalFont({
	src: "../public/fonts/CalSans-SemiBold.ttf",
	variable: "--font-calsans",
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className={[inter.variable, calSans.variable].join(" ")}>
			<head>
				<Analytics />
			</head>
			<body
				className={`bg-black ${
					process.env.NODE_ENV === "development" ? "debug-screens" : undefined
				}`}
			>
				{children}
			</body>
		</html>
	);
}
