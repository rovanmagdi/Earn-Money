import React from "react";
import Image from "next/image"; // Importing Image for better optimization

const ManyWays = () => {
  return (
    <section className="bg-[#f5fcf7] py-16">
      <div className="flex flex-col justify-center items-center pt-5 gap-7 text-center">
        <p className="text-green-500 font-bold">How it works</p>
        <h1 className="font-bold text-4xl md:text-5xl">
          Many Ways To <span className="text-green-500">Earn</span>
        </h1>
        <p className="text-lg md:text-xl">3 Steps to Get Money Easily</p>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center pb-5 mt-5 gap-10 flex-wrap ">
        <div className="flex flex-col justify-center items-center w-[300px]">
          <Image
            src="/assets/img/login.svg"
            alt="Login"
            width={100}
            height={100}
            className="object-contain" // Use object-contain to maintain aspect ratio
          />
          <p className="mt-2 font-bold">Login</p>
          <p className="text-center text-[#8C8C8A] w-[250px]">
            Sign up for a free account and login.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center w-[300px]">
          <Image
            src="/assets/img/coins.svg"
            alt="Earn Coins"
            width={100}
            height={100}
            className="object-contain"
          />
          <p className="mt-2 font-bold">Earn</p>
          <p className="text-center text-[#8C8C8A] w-[250px]">
            Earn coins by browsing, gaming, trying out, and sharing options.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center w-[300px]">
          <Image
            src="/assets/img/dollar.svg"
            alt="Cashout"
            width={100}
            height={100}
            className="object-contain"
          />
          <p className="mt-2 font-bold">Cashout</p>
          <p className="text-center text-[#8C8C8A] w-[250px]">
            Exchange collected coins for cash or a variety of gift cards.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ManyWays;
