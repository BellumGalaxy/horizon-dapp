import { useContract, useContractWrite } from "@thirdweb-dev/react";

export default function RefundColateral() {
  const { contract } = useContract(
    "0xA40248f23B9a587F90827746E79AF361aDFb3844"
  );
  const { mutateAsync: refundColateral, isLoading } = useContractWrite(
    contract,
    "refundColateral"
  );

  const call = async () => {
    try {
      const data = await refundColateral({ args: [_idTitle, _contractId] });
      console.info("contract call successs", data);
    } catch (err) {
      console.error("contract call failure", err);
    }
  };
}
