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
    <div className="overflow-x-auto mt-5">
      <h3 className="font-bold text-lg mt-2">
        Next Installment - {nextInstallment}
      </h3>
      <table className="table">
        <tbody>
          {/* row 1 */}
          <tr>
            <th>Date:</th>
            <td className="font-bold text-right">{date}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
