"use client";
import MyCollapse from "@/app/components/Collapse";
import { AllTitles, CallVRF, DrawDate, PaymentDeadline, SelectWinner, UpdateTitle, VerifyLatePayment } from "@/app/smartContract";
import TitleAmercement from "@/app/smartContract/TitleAmercement";

const ManageTitles = ({ params }) => {
  const titleId = params.id[0];

  return (
    <div className="space-y-3">
      <MyCollapse title="More info about Title">
        <AllTitles titleId={titleId} />

        <DrawDate />

        <PaymentDeadline />
      </MyCollapse>
      <MyCollapse title="Call Chainlink VRF">
        <CallVRF titleId={titleId} />
      </MyCollapse>
      <MyCollapse title="Select Winner">
        <SelectWinner titleId={titleId} />
      </MyCollapse>
      <MyCollapse title="Update Titles">
        <UpdateTitle titleId={titleId} />
      </MyCollapse>
      <MyCollapse title="Verify Late Payments">
        <VerifyLatePayment titleId={titleId} />
      </MyCollapse>
      <MyCollapse title="Withdraw Amercement">
        <TitleAmercement titleId={titleId} />
      </MyCollapse>
    </div>
  );
};
export default ManageTitles;
