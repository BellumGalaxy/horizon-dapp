import { useContract, useContractWrite } from "@thirdweb-dev/react";
import Horizon_ABI from "../contracts_abi/Horizon.json";

export default function PayInstallment() {
  const { _format, contractName, sourceName, abi } = Horizon_ABI;
  const { contract } = useContract(
    "0xA40248f23B9a587F90827746E79AF361aDFb3844",
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
}
