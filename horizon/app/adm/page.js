"use client";
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
    <>
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
        <MyCollapse title="Poly Network Receiver">
          <AddPolyReceiver />
        </MyCollapse>
    </div>
    </>
  );
};
export default Administration;
