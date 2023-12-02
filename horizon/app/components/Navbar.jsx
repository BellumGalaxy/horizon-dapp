"use client";
import Link from "next/link";
import Connect from "./WalletConnect";
import { useAddress, useContract, useContractRead } from "@thirdweb-dev/react";
import HorizonStaff_ABI from "../contracts_abi/HorizonStaff.json";
import { BigNumber } from "ethers";

const contractAddress = "0x3547951AAA367094AFABcaE24f123473fF502bFa";

const links = [
  { href: "/allproducts", label: "Products" },
  { href: "/events", label: "News" },
  { href: "/about", label: "About" },
  { href: "/myproducts", label: "My Products" },
  { href: "/adm", label: "Administration" },
];

const Navbar = () => {
  const { _format, contractName, sourceName, abi } = HorizonStaff_ABI;
  const address = useAddress();
  const { contract } = useContract(contractAddress, abi);
  const { data } = useContractRead(contract, "staff", [address]);

  const convertBigNumbers = (bigNumbers) => {
    return bigNumbers.map((bigNumber) =>
      BigNumber.isBigNumber(bigNumber) ? bigNumber.toString() : bigNumber
    );
  };

  const readableData = data ? convertBigNumbers(Object.values(data)) : [];

  const isAdm = readableData[1];

  const userLinks = links.filter((link) => {
    if (link.href === "/myproducts") {
      return address;
    }
    if (link.href === "/adm") {
       return isAdm;
    }
    return true;
  });

  return (
    <nav className="bg-base-300 py-1">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {links.map((link) => {
                return (
                  <li key={link.href}>
                    <Link href={link.href} className="capitalize">
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <Link href="/" className="btn btn-ghost text-xl">
            Horizon
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {userLinks.map((link) => {
              return (
                <li key={link.href}>
                  <Link href={link.href} className="capitalize">
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="navbar-end">
          <Connect />
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
