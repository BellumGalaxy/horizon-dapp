"use client";
import { useRouter } from "next/navigation";
import Carousel from "./Carousel";
import FeesModal from "./FeesModal";
import WithdrawConditionsModal from "./WithdrawConditionsModal";
import Link from "next/link";

const TitleDetails = ({ params }) => {
  const product = useRouter();

  console.log(params._titleId);

  return (
    <main>
      <Carousel />
      <div className="mt-5">
        <h3 className="font-bold text-lg">About the Title</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. A corrupti
          itaque, aspernatur ipsam temporibus autem, doloremque odio aperiam
          quia dicta non laboriosam odit eaque consectetur ex animi sed eveniet
          vero?
        </p>
      </div>
      <div>
        <h3 className="font-bold text-lg mt-5">Schedule Infos</h3>
        {/* Abertura e Fechamento das Vendas */}
        <ul className="mt-3">
          <li>Selling Opening:</li>
          <li>Selling Close:</li>
        </ul>
        {/*Primeiro pagamento e informações a respeito de parcelas */}
        <ul className="mt-3">
          <li>Date of next draw:</li>
          <li>Date of next installment:</li>
        </ul>
        {/* Valor Total do Título */}
        {/* Número de Parcelas */}
        {/* Valor Mensal  */}
        <h3 className="font-bold text-lg mt-5">Value Info</h3>
        <ul className="mt-3">
          <li>Title Value:</li>
          <li>Total installments:</li>
          <li>Installment Value:</li>
        </ul>
        {/* Condições de Saque  */}
        <h3 className="font-bold text-lg mt-5">Withdraw Conditions</h3>
        <p className="mb-3">
          At the time of purchase, a very important decision needs to be made
          and this decision will influence the amount paid monthly. You need to
          inform whether you intend to allocate a guarantee and withdraw after
          the draw, whether you will be drawn in the first half of the draw
          period or whether you can wait for longer periods.
        </p>
        <h2 className="font-bold text-md my-3">What does that mean?</h2>

        <WithdrawConditionsModal />

        {/* Taxas  */}
        <h3 className="font-bold text-lg mt-5">Fees</h3>
        <p className="mb-3">
          As mentioned previously, the withdrawal condition will influence the
          amounts paid monthly.
        </p>
        <p className="mb-3">
          So let's go in and answer all your questions so you can make the best
          decision according to your financial condition and personal goals.
        </p>
        <FeesModal />
        {/* Alocação de Garantias  */}
        <h3 className="font-bold text-lg mt-5">Warranty Allocation</h3>
        <p className="mb-3">
          Allocation of Collateral is currently limited to two types, being Real
          World Assets (RWA) and Securities.
        </p>
        <p className="mb-3">
          For allocation to occur, each type must meet some basic parameters.
          See below.
        </p>
        <h2 className="font-bold text-md my-3">Titles</h2>
        <p className="mb-3">
          1 - For a Security to be allocated as collateral, both securities must
          belong to the same wallet address. In other words, the Title drawn and
          the Title that will be used as collateral must have the same owner.
        </p>
        <p className="mb-3">
          2 - The Security that will be used as Collateral must be fully paid
          or, the amount paid to date must be twice as high as the outstanding
          amount on the drawn Security.
        </p>
        <h2 className="font-bold text-md my-3">Real Word Assets</h2>
        <p className="mb-3">
          1 - For an Asset to be allocated as collateral, the owner of the
          Security must be the same as the Asset. It will not be possible to add
          an asset that does not belong to the same wallet address as the
          Security.
        </p>
        <p className="mb-3">
          2 - The Asset that will be used as Collateral may contain pending
          regulatory or financial issues and the total value of the Asset must
          be five times greater than the outstanding value in the Security.
        </p>
        {/* Taxas de inadimplencia  */}
        <h3 className="font-bold text-lg mt-5">Interest Rates</h3>
        <p className="mb-3">
          Interest rates are only applicable on titles that are in arrears and
          are divided into Base Rate and Daily Rate.
        </p>
        <p className="mb-3">
          It is important to mention that a Title that is overdue will not
          participate in the monthly draws.
        </p>
        <ul className="mt-3">
          <li>Base Rate: 10% </li>
          <li>Daily Rate: 3%</li>
        </ul>
        <h2 className="font-bold text-md my-3">
          How are interest rates calculated?
        </h2>
        <ul>
          <li> First day: 10% </li>
          <li> Second day: 6% </li>
          <li> Subsequent days: 3% </li>
        </ul>
        <p className="mb-3">
          The application is simple interest. That is, assuming that the monthly
          payment is $100 and the delay is 3 days.
        </p>
        <ul>
          <li> Total interest = 10% + 6% +3% </li>
          <li> Installment Value = 100 + 19%. </li>
          <li> Amount to be paid = $119 </li>
        </ul>
        {/* Cancelamentos  */}
        <h3 className="font-bold text-lg mt-5">Cancellations</h3>
        <p className="mb-3">
          Cancellation is an extreme measure, but necessary for the smooth
          running of the protocol and maintaining respect for other
          participants.
        </p>
        <p className="mb-3">
          A cancellation will occur if the Bond has two consecutive payments in
          arrears.
        </p>
        <p className="mb-3">
          If the Title is cancelled, the amount paid to date will be absorbed by
          the protocol as a fine.
        </p>
        <p className="mb-3">
          In cases where a guarantee had been allocated, the guarantee will be
          sold to cover the costs arising from the delay.
        </p>
      </div>
      <button className="btn btn-block btn-accent text-base-100 text-lg mt-5">
        <Link href={`/allproducts/${params.id}/checkout/`}>
          I agree with the information and want to buy!
        </Link>
      </button>
    </main>
  );
};
export default TitleDetails;