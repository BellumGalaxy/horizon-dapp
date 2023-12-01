"use client";
import React, { useState, useEffect } from "react";
import { useContract, useContractEvents } from "@thirdweb-dev/react";
import Horizon_ABI from "../contracts_abi/Horizon.json";
import Spinner from "./Spinner";

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

const WinnerSelected = () => {
  const { abi } = Horizon_ABI;
  const { contract } = useContract(
    "0x57F4E779e346C285b2b4B6A342F01c471dcf224d",
    abi
  );
  const { data: events } = useContractEvents(contract, "MonthlyWinnerSelected");
  const [titles, setTitles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    if (events && events.length > 0) {
      const now = new Date();
      const formattedDate = formatDate(now);

      const newFormattedEvents = events.map((event) => {
        const eventData = event.data;
        return {
          _date: formattedDate,
          _idTitle: eventData?._idTitle?.toString() ?? "N/A",
          _drawNumber: eventData?._drawNumber?.toString() ?? "N/A",
          _randomValue: eventData?._randomValue?.toString() ?? "N/A",
          _selectedContractId:
            eventData?._selectedContractId?.toString() ?? "N/A",
          _winner: eventData?._winner?.toString() ?? "N/A",
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

  return (
    <main className="mt-5">
      {isLoading ? (
        <div className="flex justify-center items-center">
          <Spinner />
        </div>
      ) : (
        <div className="card card-side bg-base-100 shadow-xl mt-5">
          <div className="overflow-x-auto">
            <table className="table table-zebra w-full">
              {/* head */}
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Title ID</th>
                  <th>Draw Number</th>
                  <th>Random Value</th>
                  <th>Selected ContractID</th>
                  <th>Winner Address</th>
                </tr>
              </thead>
              <tbody>
                {titles.map((event, index) => (
                  // row for each event
                  <tr key={index}>
                    <td>{event._date}</td>
                    <th>{event._idTitle}</th>
                    <td>{event._drawNumber}</td>
                    <td>{event._randomValue}</td>
                    <td>{event._selectedContractId}</td>
                    <td>{event._winner}</td>
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

export default WinnerSelected;
