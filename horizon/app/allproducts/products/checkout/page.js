"use client";
import Title from "@/app/components/Title";
import { BuyTitle } from "@/app/smartContract";
import { ThirdwebProvider } from "@thirdweb-dev/react";

const Cart = () => {
  const selectedTitleId = 1;
  const withdrawPeriod = true;

  return (
    <div>
      <ThirdwebProvider>
        <Title />
      </ThirdwebProvider>
    </div>
  );
};
export default Cart;
