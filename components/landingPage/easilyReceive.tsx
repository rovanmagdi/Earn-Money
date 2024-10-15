"use client";
import React, { useState } from "react";

const EasilyReceive = () => {
  const [change, setChange] = useState(1);
  return (
    <section className="mt-[100px]">
      <div className="flex flex-col justify-center items-center pt-5 gap-3">
        <p className="text-green-500 font-[700] ">Easily Receive </p>
        <h1 className="font-bold text-[40px]">
          Experience Seamless Money Transfers
        </h1>
        <p>Simplify Your Money Management with Receive & Request Payments</p>
      </div>
      <div className="h-[70vh] flex justify-center items-center">
        <div className="flex justify-around items-center w-full mt-5 max-w-[1200px] px-5">
          {/* Left Section */}
          <div className="relative">
            <img
              src={
                change == 4
                  ? "assets/gif/sharingOpinions.gif"
                  : change == 1
                  ? "assets/gif/Browsing.gif"
                  : change == 2
                  ? "assets/gif/gaming.png"
                  : "assets/gif/try.png"
              }
              className="relative w-[550px] h-[450px] object-contain"
              alt="logo-half"
              height={20}
              width={20}
            />
            <div className="absolute text-green-500 top-[450px] left-[25px] font-bold text-[25px] w-[500px] text-center">
              Finish these within only 8 minutes to earn $1.00
            </div>
          </div>

          {/* Middle Divider */}
          <div className="flex flex-col items-center gap-1">
            <p className="h-[230px] w-[1px] bg-[#d3d3d3]"></p>
            <p
              className={`text-green-500 font-bold absolute bg-white ${
                change == 1
                  ? "mt-3"
                  : change == 2
                  ? "mt-20"
                  : change == 3
                  ? "mt-48"
                  : "mt-72"
              } `}
            >
              Earn Money
            </p>
            <p className="h-[230px] w-[1px] bg-[#d3d3d3]"></p>
          </div>

          {/* Right Section */}
          <div className="flex flex-col gap-5">
            <div>
              <p
                className={`${
                  change == 1 ? "text-green-500" : ""
                } font-bold cursor-pointer`}
                onClick={() => {
                  setChange(1);
                }}
              >
                Browsing
              </p>
              <p className="text-[#8C8C8A]">
                Earn coins by browsing various websites.
              </p>
            </div>
            <div>
              <p
                className={`${
                  change == 2 ? "text-green-500" : ""
                } font-bold cursor-pointer`}
                onClick={() => {
                  setChange(2);
                }}
              >
                Gaming
              </p>
              <p className="text-[#8C8C8A] w-[300px]">
                Play free games on your phone and get coins for completing
                various in-game steps.
              </p>
            </div>
            <div>
              <p
                className={`${
                  change == 3 ? "text-green-500" : ""
                } font-bold cursor-pointer`}
                onClick={() => {
                  setChange(3);
                }}
              >
                Trying out
              </p>
              <p className="text-[#8C8C8A] w-[300px]">
                Help companies try out their apps and collect coin rewards.
              </p>
            </div>
            <div>
              <p
                className={`${
                  change == 4 ? "text-green-500" : ""
                } font-bold cursor-pointer`}
                onClick={() => {
                  setChange(4);
                }}
              >
                Sharing opinions
              </p>
              <p className="text-[#8C8C8A] w-[300px]">
                Earn coins for sharing your opinions, and influence the next
                generation products or services of the world.
              </p>
            </div>
            <div className=" bg-green-500 px-5 py-3 rounded text-white  text-center">
              Start Earning Now
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EasilyReceive;
