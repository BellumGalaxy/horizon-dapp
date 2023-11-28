import { useContract, useContractWrite } from "@thirdweb-dev/react";

export default function AddColateralF() {
  const { contract } = useContract(
    "0xe5121F551333DD569602E82483641D8ad0D93718"
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
}
