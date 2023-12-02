"use client";
import React, { useState } from "react";
import AdministrationPoly from "./AdministrationPoly";
import AdministrationAvax from "./AdministrationAvax";

const Administration = () => {
  const [isMumbai, setIsMumbai] = useState(true);

  const toggleNetwork = () => {
    setIsMumbai(!isMumbai);
  };

  return (
    <main>
      {isMumbai ? <AdministrationPoly /> : <AdministrationAvax />}
      <div>
        <label className="swap">
          <input type="checkbox" onChange={toggleNetwork} checked={isMumbai} />
          <div className="swap-on">Mumbai</div>
          <div className="swap-off">Fuji</div>
        </label>
      </div>
    </main>
  );
};
export default Administration;
