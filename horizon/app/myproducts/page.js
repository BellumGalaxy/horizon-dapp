"use client";
import MyTitles from "../smartContract/titleOwners";


const MyProducts = () => {
 const clientConnected = "0x5FA769922a6428758fb44453815e2c436c57C3c7";
  return (
    <div>
      <h1 className="text-7xl">My Products</h1>
      <MyTitles ownerAddress={clientConnected} />
    </div>
  );
};
export default MyProducts;