"use client";
import { ThirdwebProvider, useContract } from "@thirdweb-dev/react";
import CreateT from "../smartContract/createTitle";
import MyCollapse from "../components/Collapse";
import AddFujiReceiver from "../smartContract/addReceiver";
import AddPolyReceiver from "../smartContract/addReceiverF";
import CallVRF from "../smartContract/monthlyVRF";
import SelectWinner from "../smartContract/receiveVRF";
import UpdateTitle from "../smartContract/updateTitle";
import WinnerW from "../smartContract/winnerWithdraw";

const Administration = () => {
  return (
    <div className="space-y-3">
      <MyCollapse title="Create a New Title">
        <ThirdwebProvider>
          <CreateT />
        </ThirdwebProvider>
      </MyCollapse>
      <MyCollapse title="Fuji Network Receiver">
        <ThirdwebProvider>
          <AddFujiReceiver />
        </ThirdwebProvider>
      </MyCollapse>
      <MyCollapse title="Poly Network Receiver">
        <ThirdwebProvider>
          <AddPolyReceiver />
        </ThirdwebProvider>
      </MyCollapse>
      <MyCollapse title="Call Chainlink VRF">
        <ThirdwebProvider>
          <CallVRF />
        </ThirdwebProvider>
      </MyCollapse>
      <MyCollapse title="Select Winner">
        <ThirdwebProvider>
          <SelectWinner />
        </ThirdwebProvider>
      </MyCollapse>
      <MyCollapse title="Update Titles">
        <ThirdwebProvider>
          <UpdateTitle />
        </ThirdwebProvider>
      </MyCollapse>
      <MyCollapse title="Pay Winner">
        <ThirdwebProvider>
          <WinnerW/>
        </ThirdwebProvider>
      </MyCollapse>
    </div>
  );
};
export default Administration;
