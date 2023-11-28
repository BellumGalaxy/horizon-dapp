"use client";
import { useContract } from "@thirdweb-dev/react";
import { HORIZON_ADDRESS } from "@/addresses/address";

const Titles = () => {
  const { contract } = useContract({ HORIZON_ADDRESS });

  return <div>Titles</div>;
};
export default Titles;
