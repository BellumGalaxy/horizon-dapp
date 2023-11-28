"use client";
import { ThirdwebProvider, useContract } from "@thirdweb-dev/react";
import MyCollapse from "../components/Collapse";
import {
  CreateT,
  AddFujiReceiver,
  AddPolyReceiver,
  CallVRF,
  SelectWinner,
  UpdateTitle,
  WinnerW,
} from "../smartContract";

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
          <WinnerW />
        </ThirdwebProvider>
      </MyCollapse>
    </div>
  );
};
export default Administration;
