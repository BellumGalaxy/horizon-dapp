"use client";
import MyCollapse from "../components/Collapse";
import {
  CreateT,
  AddFujiReceiver,
  CallVRF,
  SelectWinner,
  UpdateTitle,
  WinnerW,
} from "../smartContract";

const AdministrationPoly = () => {
  return (
    <main>
      <div className="space-y-3">
        <MyCollapse title="Create a New Title">
          <CreateT />
        </MyCollapse>
        <MyCollapse title="Call Chainlink VRF">
          <CallVRF />
        </MyCollapse>
        <MyCollapse title="Select Winner">
          <SelectWinner />
        </MyCollapse>
        <MyCollapse title="Update Titles">
          <UpdateTitle />
        </MyCollapse>
        <MyCollapse title="Pay Winner">
          <WinnerW />
        </MyCollapse>
        <MyCollapse title="Fuji Network Receiver">
          <AddFujiReceiver />
        </MyCollapse>
      </div>
    </main>
  );
};
export default AdministrationPoly;
