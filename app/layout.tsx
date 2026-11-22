import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { LiveryProvider } from "@/components/ui/LiveryContext";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { Navbar } from "@/components/layout/Navbar";

export const metadata: Metadata = {
  title: "WIN | Modern Digital Design Agency",
  description: "WIN is an independent digital design agency in Chennai.",
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
            </SmoothScrollProvider>
          </LiveryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
