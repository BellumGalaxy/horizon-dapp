"use client";
import React, { useState, useEffect } from "react";
import { useContract, useContractEvents } from "@thirdweb-dev/react";
import Link from "next/link";
import Horizon_ABI from "../contracts_abi/Horizon.json";
import Spinner from "./Spinner";
import { ethers } from "ethers";

const titleImages = [
  "/tokens/token1.jpg",
  "/tokens/token3.jpg",
  "/tokens/token2.jpg",
  "/tokens/token4.jpg",
];

const Titles = () => {
  const { _format, contractName, sourceName, abi } = Horizon_ABI;
  const { contract } = useContract(
    "0x57F4E779e346C285b2b4B6A342F01c471dcf224d",
    abi
  );
  const { topics, data: events } = useContractEvents(
    contract,
    "NewTitleCreated"
  );
  const [titles, setTitles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    if (events && events.length > 0) {
      const formattedEvents = events.map((event) => {
        const eventData = event.data;
        return {
          _titleId: eventData?._titleId?.toString() ?? "N/A",
          _scheduleId: eventData?._scheduleId?.toString() ?? "N/A",
          _monthlyValue: eventData?._monthlyValue?.toString() ?? "N/A",
          _titleValue:
            convertWeiToDollar(eventData?._titleValue?.toString()) ?? "N/A",
        };
      });
      setTitles(formattedEvents);
    } else {
      setTitles([]);
    }
    setIsLoading(false);
  }, [events]);

const convertWeiToDollar = (wei) => {
  const ether = ethers.utils.formatEther(wei || "0");
  const dollarValue = parseFloat(ether); 
  return dollarValue.toFixed(2);
};

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
            key={event._titleId}
            className="card card-side bg-base-100 shadow-xl mt-5"
          >
            <figure className="justify-items-start lg:max-h-96 lg:max-w-96">
              <img
                src={titleImages[index % titleImages.length]}
                alt={`Title ${event._titleId}`}
              />
            </figure>
            <div className="card-body place-content-center">
              <h2 className="card-title">Title ID: {event._titleId}</h2>
              <ul>
                <li>Schedule: {event._scheduleId}</li>
                <li>Value: ${event._titleValue}</li>
                <li>Monthly Value: ${event._monthlyValue}</li>
                <li>Installments: {event._installments}</li>
              </ul>
              <div className="card-actions">
                <Link href={`/allproducts/${event._titleId}`}>
                  <button className="btn btn-accent text-base-100">
                    More info
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))
      )}
    </main>
  );
};
export default Titles;
