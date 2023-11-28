import { useContract, useContractWrite } from "@thirdweb-dev/react";

export default function Component() {
  const { contract } = useContract("0xe5121F551333DD569602E82483641D8ad0D93718");
  const { mutateAsync: getColateralPrice, isLoading } = useContractWrite(contract, "getColateralPrice")

  const call = async () => {
    try {
      const data = await getColateralPrice({ args: [{{args}}] });
      console.info("contract call successs", data);
    } catch (err) {
      console.error("contract call failure", err);
    }
  }
}