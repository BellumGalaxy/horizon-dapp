import { useContract, useContractWrite } from "@thirdweb-dev/react";

export default function BuyTitle() {
  const { contract } = useContract(
    "0xA40248f23B9a587F90827746E79AF361aDFb3844"
  );
  const { mutateAsync: buyTitle, isLoading } = useContractWrite(
    contract,
    "buyTitle"
  );

  const call = async () => {
    try {
      const data = await buyTitle({
        args: [_titleId, withdrawPeriod, _tokenAddress],
      });
      console.info("contract call successs", data);
    } catch (err) {
      console.error("contract call failure", err);
    }
  };
}
