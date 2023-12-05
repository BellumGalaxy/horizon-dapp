import React, { useState, useEffect } from "react";
import {
  useContract,
  useContractEvents,
  useContractWrite,
} from "@thirdweb-dev/react";
import HorizonFunctions_ABI from "../contracts_abi/HorizonFunctions";
import HorizonR_ABI from "../contracts_abi/HorizonFujiR";

const contractAddress = "0x317383204E6406B61258cB53D535AE770B7a984F";
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
