import React from "react";

const GetMoney = () => {
  return (
    <section className="mt-[100px] py-16 bg-[#f5fcf7ff]">
      <div className=" flex flex-col justify-center items-center pt-5 gap-3">
        <p className="text-green-500  font-bold">Get Your Money </p>
        <h1 className="font-bold text-[40px]">Redeem Your Coins Now</h1>
        <p>We Support Cash and Gift Cards</p>
        <div></div>
      </div>
      <div className="flex justify-center items-center gap-5 pb-3">
        <img src="assets/img/bank.svg" />
        <div className="flex flex-col gap-3">
          <img src="assets/img/orange.svg" />
          <img src="assets/img/fawry.svg" />
        </div>
        <div className="flex flex-col gap-3">
          <img src="assets/img/vodafone.svg" />
          <img src="assets/img/earn.svg" />
          <img src="assets/img/insta.svg" />
        </div>
        <div className="flex flex-col gap-3">
          <img src="assets/img/paypal.svg" />
          <img src="assets/img/stc.svg" />
        </div>
        <div>
          <img src="assets/img/payeer.svg" />
        </div>
      </div>
    </section>
  );
};

export default GetMoney;
