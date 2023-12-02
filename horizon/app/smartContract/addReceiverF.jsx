import { useState } from "react";
import { useContract, useContractWrite, Web3Button } from "@thirdweb-dev/react";
import HorizonFujiR_ABI from "../contracts_abi/HorizonFujiR.json";

const contractAddress = "0xe5121F551333DD569602E82483641D8ad0D93718";

export default function AddPolyReceiver() {
  const { _format, contractName, sourceName, abi } = HorizonFujiR_ABI;
  const [receiverAddress, setReceiverAddress] = useState("");
  const { contract } = useContract(
    contractAddress,
    abi
  );
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
