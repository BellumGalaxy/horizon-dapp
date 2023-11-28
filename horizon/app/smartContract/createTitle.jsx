import React, { useState } from "react";
import { useContract, useContractWrite } from "@thirdweb-dev/react";

export default function CreateT() {
  const { contract } = useContract(
    "0xA40248f23B9a587F90827746E79AF361aDFb3844"
  );
  const { mutateAsync: createTitle, isLoading } = useContractWrite(
    contract,
    "createTitle"
  );

  // Estados para armazenar os valores dos inputs
  const [opening, setOpening] = useState("");
  const [closing, setClosing] = useState("");
  const [participants, setParticipants] = useState("");
  const [value, setValue] = useState("");

  const call = async () => {
    try {
      const data = await createTitle({
        args: [opening, closing, parseInt(participants), parseFloat(value)],
      });
      console.info("contract call success", data);
    } catch (err) {
      console.error("contract call failure", err);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex items-center mb-4">
        <span className="text-sm text-gray-600 w-48">
          Data/hora de abertura
        </span>
        <input
          type="datetime-local"
          placeholder="Opening"
          value={opening}
          onChange={(e) => setOpening(e.target.value)}
          className="mr-2 p-2 border border-gray-300 rounded"
        />
      </div>

      <div className="flex items-center mb-4">
        <span className="text-sm text-gray-600 w-48">
          Data/hora de fechamento
        </span>
        <input
          type="datetime-local"
          placeholder="Closing"
          value={closing}
          onChange={(e) => setClosing(e.target.value)}
          className="mr-2 p-2 border border-gray-300 rounded"
        />
      </div>

      <div className="flex items-center mb-4">
        <span className="text-sm text-gray-600 w-48">
          Número de participantes
        </span>
        <input
          type="number"
          placeholder="Participants"
          value={participants}
          onChange={(e) => setParticipants(e.target.value)}
          className="mr-2 p-2 border border-gray-300 rounded"
        />
      </div>

      <div className="flex items-center mb-4">
        <span className="text-sm text-gray-600 w-48">Valor do título</span>
        <input
          type="number"
          placeholder="Value"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="mr-2 p-2 border border-gray-300 rounded"
        />
      </div>

      <button
        onClick={call}
        disabled={isLoading}
        className="px-4 py-2 bg-accent text-white rounded hover:bg-blue-700 disabled:bg-gray-300"
      >
        Create Title
      </button>
    </div>
  );
}
