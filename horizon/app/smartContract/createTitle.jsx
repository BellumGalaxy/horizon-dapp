import React, { useState } from "react";
import { Web3Button } from "@thirdweb-dev/react";
import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import Horizon_ABI from "../contracts_abi/Horizon.json";

const { _format, contractName, sourceName, abi } = Horizon_ABI;
const sdk = new ThirdwebSDK("mumbai", {
  clientId: "b8488d3a4e9b62b0dd71dd98ac7c2993",
  secretKey: "",
});
const contractAddress = "0x57F4E779e346C285b2b4B6A342F01c471dcf224d";
const contract = sdk.getContractFromAbi(contractAddress, abi);

export default function CreateT() {
  const [opening, setOpening] = useState("");
  const [closing, setClosing] = useState("");
  const [participants, setParticipants] = useState("");
  const [value, setValue] = useState("");

  const convertToTimestamp = (dateString) => {
    return Math.floor(new Date(dateString).getTime() / 1000);
  };
  
  const openingTimestamp = convertToTimestamp(opening);
  const closingTimestamp = convertToTimestamp(closing);
  const participant = parseInt(participants);
  const val = parseInt(value);


  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex items-center mb-4">
        <span className="text-sm text-gray-600 w-48">Opening Time</span>
        <input
          type="datetime-local"
          placeholder="Opening"
          value={opening}
          onChange={(e) => setOpening(e.target.value)}
          className="mr-2 p-2 border border-gray-300 rounded w-8/12"
        />
      </div>

      <div className="flex items-center mb-4">
        <span className="text-sm text-gray-600 w-48">Closing Time</span>
        <input
          type="datetime-local"
          placeholder="Closing"
          value={closing}
          onChange={(e) => setClosing(e.target.value)}
          className="mr-2 p-2 border border-gray-300 rounded w-8/12"
        />
      </div>

      <div className="flex items-center mb-4">
        <span className="text-sm text-gray-600 w-48">Participants Number</span>
        <input
          type="number"
          placeholder="Participants"
          value={participants}
          onChange={(e) => setParticipants(e.target.value)}
          className="mr-2 p-2 border border-gray-300 rounded w-8/12"
        />
      </div>

      <div className="flex items-center mb-4">
        <span className="text-sm text-gray-600 w-48">Total Value</span>
        <input
          type="number"
          placeholder="Value"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="mr-2 p-2 border border-gray-300 rounded w-8/12"
        />
      </div>

      <Web3Button
        contractAddress={contractAddress}
        action={() => sdk.mutateAsync({ args: [openingTimestamp,
        closingTimestamp,
        participant,
        val] })}
      >
        Create Title
      </Web3Button>
    </div>
  );
}
