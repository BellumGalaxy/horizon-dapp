import { Web3Button, useContract, useContractWrite } from "@thirdweb-dev/react";
import Horizon_ABI from "../contracts_abi/Horizon.json";
import { useState } from "react";

const contractAddress = "0x8feb780f9152303a53f4687d0da2d89743f30e15";

export default function AddTitle({ titleId, contractId }) {
  const { _format, contractName, sourceName, abi } = Horizon_ABI;
  const { contract } = useContract(contractAddress, abi);
  const { mutateAsync, isLoading } = useContractWrite(
    contract,
    "addTitleAsCollateral"
  );

  const [collateralTitle, setCollateralTitle] = useState("");
  const [collateralContract, setCollateralContract] = useState("");

  return (
    <div>
      <div>
        <h1>Enter the ID of the title you want to use as collateral</h1>
        <input
          type="text"
          placeholder="Title ID"
          value={collateralTitle}
          onChange={(e) => setCollateralTitle(e.target.value)}
          className="input input-bordered w-full max-w-xs"
          required
        />
        <h1>Enter the ID of the contract you want to use as collateral</h1>
        <input
          type="text"
          placeholder="Contract ID"
          value={collateralContract}
          onChange={(e) => setCollateralContract(e.target.value)}
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
              args: [titleId, contractId, collateralTitle, collateralContract],
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
