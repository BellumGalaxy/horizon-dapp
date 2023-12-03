import { Web3Button, useContract, useContractWrite } from "@thirdweb-dev/react";
import Horizon_ABI from "../contracts_abi/Horizon.json";

const contractAddress = "0xA40248f23B9a587F90827746E79AF361aDFb3844";

export default function AddTitle({ titleId, contractId }) {
  const { _format, contractName, sourceName, abi } = Horizon_ABI;
  const { contract } = useContract(contractAddress, abi);
  const { mutateAsync, isLoading } = useContractWrite(
    contract,
    "addTitleAsCollateral"
  );

  return (
    <div>
      <div>
        <h1>Enter the ID of the title you want to use as collateral</h1>
        <input
          type="text"
          placeholder="Title ID"
          className="input input-bordered w-full max-w-xs"
          required
        />
        <h1>Enter the ID of the contract you want to use as collateral</h1>
        <input
          type="text"
          placeholder="Contract ID"
          className="input input-bordered w-full max-w-xs"
          required
        />
      </div>
      <div className="mt-5 flex justify-center">
        <Web3Button
          contractAddress={contractAddress}
          contractAbi={abi}
          action={() =>
            mutateAsync({
              args: [
                titleId,
                contractId,
                _idOfCollateralTitle,
                _idOfCollateralContract,
              ],
            })
          }
          disable={isLoading}
          onSuccess={(result) => console.log(result)}
          onError={(error) => console.log(error)}
        >
          {isLoading ? "Processing..." : "Add Collateral"}
        </Web3Button>
      </div>
    </div>
  );
}
