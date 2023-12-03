"use client";
import React, { useState } from "react";
import {
  AddCollateralF,
  AddRWA,
  VerifyCollateralValue,
} from "@/app/smartContract";
import RWAStatus from "./RWAStatus";

const CollateralHub = ({ titleId, contractId, titleData }) => {
  const [isMumbai, setIsMumbai] = useState(true);
  const [activeStage, setActiveStage] = useState("createPermission");

  const toggleNetwork = () => {
    setIsMumbai(!isMumbai);
  };

  const handleStageChange = (stage) => {
    setActiveStage(stage);
  };

  const renderModalContent = () => {
    switch (activeStage) {
      case "createPermission":
        return (
          <div>
            <AddRWA titleId={titleId} contractId={contractId} />
          </div>
        );
      case "waitConfirmation":
        return (
          <div>
            <RWAStatus titleId={titleId} contractId={contractId} />
          </div>
        );
      case "verifyValue":
        return (
          <div>
            <VerifyCollateralValue
              titleId={titleId}
              contractId={contractId}
              titleData={titleData}
            />
          </div>
        );
      case "allocateCollateral":
        return (
          <div>
            <AddCollateralF
              titleId={titleId}
              contractId={contractId}
              titleData={titleData}
            />
          </div>
        );
      default:
        return <div>Default Content</div>;
    }
  };

  return (
    <div>
      <div className="modal-content">{renderModalContent()}</div>
      <div className="text-sm breadcrumbs">
        <ul>
          <li>
            <a onClick={() => handleStageChange("createPermission")}>
              Create Permission
            </a>
          </li>
          <li>
            <a onClick={() => handleStageChange("waitConfirmation")}>
              Wait Confirmation
            </a>
          </li>
          <li>
            <a onClick={() => handleStageChange("verifyValue")}>Verify Value</a>
          </li>
          <li>
            <a onClick={() => handleStageChange("allocateCollateral")}>
              Allocate Collateral
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default CollateralHub;