import { useContract, useContractWrite } from "@thirdweb-dev/react";

export default function Component() {
  const { contract } = useContract(
    "0xA40248f23B9a587F90827746E79AF361aDFb3844"
  );
  const { mutateAsync: monthlyVRFWinner, isLoading } = useContractWrite(
    contract,
    "monthlyVRFWinner"
  );

  const call = async () => {
    try {
      const data = await monthlyVRFWinner({ args: [_idTitle] });
      console.info("contract call successs", data);
    } catch (err) {
      console.error("contract call failure", err);
    }
  };
}
