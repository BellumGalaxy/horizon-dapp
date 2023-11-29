"use client";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { Mumbai } from "@thirdweb-dev/chains";

export default function ThirdwebProviderApp({ children }) {
  return (
    <ThirdwebProvider
      clientId="b8488d3a4e9b62b0dd71dd98ac7c2993"
      activeChain={(Mumbai)}
      autoConnect={true}
      autoSwitch={true}
    >
      {children}
    </ThirdwebProvider>
  );
}
