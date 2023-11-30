"use client";
const FeesModal = () => {
  return (
    <div class="flex justify-center items-center">
      <button
        className="btn btn-accent text-base-100 text-lg mx-5 "
        onClick={() => document.getElementById("my_modal_3").showModal()}
      >
        Open Withdraw
      </button>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">How much will I pay monthly?</h3>
          <p className="py-4">
            Let's use Title 1 as an example. Title 1 has a total value of $1000
            and this amount is divided into 10 equal installments of $100.
            Therefore, to withdraw the value of your title, you need to pay $100
            monthly.
          </p>
          <p className="py-4">
            However, as the Open Withdrawal option was chosen, you have an
            additional administrative fee of 10% of the value of your Title.
          </p>
          <p className="py-4">
            In other words, opting for Open Withdrawal, you will pay $100 + 10%
            of this amount monthly. Totaling $110.00 monthly.
          </p>
          <h3 className="font-bold text-lg">
            What are the advantages of this option?
          </h3>
          <p className="py-4">
            Once drawn, regardless of the draw number, you will be able to
            allocate a guarantee and from there, you will receive a total value
            of $1000.
          </p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
      <button
        className="btn btn-accent text-base-100 text-lg mx-5"
        onClick={() => document.getElementById("my_modal_4").showModal()}
      >
        Conditional Withdraw
      </button>
      <dialog id="my_modal_4" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">How much will I pay monthly?</h3>
          <p className="py-4">
            Let's use Title 1 as an example. Title 1 has a total value of $1000
            and this value is divided into 10 equal installments of $100.
          </p>
          <p className="py-4">
            Therefore, to withdraw the value of your title, you need to pay 10
            installments of $ 100. No additional amount.
          </p>
          <p className="py-4">
            Unlike Open Withdrawal, this modality has no administrative fee.
          </p>
          <p className="py-4">
            In other words, by opting for Conditional Withdrawal, you will pay
            fixed installments of $100. Totaling $1000.00.
          </p>
          <h3 className="font-bold text-lg">
            What are the advantages of this option?
          </h3>
          <p className="py-4">
            This is a safe and transparent investment. You have no additional
            fees and after the first half of the draw period you will be able to
            place a guarantee and cash out the full $1000.00.
          </p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};
export default FeesModal;
