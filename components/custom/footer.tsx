import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <section className="bg-[#F9F9F9] px-6 py-5 md:px-[80px]">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="mb-5 md:mb-0">
          <Image
            src="/assets/img/logo.svg"
            height={40}
            width={150}
            alt="logo"
          />
        </div>

        <div className="flex flex-col md:flex-row gap-6 md:gap-[20px] text-center md:text-left">
          <div>
            <p className="font-bold text-green-500 mb-3">About</p>
            <div className="flex flex-col gap-[10px] text-[13px]">
              <Link href="/faq">FAQ</Link>
              <Link href="/privacy">Privacy</Link>
              <Link href="/terms">Terms of Services</Link>
              <Link href="/advertise">Advertise</Link>
            </div>
          </div>

          <div>
            <p className="font-bold text-green-500 mb-3">Services</p>
            <div className="flex flex-col gap-[10px] text-[13px]">
              <span>Terms of Services</span>
              <span>LeaderBoard</span>
            </div>
          </div>

          <div>
            <p className="font-bold text-green-500 mb-3">Info</p>
            <div className="flex flex-col gap-[10px] text-[13px]">
              <span>Testimonials</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between mt-[40px] gap-4">
        <div className="flex gap-[10px] md:gap-[20px]">
          <img
            src="assets/img/twitter.svg"
            alt="twitter"
            className="bg-white p-2 rounded-full border h-9 w-9 md:h-9 md:w-10"
          />
          <img
            src="assets/img/tiktok-.svg"
            alt="tiktok"
            className="bg-white p-2 rounded-full border h-9 w-9 md:h-9 md:w-10"
          />
          <img
            src="assets/img/instagram.svg"
            alt="instagram"
            className="bg-white p-2 rounded-full border h-9 w-9 md:h-9 md:w-10"
          />
          <img
            src="assets/img/youtube.svg"
            alt="youtube"
            className="bg-white p-2 rounded-full border h-9 w-9 md:h-9 md:w-10"
          />
        </div>

        <div className="text-[12px] text-center">
          © 2024, Earn Money. All Rights Reserved.
        </div>
      </div>
    </section>
  );
};

export default Footer;
