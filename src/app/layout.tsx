import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/shared/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/shared/Navbar";

const ubuntu = Ubuntu({ subsets: ["latin"], weight: ["300", "400", "500", "700"] });

export const metadata: Metadata = {
	title: "Henil Shah",
	description: "Henil Shah's Portfolio Website",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={cn(
					"min-h-screen bg-background font-sans antialiased max-w-5xl mx-auto py-12 sm:py-24 px-6",
					ubuntu.className
				)}
			>
				<ThemeProvider attribute="class" defaultTheme="dark">
					<TooltipProvider delayDuration={0}>
						{children}
						<Navbar />
					</TooltipProvider>
				</ThemeProvider>
			</body>
		</html>
	);
}
