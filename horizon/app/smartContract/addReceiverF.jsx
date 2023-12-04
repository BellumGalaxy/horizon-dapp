"use client";
import { useState } from "react";
import { useContract, useContractWrite, Web3Button } from "@thirdweb-dev/react";
import HorizonFujiR_ABI from "../contracts_abi/HorizonFujiR.json";
import { AvalancheFuji } from "@thirdweb-dev/chains";

const contractAddress = "0xA67Af3c365778A2DD0E00cE1D717309B8ccD76C5";

export default function AddPolyReceiver() {
  const { _format, contractName, sourceName, abi } = HorizonFujiR_ABI;
  const [receiverAddress, setReceiverAddress] = useState("");
  const { contract } = useContract(contractAddress, abi);
  const { mutateAsync, isLoading } = useContractWrite(contract, "addReceiver");

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
        {isLoading ? "Processing..." : "Add Receiver"}
      </Web3Button>
    </div>
  );
}
