import { useContract, useContractWrite } from "@thirdweb-dev/react";

export default function Component() {
  const { contract } = useContract(
    "0xA40248f23B9a587F90827746E79AF361aDFb3844"
  );
  const { mutateAsync: updateTitleStatus, isLoading } = useContractWrite(
    contract,
    "updateTitleStatus"
  );

  const call = async () => {
    try {
      const data = await updateTitleStatus({ args: [_titleId] });
      console.info("contract call successs", data);
    } catch (err) {
      console.error("contract call failure", err);
    }
  };
}
