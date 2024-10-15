"use client";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const LiveCashout = () => {
  const arr = [
    "assets/img/us.svg fill.svg",
    "assets/img/us.svg fill.svg",
    "assets/img/us.svg fill.svg",
    "assets/img/us.svg fill.svg",
    "assets/img/us.svg fill.svg",
    "assets/img/us.svg fill.svg",
    "assets/img/us.svg fill.svg",
    "assets/img/us.svg fill.svg",
    "assets/img/us.svg fill.svg",
    "assets/img/us.svg fill.svg",
    "assets/img/us.svg fill.svg",
  ];
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  return (
    <section className="p-3 bg-[#f5fcf7ff]">
      <div className="flex items-center  gap-2  ml-[200px]">
        <div className="flex items-center gap-2">
          <p className="font-bold bg-green-500 rounded-full h-[10px] w-[10px] text-green-500"></p>
          <span className="font-bold text-green-500">Live Cashout</span>
        </div>

        <Carousel
          className="w-[950px] mx-20 overflow-y-scrolls"
          plugins={[plugin.current]}
        >
          <CarouselContent className="-ml-1">
            {arr.map((img, index) => (
              <CarouselItem
                key={index}
                className="pl-1 md:basis-[50%] lg:basis-[20%] mx-3"
              >
                <div className="bg-white p-2 rounded-2 flex items-center gap-2 rounded-5">
                  <img src="assets/img/us.svg fill.svg" alt="logo-half" />

                  <span className="px-2 text-[#8C8C8A] text-[12px]">
                    AlaaSBL
                  </span>
                  <span className="font-bold text-green-500">$1.36</span>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default LiveCashout;
