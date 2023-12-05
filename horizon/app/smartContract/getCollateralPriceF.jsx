import { useContract, useContractWrite, Web3Button } from "@thirdweb-dev/react";
import HorizonR_ABI from "../contracts_abi/HorizonFujiR.json";
import { toast } from "react-toastify";

const contractAddress = "0xA67Af3c365778A2DD0E00cE1D717309B8ccD76C5";

export default function GetCollateralPriceF() {
  const { _format, contractName, sourceName, abi } = HorizonR_ABI;
  const { contract } = useContract(contractAddress, abi);
  const { mutateAsync, isLoading } = useContractWrite(
    contract,
    "getCollateralPrice"
  );

  return (
    <div>
      <Web3Button
        contractAddress={contractAddress}
        contractAbi={abi}
        action={() =>
          mutateAsync({
            args: [{ args }],
          })
        }
        disable={isLoading}
        onSuccess={(result) => {
          console.log(result);
          toast.success("The request was sent correctly!");
        }}
        onError={(error) => {
          console.error(error);
          toast.error("Error in making the request!");
        }}
      >
        Get Collateral Price
      </Web3Button>
    </div>
  );
}
