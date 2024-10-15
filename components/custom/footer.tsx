import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <section className="bg-[#F9F9F9] px-[80px] py-5 p ">
      <div className="flex justify-between items-center">
        <div>
          <Image
            src="/assets/img/logo.svg"
            height={40}
            width={150}
            alt="logo"
          />
        </div>
        <div className="flex gap-[20px]">
          <div>
            <p className="font-bold text-green-500 mb-3">About</p>
            <div className="flex flex-col gap-[10px] text-[13px]">
              <Link href="/faq">FAQ</Link>
              <Link href="/privacy">Privacy</Link>
              <Link href="/terms">Terms of Services</Link>
            </div>
          </div>
          <div>
            <p className="font-bold text-green-500 mb-3">Services</p>
            <div className="flex flex-col gap-[10px] text-[13px]">
              <span>Terms of Services</span>
              <span>LeaderBoard</span>
            </div>
          </div>{" "}
          <div>
            <p className="font-bold text-green-500 mb-3">Info</p>
            <div className="flex flex-col gap-[10px] text-[13px]">
              <span>Testimonials</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between  mt-[40px]">
        <div className="flex items-center gap-[20px]">
          <img
            src="assets/img/twitter.svg"
            alt="twitter"
            className="bg-white p-2 rounded-full border h-9 w-10 "
          />

          <img
            src="assets/img/tiktok-.svg"
            alt="tiktok"
            className="bg-white p-2 rounded-full border h-9 w-10 "
          />
          <img
            src="assets/img/instagram.svg"
            alt="instagram"
            className="bg-white p-2 rounded-full border h-9 w-10 "
          />
          <img
            src="assets/img/youtube.svg"
            alt="youtube"
            className="bg-white p-2 rounded-full border h-9 w-10 "
          />
        </div>
        <div className="text-[12px]">
          © 2024, Earn Money All Rights Reserved.
        </div>
      </div>
    </section>
  );
};

export default Footer;
