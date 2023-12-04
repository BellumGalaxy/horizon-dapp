"use client";
import React, { useState, useEffect } from "react";
import { useContract, useContractEvents } from "@thirdweb-dev/react";
import Horizon_ABI from "../contracts_abi/Horizon.json";
import Spinner from "../components/Spinner";
import { ethers } from "ethers";

const formatDate = (date) => {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  }).format(date);
};

const PrizesPaid = () => {
  const { abi } = Horizon_ABI;
  const { contract } = useContract(
    "0x8fEB780f9152303a53F4687D0da2d89743F30E15",
    abi
  );
  const { data: events } = useContractEvents(contract, "MonthlyWinnerPaid");
  const [titles, setTitles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    if (events && events.length > 0) {
      const newFormattedEvents = events.map((event) => {
        const eventData = event.data;

        return {
          _idTitle: eventData?._idTitle?.toString() ?? "N/A",
          _drawNumber: eventData?._drawNumber?.toString() ?? "N/A",
          _winner: eventData?._winner?.toString() ?? "N/A",
          _titleValue: convertWeiToDollar(eventData?._titleValue) ?? "N/A",
        };
      });
      setTitles((prevTitles) => {
        const existingIds = new Set(
          prevTitles.map((e) => e._idTitle + e._drawNumber)
        );
        const uniqueNewEvents = newFormattedEvents.filter((newEvent) => {
          return !existingIds.has(newEvent._idTitle + newEvent._drawNumber);
        });
        return [...prevTitles, ...uniqueNewEvents];
      });
    }
    setIsLoading(false);
  }, [events]);

  const convertWeiToDollar = (wei) => {
    const ether = ethers.utils.formatEther(wei || "0");
    const dollarValue = parseFloat(ether);
    return dollarValue.toFixed(2);
  };

  return (
    <main className="mt-5 w-full">
      {isLoading ? (
        <div className="flex justify-center items-center">
          <Spinner />
        </div>
      ) : (
        <div className="card card-side bg-base-100 shadow-xl mt-5 w-full">
          <div className="overflow-x-auto w-full">
            <table className="table table-zebra w-full">
              {/* head */}
              <thead>
                <tr>
                  <th>Title ID</th>
                  <th>Draw Number</th>
                  <th>Prize Value</th>
                  <th className="text-center">Winner</th>
                </tr>
              </thead>
              <tbody>
                {titles.slice(0, 5).map((event, index) => (
                  // row for each event
                  <tr key={index}>
                    <th>{event._idTitle}</th>
                    <td>{event._drawNumber}</td>
                    <td>{event._titleValue}</td>
                    <td className="text-center">{event._winner}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </main>
  );
};

export default PrizesPaid;
