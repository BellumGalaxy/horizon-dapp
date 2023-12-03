import { useContract, useContractWrite } from "@thirdweb-dev/react";
import Horizon_ABI from "../contracts_abi/Horizon.json";

const contractAddress = "0x8fEB780f9152303a53F4687D0da2d89743F30E15";

export default function VerifyLatePayment() {
  const { _format, contractName, sourceName, abi } = Horizon_ABI;
  const { contract } = useContract(contractAddress, abi);
  const { mutateAsync, isLoading } = useContractWrite(
    contract,
    "verifyLatePayments"
  );

  return (
    <div>
      <Web3Button
        contractAddress={contractAddress}
        contractAbi={abi}
        action={() =>
          mutateAsync({
            args: [titleId, contractId],
          })
        }
        disable={isLoading}
        onSuccess={(result) => alert("Success!")}
        onError={(error) => console.log(error)}
      >
        Verify Late Payments
      </Web3Button>
    </div>
  );
}
