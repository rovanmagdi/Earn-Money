import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import React from "react";

const FAQ = () => {
  return (
    <div className="p-6 md:p-10 lg:p-20 flex flex-col gap-5 z-50">
      <h2 className="text-green-500 font-bold text-[20px] mb-5 font-pacifico">
        Common
      </h2>
      <h1 className="font-bold text-[24px] md:text-[32px]">
        <span className="border-b-[3px] border-green-500 mt-2">FAQ’S</span>
      </h1>

      <div className="flex flex-col gap-[30px] md:gap-[50px]">
        {/* General Section */}
        <div>
          <p className="font-bold text-[18px] md:text-[20px] mb-5">
            General (7)
          </p>
          <Accordion
            type="single"
            collapsible
            className="w-full rounded-[10px]"
          >
            <AccordionItem value="item-1">
              <AccordionTrigger className="px-5 text-white font-bold bg-green-500 rounded-[6px]">
                What is your privacy policy?
              </AccordionTrigger>
              <AccordionContent className="p-5 bg-white">
                <ul className="flex flex-col gap-[10px]">
                  <li className="list-disc">
                    We shall not sell, rent, or share your personal information
                    with any other companies except those who need our help in
                    your service (like providing your postal address or mobile
                    number to third parties for delivery purposes).
                  </li>
                  <li className="px-[40px] py-[10px] rounded-[5px] bg-[#f5fcf7ff]">
                    How can I update my account information?
                  </li>
                  <li className="px-[40px] py-[10px] rounded-[5px] bg-[#f5fcf7ff]">
                    Can I delete my account?
                  </li>
                  {/* Add more FAQ items as needed */}
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Payment Section */}
        <div>
          <p className="font-bold text-[18px] md:text-[20px] mb-5">
            Payment (6)
          </p>
          <Accordion type="single" collapsible className="w-full rounded-[8px]">
            <AccordionItem value="item-1">
              <AccordionTrigger className="px-5 text-white font-bold bg-green-500 rounded-[6px]">
                How do I receive payments?
              </AccordionTrigger>
              <AccordionContent className="p-5 bg-white">
                <ul className="flex flex-col gap-[10px]">
                  <li className="list-disc">
                    Payments will be processed through the account information
                    you provide. Ensure your details are correct for timely
                    transactions.
                  </li>
                  {/* Add more FAQ items as needed */}
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Offers Section */}
        <div>
          <p className="font-bold text-[18px] md:text-[20px] mb-5">
            Offers (5)
          </p>
          <Accordion type="single" collapsible className="w-full rounded-[8px]">
            <AccordionItem value="item-1">
              <AccordionTrigger className="px-5 text-white font-bold bg-green-500 rounded-[6px]">
                What types of offers do you provide?
              </AccordionTrigger>
              <AccordionContent className="p-5 bg-white">
                <ul className="flex flex-col gap-[10px]">
                  <li className="list-disc">
                    We offer a variety of promotions that you can participate in
                    to earn rewards. Please review individual offers for more
                    details.
                  </li>
                  {/* Add more FAQ items as needed */}
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Advertisement Section */}
        <div>
          <p className="font-bold text-[18px] md:text-[20px] mb-5">
            Advertisement (3)
          </p>
          <Accordion type="single" collapsible className="w-full rounded-[8px]">
            <AccordionItem value="item-1">
              <AccordionTrigger className="px-5 text-white font-bold bg-green-500 rounded-[6px]">
                How do advertisements work on your platform?
              </AccordionTrigger>
              <AccordionContent className="p-5 bg-white">
                <ul className="flex flex-col gap-[10px]">
                  <li className="list-disc">
                    Advertisements are targeted based on the information
                    provided by users to enhance relevance. We do not share
                    personal information with advertisers.
                  </li>
                  {/* Add more FAQ items as needed */}
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Affiliate Section */}
        <div>
          <p className="font-bold text-[18px] md:text-[20px] mb-5">
            Affiliate (5)
          </p>
          <Accordion type="single" collapsible className="w-full rounded-[8px]">
            <AccordionItem value="item-1">
              <AccordionTrigger className="px-5 text-white font-bold bg-green-500 rounded-[6px]">
                How can I join the affiliate program?
              </AccordionTrigger>
              <AccordionContent className="p-5 bg-white">
                <ul className="flex flex-col gap-[10px]">
                  <li className="list-disc">
                    You can sign up for our affiliate program through our
                    website. Ensure you meet the criteria to start earning
                    commissions.
                  </li>
                  {/* Add more FAQ items as needed */}
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
