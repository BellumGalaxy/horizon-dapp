import { useState } from "react";
import { useContract, useContractWrite } from "@thirdweb-dev/react";
import Horizon_ABI from "../contracts_abi/Horizon.json";

export default function WinnerW() {
  const { _format, contractName, sourceName, abi } = Horizon_ABI;
  const [titleId, setTitleId] = useState("");
  const [contractId, setContractId] = useState("");
  const { contract } = useContract(
    "0x57F4E779e346C285b2b4B6A342F01c471dcf224d",
    abi
  );
  const stablecoin = "0xA372e43b968AB1Cbf921dC198a8B6dD831cEEf56";
  const { mutateAsync: winnerWithdraw, isLoading } = useContractWrite(
    contract,
    "winnerWithdraw"
  );

  const call = async () => {
    try {
      const data = await winnerWithdraw({
        args: [_idTitle, _contractId, stablecoin],
      });
      console.info("contract call successs", data);
    } catch (err) {
      console.error("contract call failure", err);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center space-x-3">
      <div className="flex items-center mb-4">
        <span className="text-sm text-gray-600 w-48">Title ID</span>
        <input
          type="text"
          placeholder="Title Id"
          value={titleId}
          onChange={(e) => setTitleId(e.target.value)}
          className="input input-bordered w-full max-w-xs"
        />
      </div>
      <div className="flex items-center mb-4">
        <span className="text-sm text-gray-600 w-48">Contract ID</span>
        <input
          type="text"
          placeholder="Contract Id"
          value={contractId}
          onChange={(e) => setContractId(e.target.value)}
          className="input input-bordered w-full max-w-xs"
        />
      </div>

      <button
        onClick={call}
        disabled={isLoading}
        className="btn btn-accent text-base-100"
      >
        Withdraw
      </button>
    </div>
  );
}
