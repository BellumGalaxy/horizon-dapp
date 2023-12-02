"use client";
import { useState } from "react";
import { useContract, useContractWrite, Web3Button } from "@thirdweb-dev/react";
import Horizon_ABI from "../contracts_abi/Horizon.json";

const contractAddress = "0x57F4E779e346C285b2b4B6A342F01c471dcf224d";

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
        onSuccess={(result) => alert("Success!")}
        onError={(error) => console.log(error)}
      >
        Add Receiver
      </Web3Button>
    </div>
  );
}
