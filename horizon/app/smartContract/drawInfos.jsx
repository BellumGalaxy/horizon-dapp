import { useContract, useContractRead } from "@thirdweb-dev/react";

export default function DrawInfos() {
  const { contract } = useContract(
    "0xA40248f23B9a587F90827746E79AF361aDFb3844"
  );
  const { data, isLoading } = useContractRead(contract, "drawInfos", [
    titleId,
    drawNumber,
  ]);
}
