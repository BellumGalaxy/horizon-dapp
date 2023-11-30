import { useContract, useContractWrite } from "@thirdweb-dev/react";
import Horizon_ABI from "../contracts_abi/Horizon.json";

export default function PayInstallment() {
  const { _format, contractName, sourceName, abi } = Horizon_ABI;
  const { contract } = useContract(
    "0x57F4E779e346C285b2b4B6A342F01c471dcf224d",
    abi
  );
  const { mutateAsync: payInstallment, isLoading } = useContractWrite(
    contract,
    "payInstallment"
  );

  const call = async () => {
    try {
      const data = await payInstallment({
        args: [_idTitle, _contractId, _tokenAddress],
      });
      console.info("contract call successs", data);
    } catch (err) {
      console.error("contract call failure", err);
    }
  };
  return (
    <div>
      <h3 className="font-bold text-lg mt-5">Second Installment</h3>
      <ul className="mt-3">
        <li>Date of next installment:</li>
      </ul>
    </div>
  );
}
