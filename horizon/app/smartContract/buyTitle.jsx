import { useContract, useContractWrite } from "@thirdweb-dev/react";
import { Web3Button } from "@thirdweb-dev/react";
import Horizon_ABI from "../contracts_abi/Horizon.json";

const contractAddress = "0x57F4E779e346C285b2b4B6A342F01c471dcf224d";

export default function BuyTitle({ titleId, withdrawPeriod }) {
  const { _format, contractName, sourceName, abi } = Horizon_ABI;
  const { contract } = useContract(contractAddress, abi);
  const stablecoin = "0xA372e43b968AB1Cbf921dC198a8B6dD831cEEf56";
  const { mutateAsync: buyTitle, isLoading } = useContractWrite(
    contract,
    "buyTitle"
  );

  const call = async () => {
    try {
      const data = await buyTitle({
        args: [titleId, withdrawPeriod, stablecoin],
      });
      console.info("contract call successs", data);
    } catch (err) {
      console.error("contract call failure", err);
    }
  };

  return (
    <div className="card-actions justify-center mb-5">
      <Web3Button
        contractAddress={contractAddress}
        action={() => call}
      >
        Execute Action
      </Web3Button>
    </div>
  );
}