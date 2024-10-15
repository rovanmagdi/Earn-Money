import React from "react";

const ManyWays = () => {
  return (
    <section className="bg-[#f5fcf7ff] py-16">
      <div className="flex flex-col justify-center items-center pt-5 gap-3">
        <p className="text-green-500 font-bold ">How it works</p>
        <h1 className="font-bold text-[40px]">
          Many Ways To <span className="text-green-500">Eran</span>
        </h1>
        <p>3 Steps to Get Money Easily</p>
      </div>
      <div className="flex justify-center pb-5 mt-5 gap-[100px]">
        <div className="flex flex-col  justify-center items-center w-[300px]">
          <img src="assets/img/login.svg" />
          <p className=" mt-2 font-bold">Login</p>
          <p className="text-center text-[#8C8C8A] w-[250px]">
            Sign up a free account and login.
          </p>
        </div>
        <div className="flex flex-col  justify-center items-center">
          <img src="assets/img/coins.svg" />
          <p className=" mt-2 font-bold">Earn</p>
          <p className="text-center text-[#8C8C8A] w-[250px]">
            Earn coins by browsing, gaming, trying out and sharing options.
          </p>
        </div>
        <div className="flex flex-col  justify-center items-center w-[250px]">
          <img src="assets/img/dollar.svg" />
          <p className=" mt-2 font-bold">Cashout</p>
          <p className="text-center text-[#8C8C8A] w-[300px]">
            Exchange collected coins for cash or a variety of gift cards.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ManyWays;
