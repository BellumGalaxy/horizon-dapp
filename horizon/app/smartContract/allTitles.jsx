"use client";
import React, { useEffect } from "react";
import { useContract, useContractRead } from "@thirdweb-dev/react";
import Horizon_ABI from "../contracts_abi/Horizon.json";
import { BigNumber } from "ethers";

const contractAddress = "0x8feb780f9152303a53f4687d0da2d89743f30e15";

export default function AllTitles({ titleId, onReceiveData }) {
  const { _format, contractName, sourceName, abi } = Horizon_ABI;
  const { contract } = useContract(contractAddress, abi);
  const { data, isLoading } = useContractRead(contract, "allTitles", [titleId]);

  const convertBigNumbers = (bigNumbers) => {
    return bigNumbers.map((bigNumber) =>
      BigNumber.isBigNumber(bigNumber) ? bigNumber.toString() : bigNumber
    );
  };

  const readableData = data ? convertBigNumbers(Object.values(data)) : [];

  const convertTimestampToDate = (timestamp) => {
    if (!timestamp) {
      return "Invalid Timestamp";
    }
    const date = new Date(timestamp * 1000);
    return `${date.toLocaleTimeString()} - ${date.toLocaleDateString()} `;
  };

  const convertWeiToDollar = (wei) => {
    const etherValue = wei;
    return parseFloat(etherValue) / 10 ** 18;
  };

  const scheduleId = readableData[2];
  const installmentNumber = readableData[3];

  readableData[0] = convertTimestampToDate(readableData[0]);
  readableData[1] = convertTimestampToDate(readableData[1]);
  readableData[4] = convertWeiToDollar(readableData[4]);
  readableData[6] = convertWeiToDollar(readableData[6]);
  readableData[7] = convertWeiToDollar(readableData[7]);

  return (
    <main>
      <div>
        <div className="overflow-x-auto mt-5">
          <h3 className="font-bold text-lg mt-2 text-left">Schedule Infos</h3>
          <table className="table">
            <tbody>
              {/* row 1 */}
              <tr>
                <th>Selling Opening:</th>
                <td className="font-bold text-right">{readableData[0]}</td>
              </tr>
              {/* row 2 */}
              <tr>
                <th>Selling Close:</th>
                <td className="font-bold text-right">{readableData[1]}</td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* Valor Total do Título */}
        {/* Número de Parcelas */}
        {/* Valor Mensal  */}
        <div className="overflow-x-auto mt-5">
          <h3 className="font-bold text-lg mt-2 text-left">Value Info</h3>
          <table className="table">
            <tbody>
              {/* row 1 */}
              <tr>
                <th>Title Value:</th>
                <td className="font-bold text-right">$ {readableData[4]}.00</td>
              </tr>
              {/* row 2 */}
              <tr>
                <th>Total installments:</th>
                <td className="font-bold text-right">{readableData[5]}</td>
              </tr>
              {/* row 3 */}
              <tr>
                <th>Installment Value:</th>
                <td className="font-bold text-right">$ {readableData[6]}.00</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
