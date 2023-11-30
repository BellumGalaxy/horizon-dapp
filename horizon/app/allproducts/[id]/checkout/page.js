"use client";
import BuyTitle from "../../../smartContract/buyTitle";
import DrawDate from "../../../smartContract/drawDate";
import PaymentDeadline from "../../../smartContract/paymentDeadline";

const CheckoutPage = ({ params }) => {

  //Fetch o scheduleId para passar pra função DrawDate;

  return (
    <div>
      <PaymentDeadline _scheduleId={1} _installmentNumber={2} />
      <DrawDate _scheduleId={1} _installmentNumber={1} />
      <BuyTitle titleId={params.id} />
    </div>
  );
};

export default CheckoutPage;
