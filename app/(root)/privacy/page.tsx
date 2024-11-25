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
          This Privacy Policy describes how join2coin.com store and deal with your user information. You can only use the service of join2coin.com if you agree to this Privacy Policy
        </p>

        <Card title="Personal Information you provide us">
          <ul className="list-disc pl-5">
            <li>
              To create an account, we will collect your username, email, password. We use this information to allow you to login and operate your account securely.
            </li>
            <li>
              Country, gender and birthday are collected to make our advertisement delivered to the right audience.
            </li>
            <li>
              Wallet address is collected to send you payment when you make a withdrawal.
            </li>
            <li>
              Phone number is collected to confirm you are from the right country and prevent the potential fake accounts.
            </li>
            <li>
              Photo and images are collected to help us to identify you are real human and prevent the potential fake accounts.This procedure is processed by Verisoul, please visit the Verisoul Privacy Policy page.
            </li>
          </ul>
        </Card>

        <Card title="Information automatically collected and use">
          <p>
            We may log usage data about your use of our website. The usage data include:
          </p>
          <ul className="list-disc pl-5">
            <li>
              IP address, country location, internet service provider, browser, and device Information, date and time of Log In.
            </li>
            <li>
              We use this information to operate, maintain our website and service. Prevent your account from unauthorized access or operation by others.
            </li>
          </ul>
        </Card>

        <Card title="Offerwalls and survey information collection and use">
          <p>
            We use third party offerwalls and survey partners to provide offers and surveys, you will need to review the privacy policy of every service you visit and use. We have no control over and assume no responsibility for that.
          </p>
        </Card>
        <Card title="Security of data">
          <p>
            We store your personal data as securely as we can on secure servers. Reasonable steps necessary to ensure your data is adequately protected, but remember that no method of transmission over the Internet is 100% secure. While we strive to use commercially acceptable means to protect your personal data, we cannot guarantee its absolute security.
          </p>
        </Card>
        <Card title="Your rights">
          <p>
            You have the right to access any personal information that join2coin processes about you.
          </p>
          <p>
            You have the right to request to delete your personal information.If you want to delete your account, please submit a ticket here.
          </p>
          <p>
            We may need to request specific information from you to help us confirm your identity and ensure your right to access your personal data. This is a security measure to ensure that personal data is not disclosed to any person who has no right to receive it.
          </p>
        </Card>

        <Card title="Children's privacy">
          <p>
            We do not knowingly collect personal information from anyone under the age of 16 or knowingly allow such persons to provide us with their personal information without parent or guardian consent. If you are under the age of 16, do not send any information about yourself to us or signup for an account.
          </p>
          <p>
            If you are a parent or guardian and you believe that your child under the age of 16 years old has provided us with information without your consent, please contact us and we will take steps to ensure that such information is deleted from our systems.
          </p>

        </Card>
        <Card title="Sharing of personal information">
          <p>
            We do not share or disclose any of your personal information without your consent, other than for the purposes specified in this notice or where there is a legal requirement.          </p>
        </Card>
        <Card title="Retention of data">
          <p>
            We will also retain usage data for internal analysis purposes. Usage data is generally retained for a shorter period of time, except when this data is used to strengthen the security or to improve the functionality of our service.
          </p>
          <p>
            We maintain your personal data until and unless you request account deletion, at which time we will delete all personal information without undue delay.
          </p>
        </Card>

        <Card title="Transfer of data">
          <p>
            We use host in Germany. We may also use some products or services like email hosting that may be hosted in non-EU countries. Your consent to this privacy policy represents your agreement to that transfer.          </p>
          <p>
            We will take steps to ensure that those providers use the necessary level of protection for your information and abide by strict agreements and measures set out by the globally required standard.
          </p>
        </Card>

        <Card title="Google Analytics">
          <p>
            We use Google Analytics to monitor and analyze how our Service is used.       </p>
          <p>
            Google Analytics is a web analytics service offered by Google that tracks and reports website traffic. Google uses the data collected to track and monitor the use of our Service. This data is shared with other Google services. Google may use the collected data to contextualize and personalize the ads of its own advertising network.          </p>
          <p>
            You can opt-out of having made your activity on the Service available to Google Analytics by installing the Google Analytics opt-out browser add-on. The add-on prevents the Google Analytics JavaScript from sharing information with Google Analytics about visits activity
          </p>
          <p>
            For more information on the privacy practices of Google, please visit the Google Privacy Terms web p
          </p>
        </Card>



      </div>
    </>
  );
};

export default Privacy;
