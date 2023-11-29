"use client";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import MyCollapse from "../components/Collapse";
import {
  CreateT,
  AddFujiReceiver,
  AddPolyReceiver,
  CallVRF,
  SelectWinner,
  UpdateTitle,
  WinnerW,
  AddAdmin,
} from "../smartContract";

const Administration = () => {
  return (
    <div className="space-y-3">
      <MyCollapse title="Create a New Title">
        <ThirdwebProvider activeChain="mumbai">
          <CreateT />
        </ThirdwebProvider>
      </MyCollapse>
      <MyCollapse title="Call Chainlink VRF">
        <ThirdwebProvider activeChain="mumbai">
          <CallVRF />
        </ThirdwebProvider>
      </MyCollapse>
      <MyCollapse title="Select Winner">
        <ThirdwebProvider activeChain="mumbai">
          <SelectWinner />
        </ThirdwebProvider>
      </MyCollapse>
      <MyCollapse title="Update Titles">
        <ThirdwebProvider activeChain="mumbai">
          <UpdateTitle />
        </ThirdwebProvider>
      </MyCollapse>
      <MyCollapse title="Pay Winner">
        <ThirdwebProvider activeChain="mumbai">
          <WinnerW />
        </ThirdwebProvider>
      </MyCollapse>
      <MyCollapse title="Fuji Network Receiver">
        <ThirdwebProvider activeChain="mumbai">
          <AddFujiReceiver />
        </ThirdwebProvider>
      </MyCollapse>
      <MyCollapse title="Poly Network Receiver">
        <ThirdwebProvider activeChain="mumbai">
          <AddPolyReceiver />
        </ThirdwebProvider>
      </MyCollapse>
      <MyCollapse title="Add Admin">
        <ThirdwebProvider activeChain="mumbai">
          <AddAdmin />
        </ThirdwebProvider>
      </MyCollapse>
    </div>
  );
};
export default Administration;
