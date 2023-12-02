"use client";
import MyCollapse from "../components/Collapse";
import {
  AddPolyReceiver,
} from "../smartContract";

const Administration = () => {
  return (
    <>
      <div className="space-y-3">
        <MyCollapse title="Poly Network Receiver">
          <AddPolyReceiver />
        </MyCollapse>
      </div>
    </>
  );
};
export default Administration;
