"use client";
import React, { useEffect } from "react";
import { useContract, useContractRead } from "@thirdweb-dev/react";
import Horizon_ABI from "../contracts_abi/Horizon.json";
import { BigNumber } from "ethers";
import DrawDate from "./drawDate";
import PaymentDeadline from "./paymentDeadline";

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
        <h3 className="font-bold text-lg mt-2">Schedule Infos</h3>
        {/* Abertura e Fechamento das Vendas */}
        <ul className="mt-1">
          <li>Selling Opening: {readableData[0]}</li>
          <li>Selling Close: {readableData[1]}</li>
        </ul>
        {/* Valor Total do Título */}
        {/* Número de Parcelas */}
        {/* Valor Mensal  */}
        <h3 className="font-bold text-lg mt-2">Value Info</h3>
        <ul className="mt-1">
          <li>Title Value: $ {readableData[4]}.00</li>
          <li>Total installments: {readableData[5]}</li>
          <li>Installment Value: $ {readableData[6]}.00</li>
        </ul>
      </div>
    </main>
  );
}
