import React, { useState, useEffect } from "react";
import {
  useContract,
  useContractEvents,
  useContractWrite,
} from "@thirdweb-dev/react";
import HorizonFunctions_ABI from "../contracts_abi/HorizonFunctions";
import HorizonR_ABI from "../contracts_abi/HorizonFujiR";

const contractAddress = "0x8fEB780f9152303a53F4687D0da2d89743F30E15";
const contractExecuteAddress = "0xe5121F551333DD569602E82483641D8ad0D93718";

const CollateralMonitor = () => {
  const { abi } = HorizonFunctions_ABI;
  const { contract } = useContract(contractAddress, abi);
  const { data: events } = useContractEvents(contract, "Response");

  const { _format, contractName, sourceName, abi_r } = HorizonR_ABI;
  const { contractExecute } = useContract(contractExecuteAddress, abi_r);
  const { mutateAsync, isLoading } = useContractWrite(
    contractExecute,
    "getCollateralPrice"
  );

  useEffect(() => {
    if (events && events.length > 0) {
      const recentEvent = events[0];

      mutateAsync({})
        .then((result) => {
          console.log("Function Successfully executed:", result);
        })
        .catch((error) => {
          console.error("Something went wrong to execute the function:", error);
        });
    }
  }, [events, mutateAsync]);

  return <div></div>;
};
export default CollateralMonitor;
