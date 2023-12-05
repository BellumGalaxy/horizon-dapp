import {
  useContract,
  useContractEvents,
  ThirdwebProvider,
} from "@thirdweb-dev/react";
import { AddCollateralF, VerifyCollateralValue } from "@/app/smartContract";
import { AvalancheFuji } from "@thirdweb-dev/chains";
import HorizonR_ABI from "../../contracts_abi/HorizonFujiR";
import { useEffect, useState } from "react";

const contractAddress = "0xA67Af3c365778A2DD0E00cE1D717309B8ccD76C5";

const AddRWAFuji = ({ titleId, contractId, titleSoldInfos }) => {
  const { _format, contractName, sourceName, abi } = HorizonR_ABI;
  const { contract } = useContract(contractAddress, abi);
  const { data: events } = useContractEvents(contract, "MessageReceived");
  const [messageReceived, setMessageReceived] = useState(false);

  useEffect(() => {
    if (events && events.length > 0) {
      setMessageReceived(true);
    }
  }, [events]);

  return (
    <ThirdwebProvider activeChain={AvalancheFuji}>
      {messageReceived ? (
        <p>
          Your permission is being processed. Once we finalize it, we will grant
          access for you to verify the value of your asset and proceed with the
          allocation.
        </p>
      ) : (
        <>
          <VerifyCollateralValue
            titleId={titleId}
            contractId={contractId}
            titleSoldInfos={titleSoldInfos}
          />
          <div className="flex flex-col w-full">
            <div className="divider"></div>
          </div>
          <AddCollateralF
            titleId={titleId}
            contractId={contractId}
            titleSoldInfos={titleSoldInfos}
          />
        </>
      )}
    </ThirdwebProvider>
  );
};
export default AddRWAFuji;
