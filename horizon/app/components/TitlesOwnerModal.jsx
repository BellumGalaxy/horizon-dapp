"use client";
import TitlesSold from "../smartContract/titlesSold";
import PayInstallment from "../smartContract/payInstallment";
import AddRWA from "../smartContract/addRwaColateral";
import AddTitle from "../smartContract/addTitle";
import AddCollateralF from "../smartContract/addColateralF";
import { useState } from "react";
import Link from "next/link";

const TitlesOwnerModal = ({ titleId, contractId }) => {
  const [titleData, setTitleData] = useState(null);

  const handleTitleData = (data) => {
    setTitleData(data);
  };

  return (
    <div className="flex flex-wrap gap-2 justify-center lg:justify-start mt-4 absolute bottom-10 left-100">
      <button
        className="btn btn-accent text-base-100"
        onClick={() => document.getElementById("my_modal_1").showModal()}
      >
        Pay Installment
      </button>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <PayInstallment
            titleId={titleId}
            contractId={contractId}
            titleData={titleData}
          />
        </div>
        <form method="dialog" className="modal-backdrop">
          <button className="btn-accent text-base-100">close</button>
        </form>
      </dialog>
      <button
        className="btn btn-accent text-base-100"
        onClick={() => document.getElementById("my_modal_2").showModal()}
      >
        Colateral Title
      </button>
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box">
          <AddTitle titleId={titleId} contractId={contractId} />
        </div>
        <form method="dialog" className="modal-backdrop">
          <button className="btn-accent text-base-100">close</button>
        </form>
      </dialog>
      <Link href="/myproducts/addrwa">
        <button
          className="btn btn-accent text-base-100"
          onClick={() => document.getElementById("my_modal_3").showModal()}
        >
          Colateral RWA
        </button>
      </Link>
      <button
        className="btn btn-accent text-base-100"
        onClick={() => document.getElementById("my_modal_4").showModal()}
      >
        More Infos
      </button>
      <dialog id="my_modal_4" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Check your title infos</h3>

          <TitlesSold
            titleId={titleId}
            contractId={contractId}
            onReceiveData={handleTitleData}
          />
        </div>
        <form method="dialog" className="modal-backdrop">
          <button className="btn-accent text-base-100">close</button>
        </form>
      </dialog>
    </div>
  );
};
export default TitlesOwnerModal;
