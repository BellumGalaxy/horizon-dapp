"use client";
import MyCollapse from "@/app/components/Collapse";
import CollateralHub from "@/app/components/CollateralHub";
import { AddTitle, PayInstallment } from "@/app/smartContract";
import TitlesSold from "@/app/smartContract/titlesSold";
import { useState } from "react";

const InvestmentsManagement = ({ params }) => {
  const titleId = params.id[0];
  const contractId = params.id[1];

  const [titleData, setTitleData] = useState(null);

  const handleTitleData = (data) => {
    setTitleData(data);
  };

  return (
    <main>
      <div className="space-y-3">
        <MyCollapse title="Pay Installment">
          <PayInstallment
            titleId={titleId}
            contractId={contractId}
            titleData={titleData}
          />
        </MyCollapse>
        <MyCollapse title="Add Title as Collateral">
          <AddTitle titleId={titleId} contractId={contractId} />
        </MyCollapse>
        <MyCollapse title="Add RWA as Collateral">
          <CollateralHub
            titleId={titleId}
            contractId={contractId}
            titleData={titleData}
          />
        </MyCollapse>
        <MyCollapse title="More Infos">
          <TitlesSold
            titleId={titleId}
            contractId={contractId}
            onReceiveData={handleTitleData}
          />
        </MyCollapse>
      </div>
    </main>
  );
};
export default InvestmentsManagement;
