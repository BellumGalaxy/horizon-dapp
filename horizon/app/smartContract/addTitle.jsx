import { useContract, useContractWrite } from "@thirdweb-dev/react";

export default function AddTitle() {
  const { contract } = useContract(
    "0xA40248f23B9a587F90827746E79AF361aDFb3844"
  );
  const { mutateAsync: addTitleAsColateral, isLoading } = useContractWrite(
    contract,
    "addTitleAsColateral"
  );

  const call = async () => {
    try {
      const data = await addTitleAsColateral({
        args: [
          _titleId,
          _contractId,
          _idOfColateralTitle,
          _idOfColateralContract,
        ],
      });
      console.info("contract call successs", data);
    } catch (err) {
      console.error("contract call failure", err);
    }
  };
}
