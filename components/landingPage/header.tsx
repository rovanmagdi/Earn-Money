import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <>
      <img src="assets/img/green.png" className="absolute " />
      <img src="assets/img/yellow.png" className="absolute right-0 " />
      <section className="relative flex flex-col justify-center items-center h-screen bg-cover bg-center">
        <Image
          src="/assets/img/header.svg"
          alt="landing"
          className="absolute inset-0 w-full h-full object-cover z-0"
          layout="fill"
        />
        <div className="relative z-10 flex flex-col justify-center items-center gap-8 text-center mt-12 md:mt-20">
          <Image
            src="/assets/img/logo.svg"
            alt="logo"
            height={200}
            width={200}
            className=""
          />
          <p className="text-2xl md:text-4xl font-bold">
            Earn Money Every time you go{" "}
            <span className="text-green-500">Online</span>
          </p>
          <div className="flex flex-wrap justify-center gap-3 items-center text-sm md:text-base">
            <div className="flex gap-2 items-center">
              <Image
                src="/assets/img/amount.svg"
                height={20}
                width={20}
                alt="amount"
              />
              <span className="font-bold">150+</span>
              <span>offers available in</span>
            </div>
            <div className="flex gap-2 items-center">
              <Image
                src="/assets/img/us.svg fill.svg"
                height={20}
                width={20}
                alt="country"
              />
              Egypt
            </div>
            <div className="flex gap-2 items-center">
              <Image
                src="/assets/img/coins.svg"
                height={20}
                width={20}
                alt="earnings"
              />
              <span>Earn up to</span>
              <span className="font-bold">150+</span> per offer
            </div>
          </div>
          <Link
            className="bg-green-500 text-white px-6 py-3 rounded-lg mt-4  transition"
            href="https://earnmon.com/login"
            target="_blank"
          >
            Start Earning Now
          </Link>
          <div className="flex flex-wrap justify-center gap-6 mt-8">
            <div className="border-2 rounded-lg p-4 w-[150px] flex flex-col items-center">
              <Image
                src="/assets/img/tiktok.svg"
                alt="tiktok install"
                height={60}
                width={60}
              />
              <div className="mt-3 text-sm font-bold">
                Tiktok install
                <p className="font-bold text-lg">$2</p>
              </div>
            </div>
            <div className="border-2 rounded-lg p-4 w-[150px] flex flex-col items-center">
              <Image
                src="/assets/img/man.svg"
                alt="warpath"
                height={60}
                width={60}
              />
              <p className="mt-3 text-sm font-bold">Warpath:Ace…</p>
              <p className="font-bold text-lg">$2</p>
            </div>
            <div className="border-2 rounded-lg p-4 w-[150px] flex flex-col items-center">
              <Image
                src="/assets/img/game.svg"
                alt="monopoly go"
                height={60}
                width={60}
              />
              <p className="mt-3 text-sm font-bold">Monopoly Go!</p>
              <p className="font-bold text-lg">$2</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
