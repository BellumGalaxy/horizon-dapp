"use client";
import { useState } from "react";
import {
  Web3Button,
  useContract,
  useContractWrite,
  ThirdwebProvider,
} from "@thirdweb-dev/react";
import HorizonR_ABI from "../contracts_abi/HorizonFujiR.json";
import { BigNumber } from "ethers";
import { AvalancheFuji } from "@thirdweb-dev/chains";

const contractAddress = "0xA67Af3c365778A2DD0E00cE1D717309B8ccD76C5";

export default function AddCollateralF({ titleId, contractId, titleData }) {
  const { _format, contractName, sourceName, abi } = HorizonR_ABI;
  const { contract } = useContract(contractAddress, abi);

  
  const { mutateAsync, isLoading } = useContractWrite(
    contract,
    "addCollateral"
  );
  const [rwaId, setRwaId] = useState("");

  const handleRwaIdChange = (event) => {
    setRwaId(event.target.value);
  };

  const convertBigNumbers = (bigNumbers) => {
    return bigNumbers.map((bigNumber) =>
      BigNumber.isBigNumber(bigNumber) ? bigNumber.toString() : bigNumber
    );
  };

  const readableData = titleData
    ? convertBigNumbers(Object.values(titleData))
    : [];

  const drawSelected = readableData[7];


  return (
    <ThirdwebProvider activeChain={AvalancheFuji}>
      <div>
        <input
          type="text"
          placeholder="Enter your RWA identifier"
          className="input input-bordered w-full max-w-xs m-2"
          value={rwaId}
          onChange={handleRwaIdChange}
        />
        <Web3Button
          contractAddress={contractAddress}
          contractAbi={abi}
          action={() =>
            mutateAsync({
              args: [titleId, contractId, drawSelected, rwaId],
            })
          }
          disable={isLoading}
          onSuccess={(result) => console.log(result)}
          onError={(error) => console.log(error)}
        >
          {isLoading ? "Processing..." : "Add Collateral"}
        </Web3Button>
      </div>
    </ThirdwebProvider>
  );
}
