"use client";
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
