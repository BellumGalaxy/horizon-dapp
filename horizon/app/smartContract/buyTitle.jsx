import { useContract, useContractWrite } from "@thirdweb-dev/react";
import { Web3Button } from "@thirdweb-dev/react";
import ThirdwebProviderApp from "../components/ThirdWebProvider";
import Horizon_ABI from "../contracts_abi/Horizon.json";

export default function BuyTitle({ titleId, withdrawPeriod }) {
  const { _format, contractName, sourceName, abi } = Horizon_ABI;
  const { contract } = useContract(
    "0xA40248f23B9a587F90827746E79AF361aDFb3844",
    abi
  );
  const stablecoin = "0xA372e43b968AB1Cbf921dC198a8B6dD831cEEf56";
  const { mutateAsync: buyTitle, isLoading } = useContractWrite(
    contract,
    "buyTitle"
  );

  const call = async () => {
    try {
      const data = await buyTitle({
        args: [_titleId, withdrawPeriod, stablecoin],
      });
      console.info("contract call successs", data);
    } catch (err) {
      console.error("contract call failure", err);
    }
  };

  return (
    <div className="card-actions justify-center mb-5">

        <Web3Button
          contractAddress={contract} // Your smart contract address
          action={() => call}
        >
          Execute Action
        </Web3Button>
    </div>
  );
}
