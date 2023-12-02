import { useContract, useContractWrite } from "@thirdweb-dev/react";
import Horizon_ABI from "../contracts_abi/Horizon.json";

export default function RefundCollateral() {
  const { _format, contractName, sourceName, abi } = Horizon_ABI;
  const { contract } = useContract(
    "0x57F4E779e346C285b2b4B6A342F01c471dcf224d",
    abi
  );
  const { mutateAsync, isLoading } = useContractWrite(
    contract,
    "refundCollateral"
  );

  return (
    <div>
      <Web3Button
        contractAddress={contractAddress}
        contractAbi={abi}
        action={() =>
          mutateAsync({
            args: [idTitle, contractId],
          })
        }
        disable={isLoading}
        onSuccess={(result) => alert("Success!")}
        onError={(error) => console.log(error)}
      >
        Refund Collateral
      </Web3Button>
    </div>
  );
}
