import { useContract, useContractWrite, Web3Button } from "@thirdweb-dev/react";
import Horizon_ABI from "../contracts_abi/Horizon.json";
import DrawDate from "./drawDate";
import PaymentDeadline from "./paymentDeadline";
import { BigNumber } from "ethers";
import { toast } from "react-toastify";

const contractAddress = "0x8fEB780f9152303a53F4687D0da2d89743F30E15";
const stablecoin = "0xA372e43b968AB1Cbf921dC198a8B6dD831cEEf56";

export default function PayInstallment({
  titleId,
  contractId,
  titleSoldInfos,
  allTittles,
}) {
  const { _format, contractName, sourceName, abi } = Horizon_ABI;
  const { contract } = useContract(contractAddress, abi);
  const { mutateAsync, isLoading } = useContractWrite(
    contract,
    "payInstallment"
  );

  const convertBigNumbers = (bigNumbers) => {
    return bigNumbers.map((bigNumber) =>
      BigNumber.isBigNumber(bigNumber) ? bigNumber.toString() : bigNumber
    );
  };

  const readableData = titleSoldInfos
    ? convertBigNumbers(Object.values(titleSoldInfos))
    : [];

  const allTitlesReadableData = allTittles
    ? convertBigNumbers(Object.values(allTittles))
    : [];

  return (
    <div>
      <DrawDate
        scheduleId={readableData[1]}
        installmentNumber={allTitlesReadableData[3]}
        totalInstallments={allTitlesReadableData[5]}
      />
      <PaymentDeadline
        scheduleId={readableData[1]}
        installmentNumber={readableData[7]}
        totalInstallments={allTitlesReadableData[5]}
      />
      <div className="mt-5 flex justify-center">
        <Web3Button
          contractAddress={contractAddress}
          contractAbi={abi}
          action={() =>
            mutateAsync({
              args: [titleId, contractId, stablecoin],
            })
          }
          onSuccess={(result) => {
            console.log(result);
            toast.success("Installment successfully paid!");
          }}
          onError={(error) => {
            console.error(error);
            toast.error("Error in paying the installment!");
          }}
        >
          {isLoading ? "Processing..." : "Pay Installment"}
        </Web3Button>
      </div>
    </div>
  );
}
