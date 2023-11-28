const WithdrawConditionsModal = () => {
  return (
    <div className="">
      <button
        className="btn btn-accent text-base-100 text-lg mx-5"
        onClick={() => document.getElementById("my_modal_1").showModal()}
      >
        Open Withdraw
      </button>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Open Withdraw</h3>
          <p className="py-4">
            You choose to allocate a guarantee and withdraw immediately after
            being drawn. Regardless of the draw number.
          </p>
          <p className="py-4">
            In this case, an administration fee will be added to the amount at
            the time of payment. More information about fees is available below.
          </p>
          <h3 className="font-bold text-lg">Example</h3>
          <p className="py-4">
            The Title has 10 installments. You are included in the first draw.
            Immediately after the draw, you will be able to access your title
            and request the guarantee allocation and the amount will be released
            immediately for withdrawal.
          </p>
          <h3 className="font-bold text-lg">Who will benefit more?</h3>
          <p className="py-4">
            This modality is recommended for people who have guarantees for
            allocation and intend to use the amount immediately.
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
        onClick={() => document.getElementById("my_modal_2").showModal()}
      >
        Conditional Withdraw
      </button>
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Conditional Withdraw</h3>
          <p className="py-4">
            You choose not to withdraw during the first half of the draw period.
            You will only pay the monthly amount, with no additional fees.
          </p>
          <h3 className="font-bold text-lg">Example</h3>
          <p className="py-4">
            The Title has 10 installments. You are eligible after paying the
            second installment. That is, in the second draw. Your money will be
            held until the sixth draw is made. After that, you will be able to
            allocate a guarantee and make the withdrawal.
          </p>
          <h3 className="font-bold text-lg">Who will benefit more?</h3>
          <p className="py-4">
            This modality is recommended for people who think of their
            investment as a long-term product. Or for people who do not have a
            guarantee to allocate.
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
export default WithdrawConditionsModal;
