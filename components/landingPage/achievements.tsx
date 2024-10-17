import Link from "next/link";
import React from "react";

const Achievements = () => {
  return (
    <section className="flex flex-col md:flex-row justify-around items-center my-[100px] px-5">
      <div className="w-full md:w-[300px] text-center md:text-left">
        <h3 className="font-bold text-[40px]">Our 18 Years of Achievements</h3>
        <p className="text-[12px] text-[#8C8C8A]">
          With our superpowers, we have reached this
        </p>
        <Link
          href="https://earnmon.com/login"
          target="_blank"
          className="bg-green-500 px-1 py-2 rounded text-white flex justify-center mt-3 w-[200px] text-[12px] mx-auto md:mx-0 cursor-pointer"
        >
          Start Earning Now
        </Link>
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex gap-5">
          <div>
            <div>
              <img src="assets/img/Icon.svg" />
            </div>
            <div>
              <div>
                <p className="font-bold text-[20px]">+2055</p>
                <p>Times Of Successful Payments</p>
              </div>
            </div>
          </div>

          <div>
            <div>
              <img src="assets/img/Icon-1.svg" />
            </div>
            <div>
              <div>
                <p className="font-bold text-[20px]">+2055</p>
                <p>Times Of Successful Payments</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-5">
          <div>
            <div>
              <img src="assets/img/Icon-2.svg" />
            </div>
            <div>
              <div>
                <p className="font-bold text-[20px]">+2055</p>
                <p>Times Of Successful Payments</p>
              </div>
            </div>
          </div>

          <div>
            <div>
              <img src="assets/img/Icon-3.svg" />
            </div>
            <div>
              <div>
                <p className="font-bold text-[20px]">+2055</p>
                <p>Times Of Successful Payments</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
