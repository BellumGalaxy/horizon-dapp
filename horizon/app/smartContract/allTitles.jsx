"use client";
import React from "react";
import { useContract, useContractRead } from "@thirdweb-dev/react";
import ThirdwebProviderApp from "../components/ThirdWebProvider";
import Horizon_ABI from "../contracts_abi/Horizon.json";

export default function AllTitles({ titleId }) {
  const { _format, contractName, sourceName, abi } = Horizon_ABI;
  const { contract } = useContract(
    "0xA40248f23B9a587F90827746E79AF361aDFb3844",
    abi
  );
  const { data, isLoading } = useContractRead(contract, "allTitles", [titleId]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!data) {
    return <div>No data found</div>;
  }

  return (
      <div>
        <p>Title ID: {titleId}</p>
        <p>Opening Date: {data.openingDate}</p>
        <p>Closing Date: {data.closingDate}</p>
        <p>Participants: {data.participants}</p>
        <p>Value: {data.value}</p>
      </div>
  );
}