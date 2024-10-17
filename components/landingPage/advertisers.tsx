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
    <section className="mt-24 mb-24 mx-3">
      <h1 className="font-bold text-2xl mb-10 mx-5 text-center">
        Our Advertisers
      </h1>

      <Carousel className="mx-auto w-full max-w-7xl">
        <CarouselContent className="flex gap-4">
          {arr.map((img, index) => (
            <CarouselItem
              key={index}
              className="flex-shrink-0 w-40 md:w-48 lg:w-56 mx-2 border border-green-500 rounded-lg py-[32px] h-32"
            >
              <Image
                src={img}
                height={250}
                width={250}
                alt="logo"
                className="object-contain "
              />
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
