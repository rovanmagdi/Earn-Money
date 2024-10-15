import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <section className="flex  justify-center items-center ">
      <Image
        src="/assets/img/header.svg"
        alt="landing"
        className="landing-page relative w-100 top-0 left-0 w-full h-full"
        height={"10"}
        width={"10"}
      />
      <div className="flex flex-col justify-center items-center gap-[32px] text-center absolute   top-[120px] ">
        <Image
          src="/assets/img/logo-half.svg"
          alt="logo-half"
          height={"10"}
          width={"10"}
          className="h-full w-40"
        />
        <p className="text-4xl font-bold">
          Earn Money Every time you go{" "}
          <span className="text-green-500">Online</span>
        </p>
        <div className="flex justify-center gap-3 items-center">
          <div className="flex gap-2 items-center">
            <Image
              src="/assets/img/amount.svg.svg"
              height={"20"}
              width={"20"}
              alt="amount"
            />
            <span className="fw-bold">150+</span>
            offers availabe in
          </div>
          <div className="flex gap-2 items-center ">
            <Image
              src="/assets/img/us.svg fill.svg"
              height={"20"}
              width={"20"}
              alt="amount"
            />
            Egypt
          </div>
          <div className="flex gap-2 items-center">
            <Image
              src="/assets/img/coin.svg fill.svg"
              height={"20"}
              width={"20"}
              alt="amount"
            />
            Earn up to <span className="fw-bold">150+</span> per offer
          </div>
        </div>
        <div className=" bg-green-500 px-5 py-3 rounded text-white flex justify-center m-auto">
          Start Earning Now
        </div>
        <div className="flex items justify-center gap-[40px]">
          <div className=" border-2 rounded-[15px] rounde-5 fw-bold p-3 w-[130px] flex flex-col justify-center items-center">
            <Image
              src="/assets/img/tiktok.svg"
              alt="logo-half"
              height={"60"}
              width={"60"}
            />
            <div className="mt-3 text-[12px]">
              Tiktok install
              <p>$2</p>
            </div>
          </div>
          <div className="border-2 rounded-[15px] fw-bold  p-3 w-[130px]  flex flex-col justify-center items-center">
            <img
              src="/assets/img/man (2).svg"
              alt="logo-half"
              height={"60"}
              width={"60"}
            />
            <p className="mt-3 text-[12px]">Warpath:Ace…</p>
            <p>$2</p>
          </div>
          <div className="border-2 rounded-[15px] fw-bold  p-3 w-[130px]  flex flex-col justify-center items-center">
            <img
              src="/assets/img/game.svg"
              alt="logo-half"
              height={"60"}
              width={"60"}
            />
            <p className="mt-3 text-[12px]">Monopoly Go!</p>
            <p>$2</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
