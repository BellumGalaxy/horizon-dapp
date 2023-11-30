"use client";
import React, { useState } from "react";
import { AllTitles, BuyTitle } from "../smartContract";

const Title = ({ titleId }) => {
  const [withdrawType, setWithdrawType] = useState("true");

  return (
    <div className="card lg:card-side bg-base-100 shadow-xl">
      <figure className="container mx-auto ml-5 justify-items-center">
        <img src="/title.jpg" alt="Title" />
      </figure>
      <div className="card-body flex flex-col container mx-auto mt-3">
        <h2 className="card-title">Confirm the Title information</h2>
        <AllTitles titleId={titleId} />
        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text">Open Withdraw</span>
            <input
              type="radio"
              name="withdrawType"
              value="true"
              checked={withdrawType === "true"}
              onChange={() => setWithdrawType("true")}
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
              value="false"
              checked={withdrawType === "false"}
              onChange={() => setWithdrawType("false")}
              className="radio checked:bg-black"
            />
          </label>
        </div>
        <BuyTitle titleId={titleId} withdrawPeriod={withdrawType} />
      </div>
    </div>
  );
};
export default Title;
