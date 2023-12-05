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
import { toast } from "react-toastify";

const contractAddress = "0xA67Af3c365778A2DD0E00cE1D717309B8ccD76C5";

export default function AddCollateralF({ titleId, contractId, titleSoldInfos }) {
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

  const readableData = titleSoldInfos
    ? convertBigNumbers(Object.values(titleSoldInfos))
    : [];

  const drawSelected = readableData[7];

  return (
    <ThirdwebProvider activeChain={AvalancheFuji}>
      <div className="flex items-center space-x-2">
        <div className="mb-2">
          <h3>Real Word Asset ID</h3>
          <input
            type="text"
            placeholder="Enter your RWA identifier"
            className="input input-bordered w-200"
            value={rwaId}
            onChange={handleRwaIdChange}
          />
        </div>
        <div className="mt-4">
          <Web3Button
            contractAddress={contractAddress}
            contractAbi={abi}
            action={() =>
              mutateAsync({
                args: [titleId, contractId, drawSelected, rwaId],
              })
            }
            disable={isLoading}
            onSuccess={(result) => {
              console.log(result);
              toast.success("Asset added correctly!");
            }}
            onError={(error) => {
              console.error(error);
              toast.error("Error in adding the asset as collateral!");
            }}
          >
            {isLoading ? "Processing..." : "Add Collateral"}
          </Web3Button>
        </div>
      </div>
    </ThirdwebProvider>
  );
}
