"use client";
import Link from "next/link";
import React, { useState } from "react";

const EasilyReceive = () => {
  const [change, setChange] = useState(1);

  return (
    <section className="mt-[100px]">
      {/* Header Section */}
      <div className="flex flex-col justify-center items-center pt-5 gap-3 text-center">
        <p className="text-green-500 font-[700]">Easily Receive</p>
        <h1 className="font-bold text-[30px] sm:text-[40px]">
          Experience Seamless Money Transfers
        </h1>
        <p className="text-sm sm:text-base">
          Simplify Your Money Management with Receive & Request Payments
        </p>
      </div>

      {/* Content Section */}
      <div className="h-auto md:h-[70vh] flex flex-col md:flex-row justify-center items-center">
        <div className="flex flex-col md:flex-row justify-around items-center w-full mt-5 max-w-[1200px] px-5 gap-8 md:gap-0">
          {/* Left Section */}
          <div className="relative">
            <img
              src={
                change === 4
                  ? "assets/gif/sharingOpinions.gif"
                  : change === 1
                  ? "assets/gif/Browsing.gif"
                  : change === 2
                  ? "assets/gif/gaming.png"
                  : "assets/gif/try.png"
              }
              className="relative w-full max-w-[350px] md:max-w-[550px] h-auto object-contain"
              alt="content display"
            />
            <div className="absolute text-green-500 top-full left-[5%] md:top-[450px] md:left-[25px] font-bold text-[20px] md:text-[25px] w-full md:w-[500px] text-center mt-4 md:mt-0">
              Finish these within only 8 minutes to earn $1.00
            </div>
          </div>

          {/* Middle Divider */}
          <div className="hidden md:flex flex-col items-center ">
            <p className="h-[230px] w-[1px] bg-[#d3d3d3]"></p>
            <p
              className={`text-green-500 font-bold absolute bg-white ${
                change === 1
                  ? "mt-3"
                  : change === 2
                  ? "mt-20"
                  : change === 3
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
            {[
              {
                id: 1,
                title: "Browsing",
                description: "Earn coins by browsing various websites.",
              },
              {
                id: 2,
                title: "Gaming",
                description:
                  "Play free games on your phone and get coins for completing various in-game steps.",
              },
              {
                id: 3,
                title: "Trying out",
                description:
                  "Help companies try out their apps and collect coin rewards.",
              },
              {
                id: 4,
                title: "Sharing opinions",
                description:
                  "Earn coins for sharing your opinions, and influence the next generation products or services of the world.",
              },
            ].map((item) => (
              <div key={item.id}>
                <p
                  className={`cursor-pointer font-bold ${
                    change === item.id ? "text-green-500" : ""
                  }`}
                  onClick={() => setChange(item.id)}
                >
                  {item.title}
                </p>
                <p className="text-[#8C8C8A] w-full md:w-[300px]">
                  {item.description}
                </p>
              </div>
            ))}

            <Link
              href="https://earnmon.com/login"
              target="_blank"
              className="bg-green-500 px-5 py-3 rounded text-white text-center"
            >
              Start Earning Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EasilyReceive;
