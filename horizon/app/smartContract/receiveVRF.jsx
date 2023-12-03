"use client";
import { useState } from "react";
import { useContract, useContractWrite, Web3Button } from "@thirdweb-dev/react";
import Horizon_ABI from "../contracts_abi/Horizon.json";

const contractAddress = "0x8fEB780f9152303a53F4687D0da2d89743F30E15";

export default function SelectWinner({titleId}) {
  const { _format, contractName, sourceName, abi } = Horizon_ABI;
  const { contract } = useContract(contractAddress, abi);
  const { mutateAsync, isLoading } = useContractWrite(
    contract,
    "receiveVRFRandomNumber"
  );

  return (
    <div className="space-x-3">
      <Web3Button
        contractAddress={contractAddress}
        contractAbi={abi}
        action={() =>
          mutateAsync({
            args: [titleId],
          })
        }
        disable={isLoading}
        onSuccess={(result) => console.log(result)}
        onError={(error) => console.log(error)}
      >
        Call Chainlink VRF
      </Web3Button>
    </div>
  );
}
