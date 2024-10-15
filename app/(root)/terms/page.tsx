import Card from "@/components/custom/Card";
import React from "react";

const page = () => {
  return (
    <>
      <div className=" p-[90px] flex flex-col gap-5">
        <h2 className="text-green-500 font-bold text-[20px] font-pacifico ">
          Our
        </h2>
        <h1 className="font-bold text-[32px]">
          Terms of
          <span className="border-b-[3px] border-green-500 mt-2"> Service</span>
        </h1>
        <p className="w-[768px] leading-[45px]">
          These Website Terms of Services are entered into by and between you
          and Adgrand Limited ("Earn Money", "EarnMoney.com" or "We"). Adgrand
          Limited is a limited liability company of Hong Kong with an operation
          address of 7/F, Woon Lee Commercial Building, 7-9 Austin Ave, Tsim Sha
          Tsui, Kowloon, Hong Kong. When registering at Earn Money, you confirm
          you have read, understood, and accepted the following Terms of
          Service. If you do not agree to any of these terms, you must not
          register.
        </p>
        <Card title="1. User Account">
          <ul>
            <li>1.1. You should be an adult to register an account.</li>
            <li>
              1.2. Account password should be kept safe, and Earn Money is not
              liable for any loss of accounts.
            </li>
            <li>
              1.3. You are not allowed to create multiple accounts. All these
              accounts will be suspended.
            </li>
            <li>
              1.4. Only one account is allowed per household. Only one account
              is allowed per device.
            </li>
            <li>
              1.5. Earn Money will not modify user account information based on
              user request. For security reasons, only users can modify the data
              in their own accounts.
            </li>
            <li>
              1.6. Any attempts to use software/robot to abuse our system (not
              limited to surfing ads) will lead to suspension of your account.
            </li>
            <li>
              1.7. Each user should use a unique payment processor account and
              cannot share it with another user.
            </li>
            <li>
              1.8. Temporary email addresses are not allowed to register an
              account.
            </li>
            <li>
              1.9. Email is the only identity to access our service. It cannot
              be changed after registration, and it is your responsibility to
              ensure your email is safe and functional.
            </li>
            <li>
              2.0. You should not use Proxy/VPN/TOR while using our service.
            </li>
            <li>
              2.1. Any accusation without proof, intimidation, threat, or
              disrespect against Earn Money or Earn Money staff/assistants may
              lead to temporary or permanent suspension of your account.
            </li>
            <li>
              2.2. Anti-bot verification will be required when the system
              detects risk within your account. Failure or refusal to complete
              the verification will result in denial of usage of your account.
            </li>
          </ul>
        </Card>

        <Card title="3. Referrals">
          <ul>
            <li>
              3.1. You are allowed to refer an unlimited number of members.
            </li>
            <li>
              3.2. You must not send unsolicited emails or force anyone into
              becoming your referral. You also cannot use third-party services
              that attempt to sell you referrals.
            </li>
          </ul>
        </Card>

        <Card title="4. Offers">
          <ul>
            <li>
              {" "}
              4.1. It is not allowed to use VPN, proxy, or other means to abuse
              the offerwalls.
            </li>
            <li>
              4.2. Earn Money uses third-party plugins to provide offerwalls. We
              have no control over whether offers are paid or not.
            </li>
            <li>
              4.3. For some risky offers, offer earnings will be pending for up
              to 45 days before being released to your balance.
            </li>
            <li>
              4.4. Offer chargeback rate is a key metric for us to evaluate your
              offer quality. If your offer chargeback is higher than 12%, all
              your payments will be held until it is lower than 12% for 15
              consecutive days. If your chargeback is higher than 20%, your
              account will be suspended.
            </li>
          </ul>
        </Card>

        <Card title="5. Payments">
          <ul>
            <li>
              5.1. Earn Money is not required to pay users who do not reach the
              minimum payout.
            </li>
            <li>
              5.2. Earn Money will try to process the payment within the first 3
              business days of the request. In case of an audit due to
              suspicious patterns, the payout may be delayed 7 days. In case of
              suspected fraud, we reserve the right to delay the payment
              indefinitely.
            </li>
            <li>
              5.3. Not every payment method is available in every country. It is
              your obligation to ensure your chosen payment method is available
              and legal in your country.
            </li>
            <li>
              5.4. Each payment will be processed based on the payment
              information provided by users. Users will be solely responsible if
              there is a failure or lost payment.
            </li>
            <li>
              5.5. Earn Money reserves the right to do anti-bot verification
              before allowing a withdrawal. Failure or refusal to complete the
              verification will result in the denial of your payment.
            </li>
          </ul>
        </Card>

        <Card title="6. Advertisement">
          <ul>
            <li>
              6.1. We do not accept sites that contain auto downloads, malicious
              code, frame breakers, gambling content, adult content, or promote
              illegal activities.
            </li>
            <li>
              6.2. We reserve the right to deny any advertisement that we do not
              deem fit to be displayed.
            </li>
          </ul>
        </Card>
        <Card title="7. Account Suspension">
          <ul>
            <li>
              7.1. We have the right to suspend accounts for valid reasons if
              you violate our Terms of Service.
            </li>
            <li>
              7.2. Your account will be reset after 90 days of inactivity. All
              your balances will be forfeited and reset to zero, and all
              referrals will be removed.
            </li>
            <li>
              7.3. An account that remains inactive for 2 years will be
              permanently deleted due to inactivity.
            </li>
            <li>
              7.4. We will not accept any appeal requests for account
              suspensions, and email inquiries will not be responded to unless a
              convincing reason is provided.
            </li>
            <li>
              7.5. If you make use of system bugs or weaknesses to make
              insane/unusual profits, the account will be suspended.
            </li>
            <li>
              7.6. If you provide fake information, including but not limited to
              country, phone number, birthday, or gender, your account will be
              suspended.
            </li>
            <li>
              7.7. Once your account is suspended, you will not be able to use
              our service again. All newly created accounts will also be
              suspended.
            </li>
          </ul>
        </Card>

        <Card title="8. Liability">
          <ul>
            <li>
              8.1. We are not responsible for any content served through
              advertisements. You use information here at your own risk.
            </li>
            <li>
              8.2. We will not be liable for any kind of delays or failures that
              are not directly related to Earn Money and therefore beyond our
              control.
            </li>
            <li>
              8.3. We reserve the right to modify the terms of service at any
              time without notice.
            </li>
          </ul>
        </Card>
      </div>
    </>
  );
};

export default page;
