import Image from "next/image";
import React from "react";

const HowItWork = () => {
  return (
    <section className="mt-[100px] py-16 bg-[#f5fcf7ff]">
      <div className="flex flex-col justify-center items-center pt-5 gap-3 text-center">
        <p className="text-green-500 font-bold">lorem ipsum</p>
        <h1 className="font-bold text-[45px]">How It Works</h1>
        <p className="mx-5">lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-5 pb-5">
        <div className="flex flex-col items-center justify-center">
          <Image
            src="assets/img/Business Plan-pana 1.svg"
            height={320}
            width={320}
            alt="Illustration of Advertisers"
          />
          <p className="text-green-500 font-bold mt-5">Advertisers</p>
        </div>

        <Image
          src="assets/img/click.svg"
          height={100}
          width={100}
          alt="Click Icon"
          className="hidden md:block"
        />

        <div className="flex flex-col items-center">
          <Image
            src="assets/img/Static website-pana 1.svg"
            height={320}
            width={320}
            alt="Illustration of Earning Money"
          />
          <p className="text-green-500 font-bold mt-5">Earn Money</p>
        </div>

        <Image
          src="assets/img/price.svg"
          height={100}
          width={100}
          alt="Price Icon"
          className="hidden md:block"
        />

        <div className="flex flex-col items-center">
          <Image
            src="assets/img/E-Wallet-pana 1.svg"
            height={250}
            width={250}
            alt="Illustration of Users"
          />
          <p className="text-green-500 font-bold mt-5">Users</p>
        </div>
      </div>
    </section>
  );
};

export default HowItWork;
