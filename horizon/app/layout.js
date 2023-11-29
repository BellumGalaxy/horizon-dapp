"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import ThirdwebProviderApp from "./components/ThirdWebProvider";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThirdwebProviderApp>
          <Navbar />
          <main className="px-8 py-20 max-w-6xl mx-auto">{children}</main>
        </ThirdwebProviderApp>
      </body>
    </html>
  );
}