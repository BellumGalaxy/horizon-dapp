"use client";
import React, { useState, useEffect } from "react";
import {
  useContract,
  useContractEvents,
  useAddress,
} from "@thirdweb-dev/react";
import Horizon_ABI from "../contracts_abi/Horizon.json";
import Spinner from "../components/Spinner";
import Link from "next/link";

const titlesAndImages = [
  { title: "Family Plans", imagePath: "/myTitles/ativo1.jpg" },
  { title: "Business", imagePath: "/myTitles/ativo2.jpg" },
  { title: "Travel", imagePath: "/myTitles/ativo3.jpg" },
  { title: "Healthcare", imagePath: "/myTitles/ativo4.jpg" },
];

const contractAddress = "0x8fEB780f9152303a53F4687D0da2d89743F30E15";

export default function TitleOwners() {
  const { _format, contractName, sourceName, abi } = Horizon_ABI;
  const address = useAddress();
  const { contract } = useContract(contractAddress, abi);
  const { topics, data: events } = useContractEvents(contract, "NewTitleSold");
  const [titles, setTitles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    if (events && events.length > 0) {
      const filteredEvents = events.filter(
        (event) => event.data?._owner?.toLowerCase() === address?.toLowerCase()
      );
      const formattedEvents = filteredEvents.map((event) => {
        const eventData = event.data;
        return {
          _titleId: eventData?._titleId?.toString() ?? "N/A",
          _contractId: eventData?._contractId?.toString() ?? "N/A",
          _owner: eventData?._owner?.toString() ?? "N/A",
        };
      });
      setTitles(formattedEvents);
    } else {
      setTitles([]);
    }
    setIsLoading(false);
  }, [events, address]);

  return (
    <main className="mt-5">
      {isLoading ? (
        <div className="flex justify-center items-center">
          <span className="visually-hidden">
            <Spinner />
          </span>
        </div>
      ) : (
        titles.map((event, index) => {
          const { title, imagePath } =
            titlesAndImages[index % titlesAndImages.length];

          return (
            <div
              key={index}
              className="card card-side bg-base-100 shadow-xl mt-5"
            >
              <figure className="justify-items-start lg:max-h-96 lg:max-w-96">
                <img src={imagePath} alt={`Title ${event._titleId}`} />
              </figure>
              <div className="card-body place-content-center">
                <div className="">
                  <h2 className="card-title justify-center">{title}</h2>
                  <div className="overflow-x-auto">
                    <table className="table">
                      <tbody>
                        {/* row 1 */}
                        <tr>
                          <th>Title Id:</th>
                          <td>{event._titleId}</td>
                        </tr>
                        {/* row 2 */}
                        <tr>
                          <th>Contract Id:</th>
                          <td>{event._contractId}</td>
                        </tr>
                        {/* row 3 */}
                        <tr>
                          <th>Owner:</th>
                          <td>{event._owner}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="card-actions mt-5 place-content-center">
                  <Link
                    href={`/myproducts/${event._titleId}/${event._contractId}/${index}`}
                  >
                    <button className="btn btn-wide capitalize btn-accent text-base-100 font-bold">
                      Investment Management
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          );
        })
      )}
    </main>
  );
}

// <div className="overflow-x-auto">
//                   <table className="table">
//                     <tbody>
//                       {/* row 1 */}
//                       <tr>
//                         <th>Title Id:</th>
//                         <td>{event._titleId}</td>
//                       </tr>
//                       {/* row 2 */}
//                       <tr>
//                         <th>Contract Id:</th>
//                         <td>{event._contractId}</td>
//                       </tr>
//                       {/* row 3 */}
//                       <tr>
//                         <th>Owner:</th>
//                         <td>{event._owner}</td>
//                       </tr>
//                     </tbody>
//                   </table>
//                 </div>
//               </div>
//               <div className="card-actions mt-5 place-content-center">
//                 <Link
//                   href={`/myproducts/${event._titleId}/${event._contractId}/${index}`}
//                 >
//                   <button className="btn btn-wide capitalize btn-accent text-base-100 font-bold">
//                     Investment Management
//                   </button>
//                 </Link>
//               </div>
//             </div>
//           </div>
//         ))
//       )}
//     </main>
//   );
