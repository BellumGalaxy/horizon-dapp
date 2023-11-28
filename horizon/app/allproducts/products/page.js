"use client";
import Carousel from "@/app/components/Carousel";
import FeesModal from "@/app/components/FeesModal";
import WithdrawConditionsModal from "@/app/components/WithdrawConditionsModal";

const Products = () => {
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
          <li>Date of first Draw:</li>
          <li>Date of Second installment:</li>
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
        <ul className="mt-3">
          <li>Title Value:</li>
          <li>Total installments:</li>
          <li>Installment Value:</li>
        </ul>
        {/* Taxas de inadimplencia  */}
        <h3 className="font-bold text-lg mt-5">Interest Rates</h3>
        <ul className="mt-3">
          <li>Title Value:</li>
          <li>Total installments:</li>
          <li>Installment Value:</li>
        </ul>
        {/* Cancelamentos  */}
        <h3 className="font-bold text-lg mt-5">Cancellations and Fines</h3>
        <ul className="mt-3">
          <li>Title Value:</li>
          <li>Total installments:</li>
          <li>Installment Value:</li>
        </ul>
      </div>
    </main>
  );
};
export default Products;
