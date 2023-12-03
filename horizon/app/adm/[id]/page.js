"use client";
import MyCollapse from "@/app/components/Collapse";
import { AllTitles, CallVRF, DrawDate, PaymentDeadline, SelectWinner, UpdateTitle, VerifyLatePayment } from "@/app/smartContract";
import TitleAmercement from "@/app/smartContract/TitleAmercement";
import { useContract, useContractRead } from "@thirdweb-dev/react";
import Horizon_ABI from "../../contracts_abi/Horizon.json";
import { BigNumber } from "ethers";

const contractAddress = "0x8feb780f9152303a53f4687d0da2d89743f30e15";

const ManageTitles = ({ params }) => {
  const titleId = params.id[0];
  
  const { _format, contractName, sourceName, abi } = Horizon_ABI;
  const { contract } = useContract(contractAddress, abi);
  const { data, isLoading } = useContractRead(contract, "allTitles", [
    params.id,
  ]);

  const convertBigNumbers = (bigNumbers) => {
    return bigNumbers.map((bigNumber) =>
      BigNumber.isBigNumber(bigNumber) ? bigNumber.toString() : bigNumber
    );
  };

  const readableData = data ? convertBigNumbers(Object.values(data)) : [];

  const scheduleId = readableData[2];
  const installmentNumber = readableData[3];

  return (
    <div className="space-y-3">
      <MyCollapse title="More info about Title">
        <AllTitles titleId={titleId} />

        <DrawDate
          scheduleId={scheduleId}
          installmentNumber={installmentNumber}
        />

        <PaymentDeadline
          scheduleId={scheduleId}
          installmentNumber={installmentNumber}
        />
      </MyCollapse>
      <MyCollapse title="Call Chainlink VRF">
        <CallVRF titleId={titleId} />
      </MyCollapse>
      <MyCollapse title="Select Winner">
        <SelectWinner titleId={titleId} />
      </MyCollapse>
      <MyCollapse title="Update Titles">
        <UpdateTitle titleId={titleId} />
      </MyCollapse>
      <MyCollapse title="Verify Late Payments">
        <VerifyLatePayment titleId={titleId} />
      </MyCollapse>
      <MyCollapse title="Withdraw Amercement">
        <TitleAmercement titleId={titleId} />
      </MyCollapse>
    </div>
  );
};
export default ManageTitles;
