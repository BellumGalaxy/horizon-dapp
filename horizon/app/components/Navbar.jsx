"use client";
import Link from "next/link";
import Connect from "./WalletConnect";

const links = [
  { href: "/allproducts", label: "Products" },
  { href: "/about", label: "About" },
  { href: "/myproducts", label: "My Products" },
  { href: "/adm", label: "Administration" },
  { href: "/events", label: "News" },
];

const Navbar = () => {
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
        <div className="navbar-end">
          <Connect />
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
