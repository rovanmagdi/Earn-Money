import Image from "next/image";
import React from "react";

const HowItWork = () => {
  return (
    <section className="mt-[100px] py-16 bg-[#f5fcf7ff]">
      <div className="flex flex-col justify-center items-center pt-5 gap-3">
        <p className="text-green-500 font-bold ">lorem ipsum</p>
        <h1 className="font-bold text-[45px]">How It Works</h1>
        <p>lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsum</p>
      </div>
      <div className="flex items-center justify-center gap-5 pb-5">
        <div>
          <Image
            src="assets/img/Business Plan-pana 1.svg"
            height={320}
            width={320}
            alt="logo-half"
          />
          <p className="text-green-500  text-center font-bold mt-5">
            Advertisers
          </p>
        </div>
        <Image
          src="assets/img/click.svg"
          height={100}
          width={100}
          alt="logo-half"
        />
        <div>
          <img src="assets/img/Static website-pana 1.svg" />
          <p className="text-green-500 mt-5 text-center font-bold">
            Earn Money
          </p>
        </div>
        <Image
          src="assets/img/price.svg"
          height={100}
          width={100}
          alt="logo-half"
        />
        <div>
          <Image
            src="assets/img/E-Wallet-pana 1.svg"
            height={250}
            width={250}
            alt="logo-half"
          />
          <p className="text-green-500  text-center font-bold">Users</p>
        </div>
      </div>
    </section>
  );
};

export default HowItWork;
