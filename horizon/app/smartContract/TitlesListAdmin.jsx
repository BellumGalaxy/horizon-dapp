import { useContract, useContractEvents } from "@thirdweb-dev/react";
import { useState, useEffect } from "react";
import { ethers } from "ethers";
import Horizon_ABI from "../contracts_abi/Horizon";
import Spinner from "../components/Spinner";
import Link from "next/link";

const TitlesListAdmin = () => {
  const { _format, contractName, sourceName, abi } = Horizon_ABI;
  const { contract } = useContract(
    "0x8fEB780f9152303a53F4687D0da2d89743F30E15",
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
          _titleValue:
            convertWeiToDollar(eventData?._titleValue?.toString()) ?? "N/A",
          _installments: eventData?._installments?.toString() ?? "N/A",
          _monthlyValue:
            convertWeiToDollar(eventData?._monthlyValue?.toString()) ?? "N/A",
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
    <div>
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
                    <th>Schedule ID</th>
                    <th>Title Value</th>
                    <th>Installments</th>
                    <th>Monthly Value</th>
                    <th>Manage Title</th>
                  </tr>
                </thead>
                <tbody>
                  {titles.map((event, index) => (
                    <tr key={index}>
                      <th>{event._titleId}</th>
                      <td>{event._scheduleId}</td>
                      <td>{event._titleValue}</td>
                      <td>{event._installments}</td>
                      <td>{event._monthlyValue}</td>
                      <td>
                        <Link href={`/adm/${event._titleId}`}>
                          <button className="btn btn-wide btn-accent">
                            See Options
                          </button>
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};
export default TitlesListAdmin;
