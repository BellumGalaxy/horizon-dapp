import { useContract, useContractWrite } from "@thirdweb-dev/react";
import Horizon_ABI from "../contracts_abi/Horizon.json";
import DrawDate from "./drawDate";
import PaymentDeadline from "./paymentDeadline";
import { BigNumber } from "ethers";

const contractAddress = "0x57F4E779e346C285b2b4B6A342F01c471dcf224d";
const stablecoin = "0xA372e43b968AB1Cbf921dC198a8B6dD831cEEf56";

export default function PayInstallment({
  titleId,
  contractId,
  onReceiveData: data,
}) {
  const { _format, contractName, sourceName, abi } = Horizon_ABI;
  const { contract } = useContract(contractAddress, abi);
  const { mutateAsync: payInstallment, isLoading } = useContractWrite(
    contract,
    "payInstallment"
  );

  const convertBigNumbers = (bigNumbers) => {
    return bigNumbers.map((bigNumber) =>
      BigNumber.isBigNumber(bigNumber) ? bigNumber.toString() : bigNumber
    );
  };

  const readableData = data ? convertBigNumbers(Object.values(data)) : [];

  const call = async () => {
    try {
      const data = await payInstallment({
        args: [titleId, contractId, stablecoin],
      });
      console.info("contract call successs", data);
    } catch (err) {
      console.error("contract call failure", err);
    }
  };
  return (
    <div>
      <DrawDate scheduleId={""} installmentNumber={readableData[6]} />
      <PaymentDeadline
        scheduleId={""}
        installmentNumber={parseInt(readableData[6]) + 1}
      />
    </div>
  );
}
