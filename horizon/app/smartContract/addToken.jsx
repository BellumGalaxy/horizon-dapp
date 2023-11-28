import { useContract, useContractWrite } from "@thirdweb-dev/react";

export default function Component() {
  const { contract } = useContract(
    "0x3547951AAA367094AFABcaE24f123473fF502bFa"
  );
  const { mutateAsync: addToken, isLoading } = useContractWrite(
    contract,
    "addToken"
  );

  const call = async () => {
    try {
      const data = await addToken({ args: [_stablecoin, _tokenSymbol] });
      console.info("contract call successs", data);
    } catch (err) {
      console.error("contract call failure", err);
    }
  };
}
