import "./globals.css";
import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";
import { Inter as FontSans } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/ThemeProvider";

//Components
import { Toaster } from "@/components/ui/sonner";
import Header from "@/components/global/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

const fontSans = FontSans({
	subsets: ["latin"],
	variable: "--font-sans",
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body
				className={cn(
					"bg-background font-sans antialiased",
					fontSans.variable
				)}>
				<ThemeProvider
					attribute='class'
					defaultTheme='dark'
					enableSystem
					disableTransitionOnChange>
					<Header />
					<StairTransition />
					<PageTransition>{children}</PageTransition>
				</ThemeProvider>
				<Toaster />
				<Analytics />
				<SpeedInsights />
			</body>
			<PrismicPreview repositoryName={repositoryName} />
		</html>
	);
}
