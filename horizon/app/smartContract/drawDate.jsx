import { useContract, useContractRead } from "@thirdweb-dev/react";
import HorizonStaff_ABI from "../contracts_abi/HorizonStaff.json";
import { BigNumber } from "ethers";

const contractAddress ="0x3547951AAA367094AFABcaE24f123473fF502bFa"

export default function DrawDate({ scheduleId, installmentNumber }) {
  const { _format, contractName, sourceName, abi } = HorizonStaff_ABI;
  const { contract } = useContract(contractAddress, abi);
  const { data, isLoading } = useContractRead(contract, "returnDrawDate", [
    scheduleId,
    installmentNumber,
  ]);

  const convertBigNumbers = (bigNumbers) => {
    return bigNumbers.map((bigNumber) =>
      BigNumber.isBigNumber(bigNumber) ? bigNumber.toString() : bigNumber
    );
  };

  const readableData = data ? convertBigNumbers(Object.values(data)) : [];

  console.log(data);

  const convertTimestampToDate = (timestamp) => {
    if (!timestamp) {
      return "Invalid Timestamp";
    }
    const date = new Date(timestamp * 1000);
    return `${date.toLocaleTimeString()} - ${date.toLocaleDateString()} `;
  };

  const date = convertTimestampToDate(readableData);

  return (
    <div>
      <h3 className="font-bold text-lg mt-2">
        Draw number {installmentNumber}
      </h3>
      <ul className="mt-1">
        <li>Date of next draw: {date}</li>
      </ul>
    </div>
  );
}
