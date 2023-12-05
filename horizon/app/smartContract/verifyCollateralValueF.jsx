"use client";
import { useState } from "react";
import {
  useContract,
  useContractWrite,
  Web3Button,
  ThirdwebProvider,
} from "@thirdweb-dev/react";
import HorizonR_ABI from "../contracts_abi/HorizonFujiR";
import { AvalancheFuji } from "@thirdweb-dev/chains";
import { toast } from "react-toastify";

const contractAddress = "0xA67Af3c365778A2DD0E00cE1D717309B8ccD76C5";

export default function VerifyCollateralValue({
  titleId,
  contractId,
  titleSoldInfos,
}) {
  const { _format, contractName, sourceName, abi } = HorizonR_ABI;
  const { contract } = useContract(contractAddress, abi);
  const { mutateAsync, isLoading } = useContractWrite(
    contract,
    "verifyCollateralValue"
  ); // ["motos","77","5223","2015-1"]

  const [rwaId, setRwaId] = useState("");
  const [vehicleType, setVehicleType] = useState("");
  const [brandId, setBrandId] = useState("");
  const [modelId, setModelId] = useState("");
  const [fabricationYear, setFabricationYear] = useState("");

  const handleRwaIdChange = (event) => {
    setRwaId(event.target.value);
  };

  const drawSelected = titleSoldInfos ? titleSoldInfos[8].toString() : "N/A";

  const args = [vehicleType, brandId, modelId, fabricationYear];

  return (
    <ThirdwebProvider activeChain={AvalancheFuji}>
      <div className="flex items-center space-x-2">
        <div>
          <h3>Real Word Asset ID</h3>
          <input
            type="text"
            placeholder="RWA identifier"
            className="input input-bordered w-full max-w-xs"
            value={rwaId}
            onChange={handleRwaIdChange}
            required
          />
        </div>
        <div>
          <h3>Vehicle Type</h3>
          <input
            type="text"
            placeholder="Vehicle Type"
            className="input input-bordered w-full max-w-xs"
            value={vehicleType}
            onChange={(e) => setVehicleType(e.target.value)}
            required
          />
        </div>
        <div>
          <h3>Brand Id</h3>
          <input
            type="text"
            placeholder="Brand ID"
            className="input input-bordered w-full max-w-xs"
            value={brandId}
            onChange={(e) => setBrandId(e.target.value)}
            required
          />
        </div>
        <div>
          <h3>Model Id</h3>
          <input
            type="text"
            placeholder="Model ID"
            className="input input-bordered w-full max-w-xs"
            value={modelId}
            onChange={(e) => setModelId(e.target.value)}
            required
          />
        </div>
        <div>
          <h3>Fabrication Year</h3>
          <input
            type="text"
            placeholder="Fabrication Year"
            className="input input-bordered w-full max-w-xs"
            value={fabricationYear}
            onChange={(e) => setFabricationYear(e.target.value)}
            required
          />
        </div>
        <div className="mt-5">
          <Web3Button
            contractAddress={contractAddress}
            contractAbi={abi}
            action={() =>
              mutateAsync({
                args: [titleId, contractId, drawSelected, rwaId, args],
              })
            }
            disable={isLoading}
            onSuccess={(result) => {
              console.log(result);
              toast.success("Request successfully sent!");
            }}
            onError={(error) => {
              console.error(error);
              toast.error("Error during the request submission!");
            }}
          >
            Check Collateral Value
          </Web3Button>
        </div>
      </div>
    </ThirdwebProvider>
  );
}
