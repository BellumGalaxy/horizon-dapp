import { useState } from "react";
import { useContract, useContractWrite } from "@thirdweb-dev/react";

export default function CallVRF() {
  const [titleId, setTitleId] = useState("");
  const { contract } = useContract(
    "0xA40248f23B9a587F90827746E79AF361aDFb3844"
  );
  const { mutateAsync: monthlyVRFWinner, isLoading } = useContractWrite(
    contract,
    "monthlyVRFWinner"
  );

  const call = async () => {
    try {
      const data = await monthlyVRFWinner({ args: [_idTitle] });
      console.info("contract call successs", data);
    } catch (err) {
      console.error("contract call failure", err);
    }
  };

  return (
    <div className="space-x-3">
      <input
        type="text"
        placeholder="Title ID"
        value={titleId}
        onChange={(e) => setTitleId(e.target.value)}
        className="input input-bordered w-full max-w-xs"
      />
      <button
        onClick={call}
        disabled={isLoading}
        className="btn btn-accent text-base-100"
      >
        Call Chainlink VRF
      </button>
    </div>
  );
}
