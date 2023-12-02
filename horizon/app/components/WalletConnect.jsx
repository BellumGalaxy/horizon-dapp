import {
  ConnectWallet,
} from "@thirdweb-dev/react";

export default function Connect() {
  return (
      <ConnectWallet
        theme={"dark"}
        btnTitle={"Login"}
        modalSize={"compact"}
        welcomeScreen={{}}
      />
  );
}
