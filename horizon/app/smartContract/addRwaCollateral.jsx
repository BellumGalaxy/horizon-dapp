"use client";
import { Web3Button, useContract, useContractWrite } from "@thirdweb-dev/react";
import Horizon_ABI from "../contracts_abi/Horizon.json";
import { toast } from "react-toastify";

const contractAddress = "0x8feb780f9152303a53f4687d0da2d89743f30e15";

export default function AddRWA({ titleId, contractId }) {
  const { _format, contractName, sourceName, abi } = Horizon_ABI;
  const { contract } = useContract(contractAddress, abi);
  const { mutateAsync, isLoading } = useContractWrite(
    contract,
    "addRWACollateral"
  );

  return (
    <div>
      {/* RWAStatus usar esse aqui como condicional de sucesso de envio */}
      <p>
        By clicking this button, you will be creating a permission to allocate
        your RWA as collateral in Avalanche Fuji.
      </p>
      <div className="mt-5 flex justify-center">
        <Web3Button
          contractAddress={contractAddress}
          contractAbi={abi}
          action={() =>
            mutateAsync({
              args: [titleId, contractId],
            })
          }
          disable={isLoading}
          onSuccess={(result) => {
            console.log(result);
            toast.success("Your request is being processed!");
          }}
          onError={(error) => {
            console.error(error);
            toast.error("An error occurred while processing your request!");
          }}
        >
          {isLoading ? "Processing..." : "Add Collateral"}
        </Web3Button>
      </div>
    </div>
  );
}
