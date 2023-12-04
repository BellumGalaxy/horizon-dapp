"use client";
import { useContract, useContractEvents } from "@thirdweb-dev/react";
import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import Horizon_ABI from "../contracts_abi/Horizon";

const contractAddress = "0x8fEB780f9152303a53F4687D0da2d89743F30E15";

const RWAStatus = () => {
  const { _format, contractName, sourceName, abi } = Horizon_ABI;
  const { contract } = useContract(contractAddress, abi);
  const { data: events } = useContractEvents(contract, "CreatingPermission");

  const [eventData, setEventData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    if (events && events.length > 0) {
      const formattedEvents = events.map((event) => {
        const eventData = event.data;
        return {
          _idTitle: eventData?._idTitle?.toString() ?? "N/A",
          _contractId: eventData?._contractId?.toString() ?? "N/A",
          _drawSelected: eventData?._drawSelected?.toString() ?? "N/A",
          _fujiReceiver: eventData?._fujiReceiver?.toString() ?? "N/A",
        };
      });
      setEventData(formattedEvents);
    } else {
      setEventData([]);
    }
    setIsLoading(false);
  }, [events]);

  if (isLoading || !eventData || eventData.length === 0) {
    return <Spinner />;
  }

  return (
    <div>
      <h1>Dados do Evento:</h1>
      <p>
        Your permission has been send. Wait for 30 minutes to verify your asset
        value
      </p>
      <div>Title ID: {eventData[0]._idTitle}</div>
      <div>Contract ID: {eventData[0]._contractId}</div>
      <div>Draw in which you were selected: {eventData[0]._drawSelected}</div>
      <div>Receiver Address: {eventData[0]._fujiReceiver}</div>
    </div>
  );
};

export default RWAStatus;
