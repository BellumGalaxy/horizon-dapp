import { useState } from "react";
import { useContract, useContractWrite } from "@thirdweb-dev/react";
import Horizon_ABI from "../contracts_abi/Horizon.json";

export default function UpdateTitle() {
  const { _format, contractName, sourceName, abi } = Horizon_ABI;
  const [titleId, setTitleId] = useState("");
  const { contract } = useContract(
    "0x57F4E779e346C285b2b4B6A342F01c471dcf224d",
    abi
  );
  const { mutateAsync: updateTitleStatus, isLoading } = useContractWrite(
    contract,
    "updateTitleStatus"
  );

  const call = async () => {
    try {
      const data = await updateTitleStatus({ args: [_titleId] });
      console.info("contract call successs", data);
    } catch (err) {
      console.error("contract call failure", err);
    }
  };

  return (
    <div className="space-x-3">
      <input
        type="text"
        placeholder="Title Id"
        value={titleId}
        onChange={(e) => setTitleId(e.target.value)}
        className="input input-bordered w-full max-w-xs"
      />
      <button
        onClick={call}
        disabled={isLoading}
        className="btn btn-accent text-base-100"
      >
        Update Title Status
      </button>
    </div>
  );
}
