import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import React from "react";

const FAQ = () => {
  const questionsGeneral = [
    {
      question: "What is join2coin?",
      answer: "•	join2coin is an online rewards platform that pays you cash and gift cards to browse websites, play games, try out new apps, share your opinions, and more! There’s no cost to join.",
    },

    {
      question: "What is my purchase balance?",
      answer: "You may use purchase balance to buy any service from join2coin. For example, advertisement. Purchase balance is non-refundable and can not be transferred to your balance",
    },
    {
      question: "Can I open multiple accounts?",
      answer: "•	No. Multiple accounts will be all suspended.",
    },
    {
      question: "Why do not I receive the email code?",
      answer: "1. Please check the spam folder in your email inbox. 2. Please whitelist join2coinemail addresses:support@join2coin.com",
    },
    {
      question: "What are 'coins' ?",
      answer: "•	Coins are the credits you earn when surfing websites, taking surveys and doing offers.Coins can be redeemed for various rewards when you cash out.",
    },
    {
      question: "Can I change registered email address?",
      answer: "No. It is not possible.",
    },
    {
      question: "Why is my balance reduced?",
      answer: "•	It usually happens if there is an offer chargeback. You can track the chargeback at Offers - Offer Statistics.",
    },

  ]
  const questionsPayments = [
    {
      question: "When do I get paid?", answer: "•	The payment is processed in 2 days."
    },
    {
      question: "Why is payment status showing'Payment in X days' ?", answer
        : "•	Payment in 2 days.Your withdrawal will be processed in 2 days. Most of users’ withdrawals will be processed in this time frame.  •	Payment in X days X days is longer than 2 days. Maybe 7 days, 30 days. For example, Payment in 30 days. Your withdrawal will be processed in 30 days. Occasionally our system will automatically delay the payments when potential risk is detected or we need more time to review the payment.There is nothing to be concerned about on your end, and it is not a punishment or an accusation, you have done nothing wrong. "
    },
    {
      question: "The gift card is not able to use in my country. Can I refund it?", answer: "•	It is important to choose the right country while you make a withdrawal via gift cards.Gift cards are region locked, a France gift card would not work in Italy for example.Gift cards are non-refundable, we will not be able to help if you have withdrawn one for the wrong region."
    },
    {
      question: "What is the minimum payment?", answer: "•	1000 coins. It is equal to $1."
    },
    {
      question: "Can I change registered email address?", answer: "•	No. It is not possible."
    },
    {
      question: "Why is my balance reduced?", answer: "•	It usually happens if there is an offer chargeback. You can track the chargeback at Offers - Offer Statistics."
    }
  ]
  const questionsOffer = [
    { question: "Why is offer status showing 'Payment in X days' ?", answer: "•	After you have completed an offer, you cannot see the coins in your balance. Some offers are not released to your balance instantly as a fraud prevention measure. There is nothing to be concerned about on your end, and it is not a punishment or an accusation, you have done nothing wrong. •	Currently you need do nothing about it , just wait until it is released. If your offer status showing payment in 7 days, the offer rewards will go to your balance in 7 days." }
    ,
    { question: "What is chargeback?", answer: "•	A chargeback is what happens when an offerwall deducts coins for an offer you were already credited for. Every offerwall reserves the right to issue chargebacks when they consider the offers completed are not qualified. The industry sees it as a key tool for combatting fraud." },
    { question: "Can I complete the same offer in the different offerwalls?", answer: "•	No.The intention with many offers is to attract new users, if you have completed an offer with one of our Offerwalls, you count as an existing user and would therefore not be qualified to complete the same offer again. Sometimes attempting to complete an offer with different Offerwalls can result in a Chargeback." },
    { question: "Why is offer status showing 'Date pending' ?", answer: "•	If you are unable to see any specified date for the release of your payment, your general chargeback rate may be too high. If your Chargeback rate is above 10% we will hold your completed offers. We will release these coins after you have completed more offers, and get the chargeback rate below 10% for consecutive 15 days." },
    { question: "Why is my chargeback status showing Risky?", answer: "•	When your offer chargeback rate is higher than 10%, your chargeback status will be shown as Risky. In this case, you need do more offers to get your chargeback rate below 10%." },
  ]
  const questionsAdvertisement = [
    { question: "The ads has already been clicked by the same IP today.", answer: "•	If system gives you this error message, it means someone used the same ip to view ads today. For advertisers, we need to deliver unique ip daily. We can not help over this, but we may suggest you come early to view ads." },
    { question: "There are no ads for you.", answer: "•	Considering all the factors, there are no suitable ads for you. Please do not contact us for this situation, as we can not help over this." },
    { question: "Is your ads effect good?", answer: "•	Yes, unqiue recaptcha system is adopted to ensure all the ads visits are from real human." },

  ]
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

                {questionsGeneral?.map((ques) => (
                  <ul className="flex flex-col gap-[10px]">

                    <li className="list-disc">
                      {ques.question}

                    </li>

                    <li className="px-[40px] py-[10px] rounded-[5px] bg-[#f5fcf7ff]">
                      {ques.answer}

                    </li>
                  </ul>
                ))}


                {/* Add more FAQ items as needed */}
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
                {questionsPayments?.map((ques) => (
                  <ul className="flex flex-col gap-[10px]">

                    <li className="list-disc">
                      {ques.question}

                    </li>

                    <li className="px-[40px] py-[10px] rounded-[5px] bg-[#f5fcf7ff]">
                      {ques.answer}

                    </li>
                  </ul>
                ))}


                {/* Add more FAQ items as needed */}
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
                {questionsOffer?.map((ques) => (

                  <ul className="flex flex-col gap-[10px]">
                    <li className="list-disc">
                      {ques.question}

                    </li>

                    <li className="px-[40px] py-[10px] rounded-[5px] bg-[#f5fcf7ff]">
                      {ques.answer}

                    </li>
                  </ul>
                ))}
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
                {questionsAdvertisement?.map((ques) => (
                  <ul className="flex flex-col gap-[10px]">
                    <li className="list-disc">
                      {ques.question}
                    </li>
                    <li className="px-[40px] py-[10px] rounded-[5px] bg-[#f5fcf7ff]">
                      {ques.answer}
                    </li>
                  </ul>
                ))}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>


      </div>
    </div>
  );
};

export default FAQ;
