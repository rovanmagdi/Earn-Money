import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav>
      <div className="flex justify-between fixed px-10  py-3 z-50 w-full bg-white">
        <Link href="/" className="col-9">
          <Image
            src="/assets/img/logo.svg"
            height={50}
            width={50}
            alt="logo"
          />
        </Link>
        <div >
          <ul className="flex justify-content-end">
            <li className="s bg-green-500 p-2 rounded text-white mx-3 h-[40px]">
              <Link href="https://earnmon.com/login" target="_blank">
                Sign Up
              </Link>
            </li>
            <li className="s text text-green-500 pt-2 bg-white px-3 rounded">
              <Link href="/login">Login</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
