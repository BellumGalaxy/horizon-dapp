import { useState } from "react";
import { useContract, useContractWrite } from "@thirdweb-dev/react";
import Horizon_ABI from "../contracts_abi/Horizon.json";
import ThirdwebProviderApp from "../components/ThirdWebProvider";
import { AvalancheFuji } from "@thirdweb-dev/chains";

export default function AddFujiReceiver() {
  const { _format, contractName, sourceName, abi } = Horizon_ABI;
  const [receiverAddress, setReceiverAddress] = useState("");
  const { contract } = useContract(
    "0xA40248f23B9a587F90827746E79AF361aDFb3844",
    abi
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
