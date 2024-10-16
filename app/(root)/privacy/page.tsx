import Card from "@/components/custom/Card";
import React from "react";

const Privacy = () => {
  return (
    <>
      <div className=" p-[90px] flex flex-col gap-5">
        <h2 className="text-green-500 font-bold text-[20px] font-pacifico ">
          Our
        </h2>{" "}
        <h1 className="font-bold text-[32px]">
          Privacy{" "}
          <span className="border-b-[3px] border-green-500 mt-2"> Policy</span>
        </h1>
        <p className="w-[768px] leading-9">
          This Privacy Policy describes how EarnMoney.com store and deal with
          your user information. You can only use the service of EarnMoney.com
          if you agree to this Privacy Policy.
        </p>
        <Card title=" Personal Information you provide us">
          <ul className="list-disc pl-5 ">
            <li>
              {" "}
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
          We may log usage data about your use of our website. The usage data
          includes:
          <ul className="list-disc pl-5 leading-8">
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
          We use third-party offerwalls and survey partners to provide offers
          and surveys. You will need to review the privacy policy of every
          service you visit and use. We have no control over and assume no
          responsibility for that. It is optional to provide your full name,
          country, address, and personal photo to complete the offer system
          verification. We use this to prevent offer abuse. You may request to
          delete this at any time.
        </Card>
        <Card title="Your rights">
          You have the right to access any personal information that EarnMoney
          processes about you. You have the right to request to delete your
          personal information. If you want to delete your account, please
          submit a ticket here. We may need to request specific information from
          you to help us confirm your identity and ensure your right to access
          your personal data. This is a security measure to ensure that personal
          data is not disclosed to any person who has no right to receive it.
        </Card>
        <Card title="Children's privacy">
          We do not knowingly collect personal information from anyone under the
          age of 16 or knowingly allow such persons to provide us with their
          personal information without parent or guardian consent. If you are
          under the age of 16, do not send any information about yourself to us
          or sign up for an account. If you are a parent or guardian and you
          believe that your child under the age of 16 years old has provided us
          with information without your consent, please contact us and we will
          take steps to ensure that such information is deleted from our
          systems.
        </Card>
        <Card title="Sharing of personal information">
          We do not share or disclose any of your personal information without
          your consent, other than for the purposes specified in this notice or
          where there is a legal requirement.
        </Card>
        <Card title="Retention of data">
          We will also retain usage data for internal analysis purposes. Usage
          data is generally retained for a shorter period, except when this data
          is used to strengthen security or improve the functionality of our
          service. We maintain your personal data until and unless you request
          account deletion, at which time we will delete all personal
          information without undue delay.
        </Card>
        <Card title="Transfer of data">
          We use a host in Germany. We may also use some products or services
          like email hosting that may be hosted in non-EU countries. Your
          consent to this privacy policy represents your agreement to that
          transfer. We will take steps to ensure that those providers use the
          necessary level of protection for your information and abide by strict
          agreements and measures set out by the globally required standard.
        </Card>
        <Card title="Links to other sites">
          Our service may contain links to other sites that are not operated by
          us. If you click on a third-party link, you will be directed to that
          third party's site. We have no control over and assume no
          responsibility for the content, privacy policies, or practices of any
          third-party sites or services.
        </Card>
        <Card title="Cookies">
          Cookies are files with a small amount of data that may include an
          anonymous unique identifier. Cookies are sent to your browser from a
          website and stored on your device. We use this information to identify
          a user and to save certain settings that are important to the account
          usage.
        </Card>
        <Card title="Contact information">
          We welcome your comments or questions about this privacy policy. You
          may submit a support ticket here.
        </Card>
        <Card title="Additional information">
          English is the main language of this website. Any other language is
          translated from that main language, and should any doubts arise when
          using any of those languages, the English version shall prevail. We
          decline any responsibility in the case of an incorrect translation.
        </Card>
        <Card title="Changes to this privacy policy">
          We may update and change this privacy policy from time to time by
          publishing a new version on our website. If we make any changes, we
          will change the last updated date below. This Privacy Policy was last
          updated on 27/11/2020.
        </Card>
      </div>
    </>
  );
};

export default Privacy;
