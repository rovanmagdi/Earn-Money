import type { Metadata } from "next";
import { ThemeProvider } from "@/components/custom/theme-provider";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/toaster";
import Navbar from "@/components/custom/navbar";
import Footer from "@/components/custom/footer";
const fontans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  //
  title: "Join to Cash",
  description: "A Earn Money Management System",
  icons: ["/favicon.ico"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen  font-sans antialiased bg-white text-black",
          fontans.variable
        )}
      >
        <Toaster />
        <ThemeProvider attribute="class" defaultTheme="system">

          {children}

        </ThemeProvider>
      </body>
    </html>
  );
}
