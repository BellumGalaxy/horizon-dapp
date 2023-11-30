import { useState } from "react";
import { useContract, useContractWrite } from "@thirdweb-dev/react";
import HorizonFujiR_ABI from "../contracts_abi/HorizonFujiR.json";

export default function AddPolyReceiver() {
  const { _format, contractName, sourceName, abi } = HorizonFujiR_ABI;
  const [receiverAddress, setReceiverAddress] = useState("");
  const { contract } = useContract(
    "0xe5121F551333DD569602E82483641D8ad0D93718",
    abi
  );
  const { mutateAsync: addReceiver, isLoading } = useContractWrite(
    contract,
    "addReceiver"
  );

  const call = async () => {
    try {
      const data = await addReceiver({ args: [receiverAddress] });
      console.info("contract call successs", data);
    } catch (err) {
      console.error("contract call failure", err);
    }
  };

  return (
    <div className="space-x-3">
      <input
        type="text"
        placeholder="Receiver Address"
        value={receiverAddress}
        onChange={(e) => setReceiverAddress(e.target.value)}
        className="input input-bordered w-full max-w-xs"
      />
      <button
        onClick={call}
        disabled={isLoading}
        className="btn btn-accent text-base-100"
      >
        Add Receiver
      </button>
    </div>
  );
}
