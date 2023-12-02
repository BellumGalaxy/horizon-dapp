import { useContract, useContractWrite } from "@thirdweb-dev/react";
import HorizonR_ABI from "../contracts_abi/HorizonFujiR.json";

export default function GetColateralPriceF() {
  const { _format, contractName, sourceName, abi } = HorizonR_ABI;
  const { contract } = useContract(
    "0xe5121F551333DD569602E82483641D8ad0D93718",
    abi
  );
  const { mutateAsync: getColateralPrice, isLoading } = useContractWrite(
    contract,
    "getColateralPrice"
  );

  const call = async () => {
    try {
      const data = await getColateralPrice({ args: [{ args }] });
      console.info("contract call successs", data);
    } catch (err) {
      console.error("contract call failure", err);
    }
  };
  return (
      <h1>GetColateralPrice</h1>
  );
}