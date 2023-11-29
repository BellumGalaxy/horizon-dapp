import { useState } from "react";
import { useContract, useContractWrite } from "@thirdweb-dev/react";

export default function AddAdmin() {
  const [adminAddress, setAdminAddress] = useState("");
  const { contract } = useContract(
    "0x3547951AAA367094AFABcaE24f123473fF502bFa"
  );
  const { mutateAsync: addAdmin, isLoading } = useContractWrite(
    contract,
    "addAdmin"
  );

  const call = async () => {
    try {
      const data = await addAdmin({ args: [_wallet] });
      console.info("contract call successs", data);
    } catch (err) {
      console.error("contract call failure", err);
    }
  };

  return (
    <div className="space-x-3">
      <input
        type="text"
        placeholder="Admin Address"
        value={adminAddress}
        onChange={(e) => setAdminAddress(e.target.value)}
        className="input input-bordered w-full max-w-xs"
      />
      <button
        onClick={call}
        disabled={isLoading}
        className="btn btn-accent text-base-100"
      >
        Add Admin
      </button>
    </div>
  );
}
