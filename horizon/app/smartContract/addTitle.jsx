import { Web3Button, useContract, useContractWrite } from "@thirdweb-dev/react";
import Horizon_ABI from "../contracts_abi/Horizon.json";

const contractAddress = "0xA40248f23B9a587F90827746E79AF361aDFb3844";

export default function AddTitle({ titleId, contractId }) {
  const { _format, contractName, sourceName, abi } = Horizon_ABI;
  const { contract } = useContract(contractAddress, abi);
  const { mutateAsync: addTitleAsColateral, isLoading } = useContractWrite(
    contract,
    "addTitleAsColateral"
  );

  const call = async () => {
    try {
      const data = await addTitleAsColateral({
        args: [
          titleId,
          contractId,
          _idOfColateralTitle,
          _idOfColateralContract,
        ],
      });
      console.info("contract call successs", data);
    } catch (err) {
      console.error("contract call failure", err);
    }
  };

  return (
    <div>
      <div>
        <h1>Enter the titleId you want to use as collateral</h1>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
          required
        />
        <h1>Enter the contractId you want to use as collateral</h1>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
          required
        />
      </div>
      <div className="mt-5">
        <Web3Button
          contractAddress={contractAddress}
          onClick={call}
        >
          {isLoading ? "Processing..." : "Add Collateral"}
        </Web3Button>
      </div>
    </div>
  );
}
