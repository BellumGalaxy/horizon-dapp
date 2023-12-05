"use client";
import { BigNumber } from "ethers";
import { formatEther } from "ethers/lib/utils";
import { useEffect, useState } from "react";
import { useContract, useContractRead } from "@thirdweb-dev/react";
import Horizon_ABI from "../contracts_abi/Horizon.json";

const contractAddress = "0x8fEB780f9152303a53F4687D0da2d89743F30E15";

const TitlesSold = ({ titleId, contractId }) => {
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
      ;
      const processedData = processContractData(titleSoldInfos);
      setFormattedData(processedData);
    }
  }, [titleSoldInfos]);

  const processContractData = (data) => {
    const labels = [
      "Contract Id",
      "Schedule",
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

    return labels.map((label, index) => {
      let value = data[index];

      if (value === "0x0000000000000000000000000000000000000000") {
        value = "The contract doesn't have a collateral allocated";
      } else if (index === 2 || index === 4 || index === 12) {
        value = BigNumber.isBigNumber(value)
          ? `$ ${formatEther(value)}`
          : value;
      } else if (BigNumber.isBigNumber(value)) {
        value = value.toString();
      } else if (typeof value === "boolean") {
        value = value ? "Yes" : "No";
      } else if (index === 13) {
        switch (value) {
          case 0:
            value = "Status: Canceled";
            break;
          case 1:
            value = "Status: Late";
            break;
          case 2:
            value = "Status: OnSchedule";
            break;
          case 3:
            value = "Status: Withdraw";
            break;
          case 4:
            value = "Status: Finalized";
            break;
        }
      }
      return { label, value };
    });
  };

  const renderDataList = () => {
    return (
      <tbody>
        {formattedData.map((item, index) => (
          <tr key={index}>
            <th>{index + 1}</th> {/* Número da linha */}
            <td>{item.label}</td> {/* Rótulo */}
            <td>{item.value}</td> {/* Valor formatado */}
          </tr>
        ))}
      </tbody>
    );
  };

  return (
    <div>
      <div className="overflow-x-auto">
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <table className="table">
            <thead>
              <tr>
                <th>#</th>
                <th>Label</th>
                <th>Value</th>
              </tr>
            </thead>
            {renderDataList()}
          </table>
        )}
      </div>
    </div>
  );
};
export default TitlesSold;
