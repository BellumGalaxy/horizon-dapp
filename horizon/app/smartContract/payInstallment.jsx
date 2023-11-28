import { useContract, useContractWrite } from "@thirdweb-dev/react";

export default function Component() {
  const { contract } = useContract(
    "0xA40248f23B9a587F90827746E79AF361aDFb3844"
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
