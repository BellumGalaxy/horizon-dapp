"use client";
import { AvalancheFuji } from "@thirdweb-dev/chains";
import MyCollapse from "../components/Collapse";
import { AddPolyReceiver } from "../smartContract";
import { ThirdwebProvider } from "@thirdweb-dev/react";

const AdministrationAvax = () => {
  return (
    <ThirdwebProvider
    activeChain={AvalancheFuji}
    >
      <div className="space-y-3">
        <MyCollapse title="Poly Network Receiver">
          <AddPolyReceiver />
        </MyCollapse>
      </div>
    </ThirdwebProvider>
  );
};
export default AdministrationAvax;
