"use client";
const WithdrawConditionsModal = () => {
  return (
    <div class="flex justify-center items-center">
      <button
        className="btn btn-info text-base-100 text-lg mx-5"
        onClick={() => document.getElementById("my_modal_1").showModal()}
      >
        Open Withdraw
      </button>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Open Withdraw</h3>
          <p className="py-1">
            You choose to allocate a guarantee and withdraw immediately after
            being drawn. Regardless of the draw number.
          </p>
          <p className="py-1">
            In this case, a 10% administration fee will be added to the amount
            at the time of payment.
          </p>
          <p className="py-1">
            More information about fees is available below.
          </p>
          <h3 className="font-bold text-lg py-3">Example</h3>
          <p className="py-1">
            The Title has 10 installments. You are selected in the first draw.
          </p>
          <p className="py-1">
            Immediately after the draw, you will be able to access your title
            and request the guarantee allocation.
          </p>
          <p className="py-1">
            The amount will be released immediately for withdrawal.
          </p>
          <h3 className="font-bold text-lg py-3">Who will benefit more?</h3>
          <p className="py-1">
            This modality is recommended for people who have guarantees for
            allocation and intend to use the amount immediately.
          </p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-neutral text-base-100">Close</button>
            </form>
          </div>
        </div>
      </dialog>
      <button
        className="btn btn-info text-base-100 text-lg mx-5"
        onClick={() => document.getElementById("my_modal_2").showModal()}
      >
        Conditional Withdraw
      </button>
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Conditional Withdraw</h3>
          <p className="py-3">
            You choose not to withdraw during the first half of the draw period.
          </p>
          <p className="py-1">
            In this case, a 2% administration fee will be added to the amount at
            the time of payment.
          </p>
          <h3 className="font-bold text-lg py-3">Example</h3>
          <p className="py-1">
            The Title has 10 installments. You are eligible after paying the
            second installment. That is, in the second draw.
          </p>
          <p className="py-1">
            Your money will be held until the sixth draw is made.
          </p>
          <p className="py-1">
            After that, you will be able to allocate a guarantee and make the
            withdrawal.
          </p>
          <h3 className="font-bold text-lg py-3">Who will benefit more?</h3>
          <p className="py-1">
            This option is ideal for individuals who view their investment as a
            long-term commitment, as well as for those who do not have a
            guarantee to allocate.
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
export default WithdrawConditionsModal;
