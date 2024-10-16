import React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const Advertisers = () => {
  const arr = [
    "/assets/img/bitdeer.png",
    "/assets/img/alibaba.png",
    "/assets/img/etoro.png",
    "/assets/img/bybit.png",
    "/assets/img/stromgain.png",
    "/assets/img/indoex.png",
    "/assets/img/bybit.png",
    "/assets/img/hbomax.png",
  ];
  return (
    <section className="mt-[100px] my-[40px] mx-3">
      <h1 className="font-bold text-[25px] mb-[40px] mx-10">Our Advertisers</h1>

      <Carousel className="w-[1300px] mx-[150px] mb-[100px]">
        <CarouselContent className="-ml-1">
          {arr.map((img, index) => (
            <CarouselItem
              key={index}
              className="pl-1 md:basis-1/2 lg:basis-[20%] mx-3"
            >
              <Image src={img} height={250} width={250} alt="logo" />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};

export default Advertisers;
