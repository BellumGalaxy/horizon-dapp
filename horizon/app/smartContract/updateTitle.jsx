"use client";
import { useContract, useContractWrite, Web3Button } from "@thirdweb-dev/react";
import Horizon_ABI from "../contracts_abi/Horizon.json";
import { toast } from "react-toastify";

const contractAddress = "0x8fEB780f9152303a53F4687D0da2d89743F30E15";

export default function UpdateTitle({ titleId }) {
  const { _format, contractName, sourceName, abi } = Horizon_ABI;
  const { contract } = useContract(contractAddress, abi);
  const { mutateAsync, isLoading } = useContractWrite(
    contract,
    "updateTitleStatus"
  );

  return (
    <div className="space-x-3">
      <Web3Button
        contractAddress={contractAddress}
        contractAbi={abi}
        action={() =>
          mutateAsync({
            args: [titleId],
          })
        }
        disable={isLoading}
        onSuccess={(result) => {
          console.log(result);
          toast.success("Title status updated successfully!");
        }}
        onError={(error) => {
          console.error(error);
          toast.error("Error updating title status.");
        }}
      >
        Update Title Status
      </Web3Button>
    </div>
  );
}
