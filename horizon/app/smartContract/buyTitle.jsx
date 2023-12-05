import { useContract, useContractWrite } from "@thirdweb-dev/react";
import { Web3Button } from "@thirdweb-dev/react";
import Horizon_ABI from "../contracts_abi/Horizon.json";
import { toast } from "react-toastify";

const contractAddress = "0x8fEB780f9152303a53F4687D0da2d89743F30E15";

export default function BuyTitle({ titleId, withdrawPeriod }) {
  const { _format, contractName, sourceName, abi } = Horizon_ABI;
  const { contract } = useContract(contractAddress, abi);
  const { mutateAsync, isLoading } = useContractWrite(contract, "buyTitle");

  const stablecoin = "0xA372e43b968AB1Cbf921dC198a8B6dD831cEEf56";

  return (
    <div className="card-actions justify-center mb-5">
      <Web3Button
        contractAddress={contractAddress}
        contractAbi={abi}
        action={() =>
          mutateAsync({
            args: [titleId, withdrawPeriod, stablecoin],
          })
        }
        disable={isLoading}
        onSuccess={(result) => {
          console.log(result);
          toast.success(
            "Congratulations! Your purchase has been processed successfully!"
          );
        }}
        onError={(error) => {
          console.error(error);
          toast.error(
            "There was a problem with your purchase. Please try again!"
          );
        }}
      >
        Buy Title {titleId}
      </Web3Button>
    </div>
  );
}
