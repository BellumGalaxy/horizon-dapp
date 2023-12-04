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

const contractAddress = "0xA67Af3c365778A2DD0E00cE1D717309B8ccD76C5";

export default function VerifyCollateralValue({
  titleId,
  contractId,
  titleData,
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

  const drawSelected = titleData ? titleData[8].toString() : "N/A";
  
  const args = [vehicleType, brandId, modelId, fabricationYear];

  return (
    <ThirdwebProvider activeChain={AvalancheFuji}>
      <div>
        <h3>RWA ID</h3>
        <input
          type="text"
          placeholder="Enter your RWA identifier"
          className="input input-bordered w-full max-w-xs m-2"
          value={rwaId}
          onChange={handleRwaIdChange}
          required
        />
        <h3>Vehicle Type</h3>
        <input
          type="text"
          placeholder="Vehicle Type"
          className="input input-bordered w-full max-w-xs m-2"
          value={vehicleType}
          onChange={(e) => setVehicleType(e.target.value)}
          required
        />
        <h3>Brand Id</h3>
        <input
          type="text"
          placeholder="Brand ID"
          className="input input-bordered w-full max-w-xs m-2"
          value={brandId}
          onChange={(e) => setBrandId(e.target.value)}
          required
        />
        <h3>Model Id</h3>
        <input
          type="text"
          placeholder="Model ID"
          className="input input-bordered w-full max-w-xs m-2"
          value={modelId}
          onChange={(e) => setModelId(e.target.value)}
          required
        />
        <h3>Fabrication Year</h3>
        <input
          type="text"
          placeholder="Fabrication Year"
          className="input input-bordered w-full max-w-xs m-2"
          value={fabricationYear}
          onChange={(e) => setFabricationYear(e.target.value)}
          required
        />
        <div className="mt-5 flex justify-center">
          <Web3Button
            contractAddress={contractAddress}
            contractAbi={abi}
            action={() =>
              mutateAsync({
                args: [titleId, contractId, drawSelected, rwaId, args],
              })
            }
            disable={isLoading}
            onSuccess={(result) => console.log(result)}
            onError={(error) => console.log(error)}
          >
            Check Collateral Value
          </Web3Button>
        </div>
      </div>
    </ThirdwebProvider>
  );
}
