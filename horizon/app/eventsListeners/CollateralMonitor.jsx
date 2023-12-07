import React, { useState, useEffect } from "react";
import {
  useContract,
  useContractEvents,
  useContractWrite,
} from "@thirdweb-dev/react";
import HorizonFunctions_ABI from "../contracts_abi/HorizonFunctions";
import HorizonR_ABI from "../contracts_abi/HorizonFujiR";

const contractAddress = "0x317383204E6406B61258cB53D535AE770B7a984F";
const contractExecuteAddress = "0xA67Af3c365778A2DD0E00cE1D717309B8ccD76C5";

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

  console.log(contract);
  console.log(contractExecute);

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
