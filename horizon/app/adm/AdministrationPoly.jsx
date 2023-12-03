"use client";
import MyCollapse from "../components/Collapse";
import {
  CreateT,
  AddFujiReceiver,
} from "../smartContract";
import WithdrawFee from "../smartContract/WithdrawFee";

const AdministrationPoly = () => {
  return (
    <main>
      <div className="space-y-3">
        <MyCollapse title="Create a New Title">
          <CreateT />
        </MyCollapse>
        <MyCollapse title="Fuji Network Receiver">
          <AddFujiReceiver />
        </MyCollapse>
        <MyCollapse title="Withdraw Protocol Fee">
          <WithdrawFee />
        </MyCollapse>
      </div>
    </main>
  );
};
export default AdministrationPoly;
