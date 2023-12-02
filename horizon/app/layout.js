"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";import {
  ChainId,
  metamaskWallet,
  coinbaseWallet,
  walletConnect,
  localWallet,
  embeddedWallet,
  ThirdwebProvider,
} from "@thirdweb-dev/react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const supportedChains = [ChainId.Mumbai, ChainId.AvalancheFujiTestnet];

  return (
    <html lang="en">
      <body className={inter.className}>
        <ThirdwebProvider
          desiredChainId={ChainId.Mumbai}
          supportedChains={supportedChains}
          supportedWallets={[
            metamaskWallet({ recommended: true }),
            coinbaseWallet({ recommended: true }),
            walletConnect({ recommended: true }),
            localWallet(),
            embeddedWallet({
              auth: {
                options: ["email", "google", "apple", "facebook"],
              },
            }),
          ]}
        >
          <Navbar />
          <main className="px-8 py-20 max-w-6xl mx-auto">{children}</main>
        </ThirdwebProvider>
      </body>
    </html>
  );
}