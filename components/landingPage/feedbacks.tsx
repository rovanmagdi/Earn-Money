"use client";

import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

const Feedbacks = () => {
  const feedbackData = [
    {
      name: "Jacob Joshua",
      role: "Chief Manager",
      feedback:
        "I found the digital expertise I needed. Their creative-professional balance exceeded expectations. Friendly interactions, exceptional outcomes. For digital enchantment, it's got to be Embrace!",
      image: "assets/img/avatar.png", // path to Jacob's image
    },
    {
      name: "Amelia Joseph",
      role: "Chief Manager",
      feedback:
        "My vision came alive effortlessly. Their blend of casual and professional approach made the process a breeze. Creativity flowed, and the results were beyond my expectations.",
      image: "assets/img/avatar.png", // path to Jacob's image
    },
    {
      name: "Jacob Joshua",
      role: "Chief Manager",
      feedback:
        "Embrace really nails it! Creative brilliance, approachable style. They're the partners you want—artistry meets strategy. Thrilled with what they achieved!",
      image: "assets/img/avatar.png", // path to Jacob's image
    },
    {
      name: "Jacob Joshua",
      role: "Chief Manager",
      feedback:
        "Embrace really nails it! Creative brilliance, approachable style. They're the partners you want—artistry meets strategy. Thrilled with what they achieved!",
      image: "assets/img/avatar.png", // path to Jacob's image
    },
  ];

  const [api, setApi] = useState<any>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section className="my-[100px]">
      <div className="flex flex-col justify-center items-center pt-5 gap-3">
        <p className="text-green-500 font-bold">Users Feedbacks</p>
        <h1 className="font-bold text-[40px] mx-5">
          What Our Clients Said About Us
        </h1>
        <p>Hear from Our Satisfied Clients</p>
      </div>

      <Carousel setApi={setApi} className="w-[90%] m-auto  mt-[65px]">
        <CarouselContent>
          {feedbackData.map((item, index) => (
            <CarouselItem
              key={index}
              className="pl-1 md:basis-1/2 lg:basis-1/3"
            >
              <div
                className={`${index == current + 1
                  ? "bg-green-500 text-white h-[344px]"
                  : "bg-[#E7E7E7] h-[326px] mt-2"
                  } p-[40px] rounded-[20px] flex flex-col gap-3`}
              >
                <div className="flex items-center gap-3">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-[80px] h-[80px] rounded-full"
                  />
                  <div>
                    <h3 className=" text-xl pb-3">{item.name}</h3>
                    <p className="text-sm ">{item.role}</p>
                  </div>
                </div>
                <p className="mt-4 font-light">{item.feedback}</p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className=" border-[2px] border-green-500 w-16 h-16 top-[400px] left-56" />
        <CarouselNext className=" border-[2px] border-green-500 w-16 h-16 top-[400px] right-80 " />
        <div className="flex mt-4 gap-5"></div>
      </Carousel>
    </section>
  );
};

export default Feedbacks;
