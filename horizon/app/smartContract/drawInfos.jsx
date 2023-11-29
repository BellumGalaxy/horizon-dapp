import { useContract, useContractRead } from "@thirdweb-dev/react";
import HorizonStaff_ABI from "../contracts_abi/HorizonStaff.json";

export default function DrawInfos() {
  const { _format, contractName, sourceName, abi } = HorizonStaff_ABI;
  const { contract } = useContract(
    "0xA40248f23B9a587F90827746E79AF361aDFb3844",
    abi
  );
  const { data, isLoading } = useContractRead(contract, "drawInfos", [
    titleId,
    drawNumber,
  ]);
}
