import { useContract, useContractWrite, Web3Button } from "@thirdweb-dev/react";
import Horizon_ABI from "../contracts_abi/Horizon.json";
import { useState } from "react";
import { toast } from "react-toastify";

const contractAddress = "0x8fEB780f9152303a53F4687D0da2d89743F30E15";

export default function VerifyLatePayment({titleId}) {
  const { _format, contractName, sourceName, abi } = Horizon_ABI;
  const { contract } = useContract(contractAddress, abi);
  const { mutateAsync, isLoading } = useContractWrite(
    contract,
    "verifyLatePayments"
  );

  const [contractId, setContractId] = useState("");

  return (
    <div>
      <div>
        <h1>Enter the contractId</h1>
        <input
          type="text"
          placeholder="Contract ID"
          value={contractId}
          onChange={(e) => setContractId(e.target.value)}
          className="input input-bordered w-full max-w-xs"
          required
        />
      </div>
      <Web3Button
        contractAddress={contractAddress}
        contractAbi={abi}
        action={() =>
          mutateAsync({
            args: [titleId, contractId],
          })
        }
        disable={isLoading}
        onSuccess={(result) => {
          console.log(result);
          toast.success("Verification successfully completed!");
        }}
        onError={(error) => {
          console.error(error);
          toast.error("Error during verification!");
        }}
      >
        Verify Late Payments
      </Web3Button>
    </div>
  );
}
