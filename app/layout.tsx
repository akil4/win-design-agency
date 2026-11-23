import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { LiveryProvider } from "@/components/ui/LiveryContext";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    default: "WIN | Modern Digital Design Agency",
    template: "%s | WIN",
  },
  description:
    "WIN is an independent digital design agency based in Chennai, India. We partner with ambitious brands to craft distinctive brand identities, intuitive digital products, and memorable web experiences.",
  keywords: [
    "WIN Design Agency",
    "Digital Design Agency",
    "Brand Identity Design",
    "UI/UX Design Studio",
    "Creative Direction",
    "Next.js Design Agency",
    "Chennai Design Agency",
    "Akil S",
  ],
  authors: [{ name: "Akil S", url: "https://akil4.vercel.app" }],
  creator: "Akil S",
  publisher: "WIN Design Agency",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "WIN | Modern Digital Design Agency",
    description:
      "Independent digital design agency crafting distinctive brand identities, intuitive digital products, and high-impact web experiences.",
    url: "https://win-agency.vercel.app",
    siteName: "WIN",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WIN | Modern Digital Design Agency",
    description:
      "Independent digital design agency crafting distinctive brand identities, intuitive digital products, and high-impact web experiences.",
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased min-h-screen bg-white dark:bg-[#090a0e] text-slate-900 dark:text-slate-100 transition-colors selection:bg-[#E10600] selection:text-white flex flex-col justify-between">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <LiveryProvider>
            <SmoothScrollProvider>
              <Navbar />
              <div className="flex-1">{children}</div>
              <Footer />
            </SmoothScrollProvider>
          </LiveryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
