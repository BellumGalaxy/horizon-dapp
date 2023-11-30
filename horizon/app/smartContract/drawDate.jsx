import { useContract, useContractRead } from "@thirdweb-dev/react";
import HorizonStaff_ABI from "../contracts_abi/HorizonStaff.json";
import { BigNumber } from "ethers";

export default function DrawDate({ _scheduleId, _installmentNumber }) {
  const { _format, contractName, sourceName, abi } = HorizonStaff_ABI;
  const { contract } = useContract(
    "0x3547951AAA367094AFABcaE24f123473fF502bFa",
    abi
  );
  const { data, isLoading } = useContractRead(contract, "returnDrawDate", [
    _scheduleId,
    _installmentNumber,
  ]);

  const readableTimestamp = BigNumber.isBigNumber(data)
    ? data.toString()
    : data;

  const convertTimestampToDate = (timestamp) => {
    if (!timestamp) {
      return "Invalid Timestamp";
    }
    const date = new Date(timestamp * 1000);
    return `${date.toLocaleTimeString()} - ${date.toLocaleDateString()} `;
  };

  const date = convertTimestampToDate(readableTimestamp);

  return (
    <div>
      <h3 className="font-bold text-lg mt-2">Draw number {_installmentNumber}</h3>
      <ul className="mt-1">
        <li>Date of next draw: {date}</li>
      </ul>
    </div>
  );
}
