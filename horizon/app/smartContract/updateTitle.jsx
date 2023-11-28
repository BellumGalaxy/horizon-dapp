import { useState } from "react";
import { useContract, useContractWrite } from "@thirdweb-dev/react";

export default function UpdateTitle() {
  const [titleId, setTitleId] = useState("");
  const { contract } = useContract(
    "0xA40248f23B9a587F90827746E79AF361aDFb3844"
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
