import {
  ThirdwebProvider,
  ConnectWallet,
  metamaskWallet,
  coinbaseWallet,
  walletConnect,
  localWallet,
  embeddedWallet,
} from "@thirdweb-dev/react";
import { CLIENT_ID } from "@/addresses/address";

export default function Connect() {
  return (
    <ThirdwebProvider
      activeChain="mumbai"
      clientId={CLIENT_ID}
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
      <ConnectWallet
        theme={"dark"}
        btnTitle={"Login"}
        modalSize={"compact"}
        welcomeScreen={{}}
      />
    </ThirdwebProvider>
  );
}
