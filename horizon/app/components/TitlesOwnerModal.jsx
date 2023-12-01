import titlesSold from "../smartContract/titlesSold";
import PayInstallment from "../smartContract/payInstallment";
import AddRWA from "../smartContract/addRwaColateral";
import AddTitle from "../smartContract/addTitle";

const TitlesOwnerModal = ({ readableData }) => {
  return (
    <div className="space-x-6">
      <button
        className="btn btn-accent text-base-100"
        onClick={() => document.getElementById("my_modal_1").showModal()}
      >
        Pay Installment
      </button>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <PayInstallment />
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
          <h3 className="font-bold text-lg">Hello!</h3>
          <AddTitle />
        </div>
        <form method="dialog" className="modal-backdrop">
          <button className="btn-accent text-base-100">close</button>
        </form>
      </dialog>
      <button
        className="btn btn-accent text-base-100"
        onClick={() => document.getElementById("my_modal_3").showModal()}
      >
        Colateral RWA
      </button>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <AddRWA />
        </div>
        <form method="dialog" className="modal-backdrop">
          <button className="btn-accent text-base-100">close</button>
        </form>
      </dialog>
      <button
        className="btn btn-accent text-base-100"
        onClick={() => document.getElementById("my_modal_4").showModal()}
      >
        More Infos
      </button>
      <dialog id="my_modal_4" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Check your title infos</h3>

          <titlesSold />
        </div>
        <form method="dialog" className="modal-backdrop">
          <button className="btn-accent text-base-100">close</button>
        </form>
      </dialog>
    </div>
  );
};
export default TitlesOwnerModal;
