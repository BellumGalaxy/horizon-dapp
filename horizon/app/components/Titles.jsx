"use client";
import { useContract } from "@thirdweb-dev/react";
import { HORIZON_ADDRESS } from "@/addresses/address";
import Link from "next/link";

const Titles = () => {
  const { contract } = useContract({ HORIZON_ADDRESS });

  return (
    <main className="mt-5">
      <div className="card card-side bg-base-100 shadow-xl">
        <figure>
          <img src="/tokens/token1.jpg" alt="Title" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">New Title Available</h2>
          <p>
            Click on More Info below to find out about values, installment
            numbers and other conditions regarding this asset!
          </p>
          <div className="card-actions justify-end">
            <Link href="/allproducts/products">
              <button className="btn btn-accent text-base-100">
                More info
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="card card-side bg-base-100 shadow-xl mt-5">
        <figure>
          <img src="/tokens/token2.jpg" alt="Title" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">New Title Available</h2>
          <p>
            Click on More Info below to find out about values, installment
            numbers and other conditions regarding this asset!
          </p>
          <div className="card-actions justify-end">
            <Link href="/allproducts/products">
              <button className="btn btn-accent text-base-100">
                More info
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="card card-side bg-base-100 shadow-xl mt-5">
        <figure>
          <img src="/tokens/token3.jpg" alt="Title" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">New Title Available</h2>
          <p>
            Click on More Info below to find out about values, installment
            numbers and other conditions regarding this asset!
          </p>
          <div className="card-actions justify-end">
            <Link href="/allproducts/products">
              <button className="btn btn-accent text-base-100">
                More info
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="card card-side bg-base-100 shadow-xl mt-5">
        <figure>
          <img src="/tokens/token4.jpg" alt="Title" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">New Title Available</h2>
          <p>
            Click on More Info below to find out about values, installment
            numbers and other conditions regarding this asset!
          </p>
          <div className="card-actions justify-end">
            <Link href="/allproducts/products">
              <button className="btn btn-accent text-base-100">
                More info
              </button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};
export default Titles;
