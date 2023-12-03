import { useContract, useContractRead } from "@thirdweb-dev/react";
import HorizonStaff_ABI from "../contracts_abi/HorizonStaff.json";
import { BigNumber } from "ethers";

export default function PaymentDeadline({ scheduleId, installmentNumber }) {
  const { _format, contractName, sourceName, abi } = HorizonStaff_ABI;
  const { contract } = useContract(
    "0x3547951AAA367094AFABcaE24f123473fF502bFa",
    abi
  );

  const nextInstallment = parseInt(installmentNumber) + 1;

  const { data } = useContractRead(contract, "returnDrawDate", [
    scheduleId,
    nextInstallment,
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

  //21:00:00 - 31/12/1969 ou Invalid Timestamp

  return (
    <div>
      <h3 className="font-bold text-lg mt-2">
        Installment number {nextInstallment}
      </h3>
      <ul className="mt-1">
        <li>Date of next payment: {date}</li>
      </ul>
    </div>
  );
}
