import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
import { Toaster } from "@/components/ui/sonner";
export const metadata: Metadata = {
  title: "Conversee",
  description: "Emphasizes conversation and interaction",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-dark-2`}>
        {children}
        <Toaster duration={5000} />
      </body>
    </html>
  );
}
