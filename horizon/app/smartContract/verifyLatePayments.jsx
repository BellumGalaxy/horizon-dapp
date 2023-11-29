import { useContract, useContractWrite } from "@thirdweb-dev/react";
import Horizon_ABI from "../contracts_abi/Horizon.json";

export default function VerifyLatePayment() {
  const { _format, contractName, sourceName, abi } = Horizon_ABI;
  const { contract } = useContract(
    "0xA40248f23B9a587F90827746E79AF361aDFb3844",
    abi
  );
  const { mutateAsync: verifyLatePayments, isLoading } = useContractWrite(
    contract,
    "verifyLatePayments"
  );

  const call = async () => {
    try {
      const data = await verifyLatePayments({ args: [_titleId, _contractId] });
      console.info("contract call successs", data);
    } catch (err) {
      console.error("contract call failure", err);
    }
  };
}
