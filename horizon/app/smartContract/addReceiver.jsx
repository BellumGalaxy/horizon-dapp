"use client";
import { useState } from "react";
import { useContract, useContractWrite, Web3Button } from "@thirdweb-dev/react";
import Horizon_ABI from "../contracts_abi/Horizon.json";

const contractAddress = "0x8feb780f9152303a53f4687d0da2d89743f30e15";

export default function AddFujiReceiver() {
  const { _format, contractName, sourceName, abi } = Horizon_ABI;
  const [receiverAddress, setReceiverAddress] = useState("");
  const { contract } = useContract(contractAddress, abi);
  const { mutateAsync: addReceiver, isLoading } = useContractWrite(
    contract,
    "addReceiver"
  );

  return (
    <div className="space-x-3">
      <input
        type="text"
        placeholder="Receiver Address"
        value={receiverAddress}
        onChange={(e) => setReceiverAddress(e.target.value)}
        className="input input-bordered w-full max-w-xs"
      />
      <Web3Button
        contractAddress={contractAddress}
        contractAbi={abi}
        action={() =>
          mutateAsync({
            args: [receiverAddress],
          })
        }
        disable={isLoading}
        onSuccess={(result) => console.log(result)}
        onError={(error) => console.log(error)}
      >
        Add Receiver
      </Web3Button>
    </div>
  );
}
