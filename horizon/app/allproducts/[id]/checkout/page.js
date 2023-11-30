"use client";
import AllTitles from "../../../smartContract/allTitles";
import BuyTitle from "../../../smartContract/buyTitle";
import Title from "../../../components/Title";

const CheckoutPage = ({ params }) => {
  //Fetch o scheduleId para passar pra função DrawDate;

  return (
    <div>
      <Title titleId={params.id} />
    </div>
  );
};

export default CheckoutPage;
