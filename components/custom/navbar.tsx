import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <nav>
      <div className="flex justify-between fixed w-[90%] mx-[80px] mt-3 z-50 ">
        <div className="col-9">
          <Image
            src="/assets/img/logo.svg"
            height={40}
            width={130}
            alt="logo"
          />
        </div>
        <div className=" px-4">
          <ul className="flex justify-content-end">
            <li className="s bg-green-500 p-2 rounded text-white mx-3 h-[40px]">
              <a>Sign Up</a>
            </li>
            <li className="s text text-green-500 pt-2 bg-white px-3 rounded">
              <a>Login</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
