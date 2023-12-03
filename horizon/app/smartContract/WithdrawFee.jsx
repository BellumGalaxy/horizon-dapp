"use client";
import { useContract, useContractWrite, Web3Button } from "@thirdweb-dev/react";
import HorizonStaff_ABI from "../contracts_abi/HorizonStaff.json";

const contractAddress = "0x3547951AAA367094AFABcaE24f123473fF502bFa";

export default function WithdrawFee() {
  const { _format, contractName, sourceName, abi } = HorizonStaff_ABI;
  const { contract } = useContract(contractAddress, abi);
  const stablecoin = "0xA372e43b968AB1Cbf921dC198a8B6dD831cEEf56";
  const { mutateAsync, isLoading } = useContractWrite(
    contract,
    "withdrawProtocolFee"
  );

  return (
    <div className="flex flex-col items-center justify-center space-x-3">
      <Web3Button
        contractAddress={contractAddress}
        contractAbi={abi}
        action={() =>
          mutateAsync({
            args: [stablecoin],
          })
        }
        disable={isLoading}
        onSuccess={(result) => console.log(result)}
        onError={(error) => console.log(error)}
      >
        Withdraw
      </Web3Button>
    </div>
  );
}
