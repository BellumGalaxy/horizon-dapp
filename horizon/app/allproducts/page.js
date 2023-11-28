"use client";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import Titles from "../components/Titles";

const AllProducts = () => {
  return (
    <div>
      <h1 className="text-5xl">Available Investments</h1>
      <ThirdwebProvider>
        <Titles />
      </ThirdwebProvider>
    </div>
  );
};
export default AllProducts;
