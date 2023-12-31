import { useContract, useContractRead } from "@thirdweb-dev/react";
import HorizonStaff_ABI from "../contracts_abi/HorizonStaff.json";

export default function DrawParticipants() {
  const { _format, contractName, sourceName, abi } = HorizonStaff_ABI;
  const { contract } = useContract(
    "0x3547951AAA367094AFABcaE24f123473fF502bFa",
    abi
  );
  const { data, isLoading } = useContractRead(
    contract,
    "returnDrawParticipants",
    [_scheduleId, _drawNumber]
  );
}
