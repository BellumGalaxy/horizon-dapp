"use client";
import { Web3Button, useContract, useContractWrite } from "@thirdweb-dev/react";
import Horizon_ABI from "../contracts_abi/Horizon.json";
import TitlesSold from "./titlesSold";

const contractAddress = "0x8feb780f9152303a53f4687d0da2d89743f30e15";

export default function AddRWA({ idTitle, contractId }) {
  const { _format, contractName, sourceName, abi } = Horizon_ABI;
  const { contract } = useContract(contractAddress, abi);
  const { mutateAsync, isLoading } = useContractWrite(
    contract,
    "addRWACollateral"
  );

  return (
    <div>
      <p>
        By clicking this button, you will be creating a permission to allocate your RWA as collateral in Avalanche Fuji.
      </p>
      <div className="mt-5 flex justify-center">
        <Web3Button
          contractAddress={contractAddress}
          contractAbi={abi}
          action={() =>
            mutateAsync({
              args: [idTitle, contractId],
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
