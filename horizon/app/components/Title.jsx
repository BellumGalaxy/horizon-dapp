"use client";
import React, { useState } from "react";
import {
  AllTitles,
  BuyTitle,
  DrawDate,
  PaymentDeadline,
} from "../smartContract";

const Title = ({
  titleId,
  scheduleId,
  installmentNumber,
  totalInstallments,
}) => {
  const [withdrawType, setWithdrawType] = useState("true");
  return (
    <div className="card bg-base-100 shadow-xl">
      <h2 className="title text-center font-bold text-3xl">
        Review Your Purchase Information
      </h2>
      <div className="flex grid-cols-2">
        <div className="justify-self-start w-2/3">
          <figure className="">
            <img src="/title.jpg" alt="Title" />
          </figure>
        </div>
        <div className="justify-self-end w-1/3 ml-5">
          <div className="space-y-5">
            <AllTitles titleId={titleId} />

            <DrawDate
              scheduleId={scheduleId}
              installmentNumber={installmentNumber}
              totalInstallments={totalInstallments}
            />

            <PaymentDeadline
              scheduleId={scheduleId}
              installmentNumber={installmentNumber}
              totalInstallments={totalInstallments}
            />
          </div>
          <div className="form-control mt-5 mr-5">
            <label className="label cursor-pointer">
              <span className="label-text font-bold">Open Withdraw</span>
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
          <div className="form-control mr-5">
            <label className="label cursor-pointer">
              <span className="label-text font-bold">Conditional Withdraw</span>
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
    </div>
  );
};
export default Title;
