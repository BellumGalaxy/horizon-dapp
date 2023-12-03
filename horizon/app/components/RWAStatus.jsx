"use client";
import { useContract, useContractEvents } from "@thirdweb-dev/react";
import { useEffect, useState } from "react";
import Spinner from "./Spinner";
import Horizon_ABI from "../contracts_abi/Horizon";

const contractAddress = "0x57F4E779e346C285b2b4B6A342F01c471dcf224d";

const RWAStatus = ({ titleId, contractId }) => {
  const { _format, contractName, sourceName, abi } = Horizon_ABI;
  const { contract } = useContract(contractAddress, abi);
  const { topics, data: events } = useContractEvents(
    contract,
    "CreatingPermission"
  );
  const [isLoading, setIsLoading] = useState(true);
  const [event, setEvent] = useState([]);

  return (
    <h1>REFAZER</h1>
  );
};

export default RWAStatus;
