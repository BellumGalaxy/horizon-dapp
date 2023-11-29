"use client";
import React from "react";
import { ThirdwebProvider, useContract, useContractRead } from "@thirdweb-dev/react";
import { CLIENT_ID } from "@/addresses/address";

export default function AllTitles({ titleId }) {
  const { contract } = useContract("0xA40248f23B9a587F90827746E79AF361aDFb3844");
  const { data, isLoading } = useContractRead(contract, "allTitles", [titleId]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!data) {
    return <div>No data found</div>;
  }

  return (
    <ThirdwebProvider activeChain="mumbai" clientId={CLIENT_ID}>
      <div>
        <p>Title ID: {titleId}</p>
        <p>Opening Date: {data.openingDate}</p>
        <p>Closing Date: {data.closingDate}</p>
        <p>Participants: {data.participants}</p>
        <p>Value: {data.value}</p>
      </div>
    </ThirdwebProvider>
  );
}


// // Definir
// localStorage.setItem('titleId', titleId);

// // Obter
// const savedTitleId = localStorage.getItem('titleId');