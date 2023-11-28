import { useState } from "react";
import { useContract, useContractWrite } from "@thirdweb-dev/react";

export default function AddFujiReceiver() {
  const [receiverAddress, setReceiverAddress] = useState("");
  const { contract } = useContract(
    "0xA40248f23B9a587F90827746E79AF361aDFb3844"
  );
  const { mutateAsync: addReceiver, isLoading } = useContractWrite(
    contract,
    "addReceiver"
  );

  const call = async () => {
    try {
      const data = await addReceiver({ args: [receiverAddress] });
      console.info("contract call success", data);
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
