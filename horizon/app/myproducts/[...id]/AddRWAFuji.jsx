import { AddCollateralF, VerifyCollateralValue } from "@/app/smartContract";
import { AvalancheFuji } from "@thirdweb-dev/chains";
import { ThirdwebProvider } from "@thirdweb-dev/react";

const AddRWAFuji = ({ titleId, contractId, titleData }) => {
  return (
      <ThirdwebProvider activeChain={AvalancheFuji}>
        <VerifyCollateralValue
          titleId={titleId}
          contractId={contractId}
          titleData={titleData}
        />
        <AddCollateralF
          titleId={titleId}
          contractId={contractId}
          titleData={titleData}
        />
      </ThirdwebProvider>
  );
};
export default AddRWAFuji;
