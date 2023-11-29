import {
  ConnectWallet,
  metamaskWallet,
  coinbaseWallet,
  walletConnect,
  localWallet,
  embeddedWallet,
} from "@thirdweb-dev/react";
import ThirdwebProviderApp from "./ThirdWebProvider";

export default function Connect() {
  return (
    <ThirdwebProviderApp
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
    </ThirdwebProviderApp>
  );
}
