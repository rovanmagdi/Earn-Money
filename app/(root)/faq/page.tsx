import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import React from "react";

const FAQ = () => {
  return (
    <div className="p-[90px] flex flex-col gap-5 z-50">
      <h2 className="text-green-500 font-bold text-[20px] mb-5 font-pacifico">
        Common
      </h2>
      <h1 className="font-bold text-[32px]">
        <span className="border-b-[3px] border-green-500 mt-2">FAQ’S</span>
      </h1>
      {/* Genral */}
      <div className="flex flex-col gap-[50px]">
        <div>
          <p className="font-bold text-[20px] mb-5">General (7)</p>

          <Accordion
            type="single"
            collapsible
            className="w-full 0  rounded-[10px]"
          >
            <AccordionItem value="item-1">
              {" "}
              <AccordionTrigger className="px-5 text-white font-bold bg-green-500 rounded-[6px]">
                Questions go here?
              </AccordionTrigger>
              <AccordionContent className="p-5 bg-white">
                <ul className="flex flex-col gap-[10px]">
                  <li className="list-disc ">
                    We shall not sell, rent or share your personal information
                    with any other companies except those who need our help in
                    your service (like providing your postal address or mobile
                    number to third party for delivery purposes)
                  </li>
                  <li className="px-[40px] py-[10px] rounded-[5px] bg-[#f5fcf7ff]">
                    Questions goes here ?
                  </li>
                  <li className="px-[40px] py-[10px] rounded-[5px] bg-[#f5fcf7ff]">
                    Questions goes here ?
                  </li>{" "}
                  <li className="px-[40px] py-[10px] rounded-[5px] bg-[#f5fcf7ff]">
                    Questions goes here ?
                  </li>{" "}
                  <li className="px-[40px] py-[10px] rounded-[5px] bg-[#f5fcf7ff]">
                    Questions goes here ?
                  </li>{" "}
                  <li className="px-[40px] py-[10px] rounded-[5px] bg-[#f5fcf7ff]">
                    Questions goes here ?
                  </li>{" "}
                  <li className="px-[40px] py-[10px] rounded-[5px] bg-[#f5fcf7ff]">
                    Questions goes here ?
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        {/* Payment (6) */}
        <div>
          <p className="font-bold text-[20px] mb-5">Payment (6)</p>

          <Accordion
            type="single"
            collapsible
            className="w-full 0  rounded-[8px]"
          >
            <AccordionItem value="item-1">
              {" "}
              <AccordionTrigger className="px-5 text-white font-bold bg-green-500 rounded-[6px]">
                Questions go here?
              </AccordionTrigger>
              <AccordionContent className="p-5 bg-white">
                <ul className="flex flex-col gap-[10px]">
                  <li className="list-disc ">
                    We shall not sell, rent or share your personal information
                    with any other companies except those who need our help in
                    your service (like providing your postal address or mobile
                    number to third party for delivery purposes)
                  </li>
                  <li className="px-[40px] py-[10px] rounded-[5px] bg-[#f5fcf7ff]">
                    Questions goes here ?
                  </li>
                  <li className="px-[40px] py-[10px] rounded-[5px] bg-[#f5fcf7ff]">
                    Questions goes here ?
                  </li>{" "}
                  <li className="px-[40px] py-[10px] rounded-[5px] bg-[#f5fcf7ff]">
                    Questions goes here ?
                  </li>{" "}
                  <li className="px-[40px] py-[10px] rounded-[5px] bg-[#f5fcf7ff]">
                    Questions goes here ?
                  </li>{" "}
                  <li className="px-[40px] py-[10px] rounded-[5px] bg-[#f5fcf7ff]">
                    Questions goes here ?
                  </li>{" "}
                  <li className="px-[40px] py-[10px] rounded-[5px] bg-[#f5fcf7ff]">
                    Questions goes here ?
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        {/* Offers (5) */}
        <div>
          <p className="font-bold text-[20px] mb-5">Offers (5)</p>

          <Accordion
            type="single"
            collapsible
            className="w-full 0  rounded-[8px]"
          >
            <AccordionItem value="item-1">
              {" "}
              <AccordionTrigger className="px-5 text-white font-bold bg-green-500 rounded-[6px]">
                Questions go here?
              </AccordionTrigger>
              <AccordionContent className="p-5 bg-white">
                <ul className="flex flex-col gap-[10px]">
                  <li className="list-disc ">
                    We shall not sell, rent or share your personal information
                    with any other companies except those who need our help in
                    your service (like providing your postal address or mobile
                    number to third party for delivery purposes)
                  </li>
                  <li className="px-[40px] py-[10px] rounded-[5px] bg-[#f5fcf7ff]">
                    Questions goes here ?
                  </li>
                  <li className="px-[40px] py-[10px] rounded-[5px] bg-[#f5fcf7ff]">
                    Questions goes here ?
                  </li>{" "}
                  <li className="px-[40px] py-[10px] rounded-[5px] bg-[#f5fcf7ff]">
                    Questions goes here ?
                  </li>{" "}
                  <li className="px-[40px] py-[10px] rounded-[5px] bg-[#f5fcf7ff]">
                    Questions goes here ?
                  </li>{" "}
                  <li className="px-[40px] py-[10px] rounded-[5px] bg-[#f5fcf7ff]">
                    Questions goes here ?
                  </li>{" "}
                  <li className="px-[40px] py-[10px] rounded-[5px] bg-[#f5fcf7ff]">
                    Questions goes here ?
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Advertisement (3) */}
        <div>
          <p className="font-bold text-[20px] mb-5">Advertisement (3)</p>

          <Accordion type="single" collapsible className="w-full 0ounded-[8px]">
            <AccordionItem value="item-1">
              {" "}
              <AccordionTrigger className="px-5 text-white font-bold bg-green-500 rounded-[6px]">
                Questions go here?
              </AccordionTrigger>
              <AccordionContent className="p-5 bg-white">
                <ul className="flex flex-col gap-[10px]">
                  <li className="list-disc ">
                    We shall not sell, rent or share your personal information
                    with any other companies except those who need our help in
                    your service (like providing your postal address or mobile
                    number to third party for delivery purposes)
                  </li>
                  <li className="px-[40px] py-[10px] rounded-[5px] bg-[#f5fcf7ff]">
                    Questions goes here ?
                  </li>
                  <li className="px-[40px] py-[10px] rounded-[5px] bg-[#f5fcf7ff]">
                    Questions goes here ?
                  </li>{" "}
                  <li className="px-[40px] py-[10px] rounded-[5px] bg-[#f5fcf7ff]">
                    Questions goes here ?
                  </li>{" "}
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Advertisement (3) */}
        <div>
          <p className="font-bold text-[20px] mb-5">Affiliate (5)</p>

          <Accordion
            type="single"
            collapsible
            className="w-full 0  rounded-[8px]"
          >
            <AccordionItem value="item-1">
              {" "}
              <AccordionTrigger className="px-5 text-white font-bold bg-green-500 rounded-[6px]">
                Questions go here?
              </AccordionTrigger>
              <AccordionContent className="p-5 bg-white">
                <ul className="flex flex-col gap-[10px]">
                  <li className="list-disc ">
                    We shall not sell, rent or share your personal information
                    with any other companies except those who need our help in
                    your service (like providing your postal address or mobile
                    number to third party for delivery purposes)
                  </li>
                  <li className="px-[40px] py-[10px] rounded-[5px] bg-[#f5fcf7ff]">
                    Questions goes here ?
                  </li>
                  <li className="px-[40px] py-[10px] rounded-[5px] bg-[#f5fcf7ff]">
                    Questions goes here ?
                  </li>{" "}
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
