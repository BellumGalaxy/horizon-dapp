"use client";
import React, { useState } from "react";
import { AddCollateralF, AddRWA } from "@/app/smartContract";

const CollateralRub = () => {
  const [isMumbai, setIsMumbai] = useState(true);

  const toggleNetwork = () => {
    setIsMumbai(!isMumbai);
  };

  return (
    <div>
      {isMumbai ? <AddRWA /> : <AddCollateralF />}
      <div>
        <label className="swap">
          <input type="checkbox" onChange={toggleNetwork} checked={isMumbai} />
          <div className="swap-on">Mumbai</div>
          <div className="swap-off">Fuji</div>
        </label>
      </div>

      
    </div>
  );
};
export default CollateralRub;
