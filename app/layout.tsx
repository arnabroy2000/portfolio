import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
	metadataBase: new URL("http://localhost:3000/"),

	title: "Arnab Roy",
	authors: {
		name: "arnab",
	},

	description:
		"Welcome to my corner of the web, where creativity thrives and digital experiences come to life. As a passionate web developer, I'm committed to crafting immersive online journeys that captivate and inspire. Let's embark on this journey together and create something truly remarkable!",
	openGraph: {
		title: "arnab",
		description:
			"Welcome to my corner of the web, where creativity thrives and digital experiences come to life. As a passionate web developer, I'm committed to crafting immersive online journeys that captivate and inspire. Let's embark on this journey together and create something truly remarkable!",
		url: "http://localhost:3000/",
		siteName: "arnab",
		images: "/og.png",
		type: "website",
	},
	keywords: ["arnabs portfolio", "arnab", "portfolio"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={spaceGrotesk.className}>
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider></body>
    </html>
  );
}
