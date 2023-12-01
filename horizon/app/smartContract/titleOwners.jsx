"use client";
import React, { useState, useEffect } from "react";
import { useContract, useContractEvents } from "@thirdweb-dev/react";
import Horizon_ABI from "../contracts_abi/Horizon.json";
import Spinner from "../components/Spinner";
import TitleOwnersModal from "../components/TitlesOwnerModal";

const contractAddress = "0x57F4E779e346C285b2b4B6A342F01c471dcf224d";

export default function TitleOwners() {
  const { _format, contractName, sourceName, abi } = Horizon_ABI;
  const { contract } = useContract(contractAddress, abi);
  const { topics, data: events } = useContractEvents(contract, "NewTitleSold");
  const [titles, setTitles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    if (events && events.length > 0) {
      const formattedEvents = events.map((event) => {
        const eventData = event.data;
        return {
          titleId: eventData?.titleId?.toString() ?? "N/A",
          _contractId: eventData?._contractId?.toString() ?? "N/A",
          _owner: eventData?._owner?.toString() ?? "N/A",
        };
      });
      setTitles(formattedEvents);
    } else {
      setTitles([]);
    }
    setIsLoading(false);
  }, [events]);

  return (
    <main className="mt-5">
      {isLoading ? (
        <div className="flex justify-center items-center">
          <div
            className="spinner-border animate-spin inline-block w-16 h-16 border-4 rounded-full"
            role="status"
          >
            <span className="visually-hidden">
              <Spinner />
            </span>
          </div>
        </div>
      ) : (
        titles.map((event, index) => (
          <div
            key={index}
            className="card card-side bg-base-100 shadow-xl mt-5"
          >
            <div className="hero min-h-screen bg-base-200">
              <div className="hero-content flex-col lg:flex-row-reverse">
                <h1 className="font-bold text-lg my-2">School Financing</h1>
                <img
                  src="/title2.jpg"
                  className="max-w-xl rounded-lg shadow-2xl"
                />
                <div className="card-body place-content-center">
                  <p className="">Hello! Welcome back!</p>
                  <p className="py-3">
                    We were protecting your investments while you weren't
                    around.
                  </p>
                  <h2 className="card-title">Title ID: {event._titleId}</h2>
                  <ul>
                    <li>Title Id: {event.titleId}</li>
                    <li>Contract Id: {event._contractId}</li>
                    <li>Owner: {event._owner}</li>
                  </ul>
                </div>
                <div>
                  <TitleOwnersModal
                    titleId={event.titleId}
                    contractId={event._contractId}
                  />
                </div>
              </div>
            </div>
          </div>
        ))
      )}
    </main>
  );
}
