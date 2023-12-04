"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import {
  metamaskWallet,
  coinbaseWallet,
  walletConnect,
  localWallet,
  embeddedWallet,
  ThirdwebProvider,
} from "@thirdweb-dev/react";
import { AvalancheFuji, Mumbai } from "@thirdweb-dev/chains";
import { CLIENT_ID } from "./thirdweb/addresses";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const supportedChains = [Mumbai, AvalancheFuji];

  return (
    <html lang="en">
      <body className={inter.className}>
        <ThirdwebProvider
          clientId={CLIENT_ID}
          desiredChainId={Mumbai}
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
