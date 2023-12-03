"use client";
import { useContract, useContractEvents } from "@thirdweb-dev/react";
import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import Horizon_ABI from "../contracts_abi/Horizon";

const contractAddress = "0x8fEB780f9152303a53F4687D0da2d89743F30E15";

const RWAStatus = () => {
  const { _format, contractName, sourceName, abi } = Horizon_ABI;
  const { contract } = useContract(contractAddress, abi);
  const { topics, data: permission } = useContractEvents(
    contract,
    "CreatingPermission"
  );
  const [isLoading, setIsLoading] = useState(true);
  const [event, setEvent] = useState([]);

  console.log(permission);

  return <h1>REFAZER</h1>;
};

export default RWAStatus;
