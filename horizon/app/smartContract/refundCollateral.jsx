import { useContract, useContractWrite } from "@thirdweb-dev/react";
import Horizon_ABI from "../contracts_abi/Horizon.json";
import { toast } from "react-toastify";

export default function RefundCollateral({ titleId, contractId }) {
  const { _format, contractName, sourceName, abi } = Horizon_ABI;
  const { contract } = useContract(
    "0x8fEB780f9152303a53F4687D0da2d89743F30E15",
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
        onSuccess={(result) => {
          console.log(result);
          toast.success("Collateral successfully returned!");
        }}
        onError={(error) => {
          console.error(error);
          toast.error("Error in returning the collateral!");
        }}
      >
        Refund Collateral
      </Web3Button>
    </div>
  );
}
