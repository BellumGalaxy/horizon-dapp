"use client";
import { useContract, useContractWrite, Web3Button } from "@thirdweb-dev/react";
import Horizon_ABI from "../contracts_abi/Horizon.json";
import { toast } from "react-toastify";

const contractAddress = "0x8fEB780f9152303a53F4687D0da2d89743F30E15";

export default function WinnerW({ titleId, contractId }) {
  const { _format, contractName, sourceName, abi } = Horizon_ABI;
  const { contract } = useContract(contractAddress, abi);
  const stablecoin = "0xA372e43b968AB1Cbf921dC198a8B6dD831cEEf56";
  const { mutateAsync, isLoading } = useContractWrite(
    contract,
    "winnerWithdraw"
  );

  return (
    <div className="flex flex-col items-center justify-center space-x-3">
      <Web3Button
        contractAddress={contractAddress}
        contractAbi={abi}
        action={() =>
          mutateAsync({
            args: [titleId, contractId, stablecoin],
          })
        }
        disable={isLoading}
        onSuccess={(result) => {
          console.log(result);
          toast.success("Withdrawal successfully completed!");
        }}
        onError={(error) => {
          console.error(error);
          toast.error("Error during withdrawal!");
        }}
      >
        Withdraw
      </Web3Button>
    </div>
  );
}
