"use client";
import React from "react";
import { useContract, useContractRead } from "@thirdweb-dev/react";
import Horizon_ABI from "../contracts_abi/Horizon.json";
import { BigNumber } from "ethers";

export default function MyTitles({ ownerAddress }) {
  const { _format, contractName, sourceName, abi } = Horizon_ABI;
  const { contract } = useContract(
    "0x57F4E779e346C285b2b4B6A342F01c471dcf224d",
    abi
  );
  const { data, isLoading } = useContractRead(contract, "titleOwner", [
    ownerAddress,
  ]);

  if (isLoading) {
    return <main>Loading...</main>;
  }

  if (!data) {
    return <main>No data available</main>;
  }

  console.log(data);

  return (
    <main>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src="/title2.jpg" className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-4xl font-bold text-center">
              Infos about your Title
            </h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut
            </p>
            <p>Contract ID: {data.contractId.toString()}</p>
            <p>Title Value: {data.titleValue.toString()}</p>
            <div className="space-x-20">
              <button className="btn btn-primary">Pay Installment</button>
              <button className="btn btn-primary">Add Coleteral</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
