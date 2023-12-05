import { useContract, useContractRead } from "@thirdweb-dev/react";
import HorizonStaff_ABI from "../contracts_abi/HorizonStaff.json";
import { BigNumber } from "ethers";

export default function PaymentDeadline({
  scheduleId,
  installmentNumber,
  totalInstallments,
}) {
  const { _format, contractName, sourceName, abi } = HorizonStaff_ABI;
  const { contract } = useContract(
    "0x3547951AAA367094AFABcaE24f123473fF502bFa",
    abi
  );

  const nextInstallmentNumber = parseInt(installmentNumber)+1;

  const { data } = useContractRead(contract, "returnDrawDate", [
    scheduleId,
    nextInstallmentNumber,
  ]);

  if (nextInstallmentNumber > totalInstallments) {
    return (
      <div className="overflow-x-auto mt-5">
        <h3 className="font-bold text-lg mt-2">
          Next Installment - {nextInstallmentNumber}
        </h3>
        <table className="table">
          <tbody>
            <tr>
              <th>Date:</th>
              <td className="font-bold text-right">
                All payments have been made.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }

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
    <div className="overflow-x-auto mt-5">
      <h3 className="font-bold text-lg mt-2">
        Next Installment - {nextInstallmentNumber}
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
