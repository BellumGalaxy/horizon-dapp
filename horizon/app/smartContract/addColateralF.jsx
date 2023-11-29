import { useContract, useContractWrite } from "@thirdweb-dev/react";
import HorizonR_ABI from "../contracts_abi/HorizonFujiR.json";
import ThirdwebProviderApp from "../components/ThirdWebProvider";
import { AvalancheFuji } from "@thirdweb-dev/chains";

export default function AddColateralF() {
  const { _format, contractName, sourceName, abi } = HorizonR_ABI;
  const { contract } = useContract(
    "0xe5121F551333DD569602E82483641D8ad0D93718",
    abi
  );
  const { mutateAsync: addCollateral, isLoading } = useContractWrite(
    contract,
    "addCollateral"
  );

  const call = async () => {
    try {
      const data = await addCollateral({
        args: [_titleId, _contractId, _drawNumber, _rwaId],
      });
      console.info("contract call successs", data);
    } catch (err) {
      console.error("contract call failure", err);
    }
  };
  return (
      <h1>AddFujiColateral</h1>
  )
}
