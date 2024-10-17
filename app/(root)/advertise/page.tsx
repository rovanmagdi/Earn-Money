import HowItWork from "@/components/landingPage/howItWork";
import Image from "next/image";
import React from "react";

const Advertise = () => {
  return (
    <div className="p-6 md:p-[90px]">
      <section className="flex flex-col gap-8 justify-center items-center text-center">
        <img src={"assets/img/logo-half.svg"} alt="advertise" />
        <p className="text-[24px] md:text-[35px] font-bold">
          We help you acquire new users and expand your brand awareness
        </p>
        <div className="bg-green-500 px-5 py-3 rounded text-white flex justify-center cursor-pointer">
          Advertise Now
        </div>
        <section className="flex flex-col md:flex-row gap-9 justify-center items-center pt-5">
          <div className="flex flex-col justify-center items-center gap-1">
            <Image
              src={"assets/img/cursor.svg"}
              alt="advertise"
              height={50}
              width={50}
            />
            <p className="text-[20px] md:text-[25px] font-bold">
              2,902,010,421
            </p>
            <p className="text-[14px] md:text-[16px]">
              advertisement clicks delivered
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-1">
            <Image
              src={"assets/img/microphone.svg"}
              alt="advertise"
              height={50}
              width={50}
            />
            <p className="text-[20px] md:text-[25px] font-bold">
              2,902,010,421
            </p>
            <p className="text-[14px] md:text-[16px]">
              advertisers used our service
            </p>
          </div>
        </section>
      </section>

      <section className="mt-12 md:mt-[100px]">
        <p className="text-[24px] md:text-[35px] font-bold">How It Works</p>
        <div className="flex flex-col md:flex-row items-center justify-between gap-9 pb-12 md:pb-[100px]">
          <div className="text-center">
            <Image
              src="assets/img/Business Plan-pana 1.svg"
              height={320}
              width={320}
              alt="logo-half"
            />
            <p className="text-green-500 font-bold mt-5">Advertisers</p>
          </div>
          <Image
            src="assets/img/click.svg"
            height={100}
            width={100}
            alt="logo-half"
          />
          <div className="text-center">
            <img src="assets/img/Static website-pana 1.svg" alt="Earn Money" />
            <p className="text-green-500 mt-5 font-bold">Earn Money</p>
          </div>
          <Image
            src="assets/img/price.svg"
            height={100}
            width={100}
            alt="logo-half"
          />
          <div className="text-center">
            <Image
              src="assets/img/E-Wallet-pana 1.svg"
              height={250}
              width={250}
              alt="logo-half"
            />
            <p className="text-green-500 font-bold mt-5">Users</p>
          </div>
        </div>
      </section>

      <section className="my-12 md:my-[100px] flex flex-col">
        <p className="text-[12px] capitalize text-green-500 font-bold">
          How It Works
        </p>
        <p className="text-[24px] md:text-[35px] font-bold">Why Choose Us</p>

        <div className="flex flex-col md:flex-row gap-3 mb-4 mt-10">
          <div className="p-6 md:p-[40px] bg-[#f5fcf7ff] rounded-[10px] flex flex-col gap-3 md:w-[40%]">
            <Image
              alt="High quality traffic"
              height={50}
              width={50}
              src="assets/img/high.svg"
            />
            <p className="font-bold text-[18px] md:text-[20px] text-green-500">
              High quality traffic
            </p>
            <p className="text-[15px]">
              With our innovative quality control system, we deliver 99.99% real
              traffic.
            </p>
          </div>

          <div className="p-6 md:p-[40px] bg-[#f5fcf7ff] rounded-[10px] flex flex-col gap-3 md:w-[60%]">
            <Image
              alt="Geographic targeting"
              height={50}
              width={50}
              src="assets/img/target.svg"
            />
            <p className="font-bold text-[18px] md:text-[20px] text-green-500">
              Geographic targeting
            </p>
            <p className="text-[15px]">
              Target specific countries for your advertisements.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-3">
          <div className="p-6 md:p-[40px] bg-[#f5fcf7ff] rounded-[10px] flex flex-col gap-3 md:w-[60%]">
            <Image
              alt="Affordable pricing"
              height={50}
              width={50}
              src="assets/img/price_.svg"
            />
            <p className="font-bold text-[18px] md:text-[20px] text-green-500">
              Affordable pricing
            </p>
            <p className="text-[15px]">
              Get competitive pricing for high-quality traffic.
            </p>
          </div>

          <div className="p-6 md:p-[40px] bg-[#f5fcf7ff] rounded-[10px] flex flex-col gap-3 md:w-[40%]">
            <Image
              alt="Easy campaign management"
              height={50}
              width={50}
              src="assets/img/manage.svg"
            />
            <p className="font-bold text-[18px] md:text-[20px] text-green-500">
              Easy campaign management
            </p>
            <p className="text-[15px]">
              Manage your ad campaigns with our user-friendly platform.
            </p>
          </div>
        </div>
      </section>

      <section>
        <p className="text-[24px] md:text-[35px] font-bold mb-7">
          Our Advertisers
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-[#F5F5F5] p-9 rounded-[8px]">
            <Image
              src="/assets/img/bitdeer.png"
              height={300}
              width={350}
              alt="Bitdeer"
            />
          </div>
          <div className="bg-[#F5F5F5] p-9 rounded-[8px]">
            <Image
              src="/assets/img/bitfufu.png"
              height={300}
              width={350}
              alt="Bitfufu"
            />
          </div>
          <div className="bg-[#F5F5F5] p-9 rounded-[8px]">
            <Image
              src="/assets/img/etoro.png"
              height={300}
              width={350}
              alt="eToro"
            />
          </div>
          <div className="bg-[#F5F5F5] p-9 rounded-[8px]">
            <Image
              src="/assets/img/hbomax.png"
              height={300}
              width={350}
              alt="HBOMax"
            />
          </div>
          <div className="bg-[#F5F5F5] p-9 rounded-[8px]">
            <Image
              src="/assets/img/bybit.png"
              height={300}
              width={350}
              alt="Bybit"
            />
          </div>
          <div className="bg-[#F5F5F5] p-9 rounded-[8px]">
            <Image
              src="/assets/img/indoex.png"
              height={300}
              width={350}
              alt="IndoEx"
            />
          </div>
          <div className="bg-[#F5F5F5] p-9 rounded-[8px]">
            <Image
              src="/assets/img/alibaba.png"
              height={300}
              width={350}
              alt="Alibaba"
            />
          </div>
          <div className="bg-[#F5F5F5] p-9 rounded-[8px]">
            <Image
              src="/assets/img/stromgain.png"
              height={300}
              width={350}
              alt="StormGain"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Advertise;
