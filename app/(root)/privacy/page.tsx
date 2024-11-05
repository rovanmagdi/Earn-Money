import Card from "@/components/custom/Card";
import React from "react";

const Privacy = () => {
  return (
    <>
      <div className="p-6 md:p-10 lg:p-20 flex flex-col gap-5">
        <h2 className="text-green-500 font-bold text-[20px] font-pacifico">
          Our
        </h2>
        <h1 className="font-bold text-[24px] md:text-[32px]">
          Privacy{" "}
          <span className="border-b-[3px] border-green-500 mt-2">Policy</span>
        </h1>
        <p className="w-full md:w-[80%] lg:w-[60%] leading-7 md:leading-9">
          This Privacy Policy describes how EarnMoney.com stores and deals with
          your user information. You can only use the service of EarnMoney.com
          if you agree to this Privacy Policy.
        </p>

        <Card title="Personal Information you provide us">
          <ul className="list-disc pl-5">
            <li>
              To create an account, we will collect your username, email, and
              password. We use this information to allow you to log in and
              operate your account securely.
            </li>
            <li>
              Country, gender, and birthday are collected to make our
              advertisement delivered to the right audience.
            </li>
            <li>
              Wallet address is collected to send you payment when you make a
              withdrawal.
            </li>
            <li>
              Phone number is collected to confirm you are from the right
              country and prevent potential fake accounts.
            </li>
            <li>
              Photo and images are collected to help us identify you as a real
              human and prevent potential fake accounts. This procedure is
              processed by Verisoul, please visit the Verisoul Privacy Policy
              page.
            </li>
          </ul>
        </Card>

        <Card title="Information automatically collected and use">
          <p>
            We may log usage data about your use of our website. The usage data
            includes:
          </p>
          <ul className="list-disc pl-5">
            <li>
              IP address, country location, internet service provider, browser
              and device information, date, and time of Log In.
            </li>
            <li>
              We use this information to operate and maintain our website and
              service, preventing unauthorized access or operation by others.
            </li>
          </ul>
        </Card>

        <Card title="Offerwalls and survey information collection and use">
          <p>
            We use third-party offerwalls and survey partners to provide offers
            and surveys. You will need to review the privacy policy of every
            service you visit and use. We have no control over and assume no
            responsibility for that. It is optional to provide your full name,
            country, address, and personal photo to complete the offer system
            verification. We use this to prevent offer abuse. You may request to
            delete this at any time.
          </p>
        </Card>

        <Card title="Your rights">
          <p>
            You have the right to access any personal information that EarnMoney
            processes about you. You have the right to request to delete your
            personal information. If you want to delete your account, please
            submit a ticket here.
          </p>
        </Card>

        {/* Add responsive cards for each privacy section following similar pattern */}
      </div>
    </>
  );
};

export default Privacy;
