"use client";
import Title from "../../../components/Title";
import React from "react";
import { useContract, useContractRead } from "@thirdweb-dev/react";
import Horizon_ABI from "../../../contracts_abi/Horizon.json";
import { BigNumber } from "ethers";

const contractAddress = "0x8feb780f9152303a53f4687d0da2d89743f30e15";

const CheckoutPage = ({ params }) => {
  const { _format, contractName, sourceName, abi } = Horizon_ABI;
  const { contract } = useContract(contractAddress, abi);
  const { data, isLoading } = useContractRead(contract, "allTitles", [params.id]);

  const convertBigNumbers = (bigNumbers) => {
    return bigNumbers.map((bigNumber) =>
      BigNumber.isBigNumber(bigNumber) ? bigNumber.toString() : bigNumber
    );
  };

  const readableData = data ? convertBigNumbers(Object.values(data)) : [];

  const scheduleId = readableData[2];
  const installmentNumber = readableData[3];
  
  return (
    <div>
      <Title titleId={params.id} scheduleId={scheduleId} installmentNumber={installmentNumber} />
    </div>
  );
};

export default CheckoutPage;
