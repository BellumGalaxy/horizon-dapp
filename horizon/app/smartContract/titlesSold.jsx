"use client";
import { BigNumber } from "ethers";
import { useEffect, useState } from "react";
import { useContract, useContractRead } from "@thirdweb-dev/react";
import Horizon_ABI from "../contracts_abi/Horizon.json";

const contractAddress = "0x57F4E779e346C285b2b4B6A342F01c471dcf224d";

const TitlesSold = ({ titleId, contractId, onReceiveData }) => {
  const { abi } = Horizon_ABI;
  const { contract } = useContract(contractAddress, abi);
  const { data: titleSoldInfos, isLoading } = useContractRead(
    contract,
    "titleSoldInfos",
    [titleId, contractId]
  );
  const [formattedData, setFormattedData] = useState([]);

  useEffect(() => {
    if (titleSoldInfos) {
      onReceiveData(titleSoldInfos);
      const processedData = processContractData(titleSoldInfos);
      setFormattedData(processedData);
    }
  }, [titleSoldInfos, onReceiveData]);

  const processContractData = (data) => {
    return Object.values(data).map((value, index) => {
      if (value === "0x0000000000000000000000000000000000000000") {
        return "The contract don't have a collateral allocated";
      }
      if (BigNumber.isBigNumber(value)) {
        return value.toString();
      } else if (typeof value === "boolean") {
        return value ? "Yes" : "No";
      }
      if (index === 12) {
        switch (value) {
          case 0:
            return "Status: Canceled";
          case 1:
            return "Status: Closed";
          case 2:
            return "Status: Finalized";
          case 3:
            return "Status: Open";
          case 4:
            return "Status: Waiting ";
        }
      }
      return value;
    });
  };

  const renderDataList = () => {
    const labels = [
      "Contract Id",
      "Title Value",
      "Installments",
      "Monthly Value",
      "Period Locked",
      "Title Owner",
      "Installments Paid",
      "Draw that you were selected",
      "Collateral Id",
      "Collateral Title Address",
      "Collateral RWA Address",
      "Value of insurance needed",
      "Title Status",
      "Withdraw",
    ];

    return labels.map((label, index) => (
      <li key={index} className="flex flex-col mb-1">
        <span className="font-semibold text-gray-700">{label}:</span>
        <span className="text-gray-500">{formattedData[index]}</span>
      </li>
    ));
  };

  return (
    <div>
      <div>
        {isLoading ? <p>Carregando...</p> : <ul>{renderDataList()}</ul>}
      </div>
    </div>
  );
};
export default TitlesSold;
