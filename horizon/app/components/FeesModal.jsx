"use client";
const FeesModal = () => {
  return (
    <div className="flex justify-center items-center">
      <button
        className="btn btn-info text-base-100 text-lg mx-5 "
        onClick={() => document.getElementById("my_modal_3").showModal()}
      >
        Open Withdraw
      </button>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg py-3">
            How much will I pay monthly?
          </h3>
          <p className="py-1">
            Let's use Title 1 as an example. Title 1 has a total value of $1000
            and this amount is divided into 10 equal installments of $100.
          </p>
          <p className="py-1">
            Therefore, to withdraw the value of your title, you need to pay $100
            monthly.
          </p>
          <p className="py-1">
            However, as the Open Withdrawal option was chosen, you have an
            additional administrative fee of 10% of the value of your Title.
          </p>
          <p className="py-1">
            In other words, opting for Open Withdrawal, you will pay $100 + 10%
            of this amount monthly. Totaling $110.00 monthly.
          </p>
          <h3 className="font-bold text-lg py-3">
            What are the advantages of this option?
          </h3>
          <p className="py-1">
            Once selected in the draw, regardless of the draw number, you can
            allocate a guarantee and then withdraw the full value of the title,
            which amounts to $1000.
          </p>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn btn-neutral text-base-100">Close</button>
            </form>
          </div>
        </div>
      </dialog>
      <button
        className="btn btn-info text-base-100 text-lg mx-5"
        onClick={() => document.getElementById("my_modal_4").showModal()}
      >
        Conditional Withdraw
      </button>
      <dialog id="my_modal_4" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg py-3">
            How much will I pay monthly?
          </h3>
          <p className="py-1">
            Let's use Title 1 as an example. Title 1 has a total value of $1000
            and this value is divided into 10 equal installments of $100.
          </p>
          <p className="py-1">
            Therefore, to withdraw the value of your title, you need to pay 10
            installments of $ 100. No additional amount.
          </p>
          <p className="py-1">
            However, as the Conditional Withdrawal option was chosen, you have
            an additional administrative fee of 2% of the value of your Title.
          </p>
          <p className="py-1">
            In other words, opting for Conditional Withdrawal, you will pay $100
            + 2% of this amount monthly. Totaling $102.00 monthly.
          </p>
          <p className="py-1">
            This modest administrative fee is essential to cover costs and
            enhance the protocol, providing you with a broader and better range
            of options.
          </p>
          <h3 className="font-bold text-lg py-3">
            What are the advantages of this option?
          </h3>
          <p className="py-1">
            This investment is both secure and transparent. Entails a minimal
            additional fee.
          </p>
          <p className="py-1">
            After the first half of the draw period, you will have the option to
            allocate a guarantee and withdraw the full amount of $1000.00.
          </p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-neutral text-base-100">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};
export default FeesModal;
