import { useContract, useContractWrite } from "@thirdweb-dev/react";
import HorizonR_ABI from "../contracts_abi/HorizonFujiR.json";

const contractAddress = "0xe5121F551333DD569602E82483641D8ad0D93718";

export default function VerifyCollateralValue() {
  const { _format, contractName, sourceName, abi } = HorizonR_ABI;
  const { contract } = useContract(
    contractAddress,
    abi
  );
  const { mutateAsync, isLoading } = useContractWrite(
    contract,
    "verifyCollateralValue"
  );

  return (
    <div>
      <Web3Button
        contractAddress={contractAddress}
        contractAbi={abi}
        action={() =>
          mutateAsync({
            args: [titleId, contractId, drawNumber, rwaId, args],
          })
        }
        disable={isLoading}
        onSuccess={(result) => alert("Success!")}
        onError={(error) => console.log(error)}
      >
        Check Collateral Value
      </Web3Button>
    </div>
  );
}
