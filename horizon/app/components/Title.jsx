"use client";
import React, { useState } from "react";
import { AllTitles, BuyTitle } from "../smartContract";

const Title = ({ titleId }) => {
  const [withdrawType, setWithdrawType] = useState("none");

  return (
    <div className="card lg:card-side bg-base-100 shadow-xl">
      <figure>
        <img src="/tokens/token1.jpg" alt="Title" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Confirm the Title information below</h2>
        <AllTitles />
        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text">Open Withdraw</span>
            <input
              type="radio"
              name="withdrawType"
              value="open"
              checked={withdrawType === "open"}
              onChange={() => setWithdrawType("open")}
              className="radio checked:bg-black"
            />
          </label>
        </div>
        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text">Conditional Withdraw</span>
            <input
              type="radio"
              name="withdrawType"
              value="conditional"
              checked={withdrawType === "conditional"}
              onChange={() => setWithdrawType("conditional")}
              className="radio checked:bg-black"
            />
          </label>
        </div>
      </div>
      <BuyTitle titleId={titleId} withdrawPeriod={withdrawType} />
    </div>
  );
};
export default Title;
