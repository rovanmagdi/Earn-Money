import HowItWork from "@/components/landingPage/howItWork";
import Image from "next/image";
import React from "react";

const Advertise = () => {
  return (
    <div className=" p-[90px]">
      <section className="flex flex-col gap-8 justify-center items-center">
        <img src={"assets/img/logo-half.svg"} alt="advertise" />
        <p className="text-[35px] font-bold">
          We help you acquire new users and expand your brand awareness
        </p>
        <div className=" bg-green-500 px-5 py-3 rounded text-white flex justify-center m-auto">
          Advertise Now{" "}
        </div>
        <section className="flex  gap-9 justify-center items-center pt-5">
          <div className="flex flex-col justify-center items-center gap-1 ">
            <Image
              src={"assets/img/cursor.svg"}
              alt="advertise"
              height={50}
              width={50}
            />
            <p className="text-[25px] font-bold">2,902,010,421</p>
            <p className="text-[16px]">advertisement clicks delivered</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-1 ">
            <Image
              src={"assets/img/microphone.svg"}
              alt="advertise"
              height={50}
              width={50}
            />
            <p className="text-[25px] font-bold">2,902,010,421</p>

            <p className="text-[16px]">advertisers used our service</p>
          </div>
        </section>
      </section>

      <section className="mt-[100px]">
        <p className="text-[35px] font-bold">How It Works</p>
        <div className="flex items-center justify-between gap-9 pb-[100px]">
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

      <section className="my-[100px] flex flex-col ">
        <p className="text-[12px] capitalize text-green-500 font-bold">
          hOW iT WORKS
        </p>
        <p className="text-[35px] font-bold">Why Choose Us</p>

        <div className="flex gap-3 mb-4 mt-10">
          <div className="p-[40px] bg-[#f5fcf7ff] rounded-[10px] flex flex-col gap-3 w-[40%]">
            <Image
              alt="image"
              height={50}
              width={50}
              src="assets/img/high.svg"
            />
            <p className="font-bold text-[20px] text-green-500">
              High quality traffic
            </p>
            <p className="text-[15px]">
              With our innovation quality control system, we are proud that the
              traffic we delivered is 99.99% real.
            </p>
          </div>

          <div className="p-[40px] bg-[#f5fcf7ff] rounded-[10px] flex flex-col gap-3 w-[70%]">
            <Image
              alt="image"
              height={50}
              width={50}
              src="assets/img/target.svg"
            />
            <p className="font-bold text-[20px] text-green-500">
              Geographic targeting{" "}
            </p>
            <p className="text-[15px]">
              You can choose your advertisement displaying to any specific
              countries
            </p>
          </div>
        </div>
        <div className="flex gap-3 mb-4">
          <div className="p-[40px] bg-[#f5fcf7ff] rounded-[10px] flex flex-col gap-3 w-[70%]">
            <Image
              alt="image"
              height={50}
              width={50}
              src="assets/img/price_.svg"
            />
            <p className="font-bold text-[20px] text-green-500">
              High quality traffic
            </p>
            <p className="text-[15px]">
              With our innovation quality control system, we are proud that the
              traffic we delivered is 99.99% real.
            </p>
          </div>

          <div className="p-[40px] bg-[#f5fcf7ff] rounded-[10px] flex flex-col gap-3 w-[40%]">
            <Image
              alt="image"
              height={50}
              width={50}
              src="assets/img/manage.svg"
            />
            <p className="font-bold text-[20px] text-green-500">
              Geographic targeting{" "}
            </p>
            <p className="text-[15px]">
              You can choose your advertisement displaying to any specific
              countries
            </p>
          </div>
        </div>
      </section>

      <section>
        <p className="text-[35px] font-bold mb-7">Our Advertisers</p>,
        <div className="flex gap-3">
          <div className="flex flex-col gap-3">
            <Image
              src="/assets/img/bitdeer.png"
              className="bg-[#F5F5F5] p-9 rounded-[8px]"
              height={300}
              width={350}
              alt="logo"
            />
            <Image
              src="/assets/img/bitfufu.png"
              className="bg-[#F5F5F5] p-9 rounded-[8px]"
              height={300}
              width={350}
              alt="logo"
            />
          </div>

          <div className="flex flex-col gap-3">
            <Image
              src="/assets/img/etoro.png"
              className="bg-[#F5F5F5] p-9 rounded-[8px]"
              height={300}
              width={350}
              alt="logo"
            />
            <Image
              src="/assets/img/hbomax.png"
              className="bg-[#F5F5F5] p-9 rounded-[8px]"
              height={300}
              width={350}
              alt="logo"
            />
          </div>

          <div className="flex flex-col gap-3">
            <Image
              className="bg-[#F5F5F5] p-9 rounded-[8px]"
              height={300}
              width={350}
              alt="logo"
              src="/assets/img/bybit.png"
            />
            <Image
              src="/assets/img/indoex.png"
              className="bg-[#F5F5F5] p-9 rounded-[8px]"
              height={300}
              width={350}
              alt="logo"
            />
          </div>

          <div className="flex flex-col gap-3">
            <Image
              width={350}
              src="/assets/img/alibaba.png"
              className="bg-[#F5F5F5] p-9 rounded-[8px]"
              height={300}
              alt="logo"
            />

            <Image
              alt="logo"
              src="/assets/img/stromgain.png"
              className="bg-[#F5F5F5] p-9 rounded-[8px]"
              height={300}
              width={350}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Advertise;
