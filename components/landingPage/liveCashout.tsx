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

  // const plugin = React.useRef(
  //   Autoplay({ delay: 2000, stopOnInteraction: true })
  // );

  return (
    <section className="p-3 bg-[#f5fcf7]">
      <div className="flex items-center gap-2 mx-auto max-w-5xl">
        <div className="flex items-center gap-2">
          <p className="font-bold bg-green-500 rounded-full h-[10px] w-[10px]"></p>
          <span className="font-bold text-green-500">Live Cashout</span>
        </div>

        <Carousel
          className="w-full overflow-hidden"
          // plugins={[plugin.current]}
        >
          <CarouselContent className="flex gap-2">
            {arr.map((img, index) => (
              <CarouselItem
                key={index}
                className="flex-shrink-0 w-[150px] md:w-[200px] lg:w-[250px] mx-1"
              >
                <div className="bg-white p-2 rounded-lg flex items-center gap-2 w-[170px]">
                  <img src={img} alt="logo-half" className="h-7 w-7" />
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
