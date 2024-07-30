import React from "react";
import CTAButton from "../Components/Common/CTAButton";

const Pricing = () => {
  return (
    <div className="w-11/12 max-w-fit mx-auto">
      <div className="text-center  mb-24">
        <h1 className="text-4xl font-semibold text-slate-700 mb-3">Pricing</h1>
        <p className="text-lg text-slate-600">
          Free equity investments and flat ₹20 intraday and F&O trades
        </p>
      </div>

      <div className="flex lg:flex-row flex-col lg:justify-between justify-center items-start px-20 py-24 border-t border-b mb-16">
        <div className="lg:w-[30%] text-slate-600 text-center">
          <img src="/media/image/pricing0.svg" alt="freeimg" />
          <h2 className="text-2xl font-semibold text-slate-700 mb-3">
            Free equity delivery
          </h2>
          <p>
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>

        <div className="lg:w-[30%] text-slate-600 text-center">
          <img src="\media\image\pricingF&O.svg" alt="deleveryimg" />
          <h2 className="text-2xl font-semibold text-slate-700 mb-3">
            Intraday and F&O trades
          </h2>
          <p>
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>

        <div className="lg:w-[30%] text-slate-600 text-center">
          <img src="/media/image/pricingMF.svg" alt="pricinging" />
          <h2 className="text-2xl font-semibold text-slate-700 mb-3">
            Free direct MF
          </h2>
          <p>
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>

      <div className="w-10/12 max-w-maxcontent flex flex-col mx-auto items-center justify-center gap-6 mb-16">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-semibold text-[#424242] mb-5">
            Open a Zerodha Account
          </h1>
          <p className=" text-lg text-[#424242]">
            Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
            F&O trades.
          </p>
        </div>
        <CTAButton text={"Sign up Now"} />
      </div>

      <div className="flex flex-col  justify-center lg:items-start items-center gap-10  mb-20 lg:px-20">
       
         <div className="w-[100%] flex justify-center items-center">
         <div className="text-slate-600  text-lg flex lg:flex-row flex-col text-center lg:justify-between justify-center items-start lg:w-[70%]">
            <p className="blue-text lg:w-[40%]">
              Brokerage Calculater
            </p>
            <p className="blue-text lg:w-[40%]">List of Charges</p>
          </div>
         </div>
        

        <ul className="text-[12px] text-slate-500 list-disc flex flex-col justify-center items-start gap-2">
          <li>
            Call & Trade and RMS auto-squareoff: Additional charges of ₹50 + GST
            per order.
          </li>
          <li>Digital contract notes will be sent via e-mail.</li>
          <li>
            Physical copies of contract notes, if required, shall be charged ₹20
            per contract note. Courier charges apply.
          </li>
          <li>
            For NRI account (non-PIS), 0.5% or ₹100 per executed order for
            equity (whichever is lower).
          </li>
          <li>
            For NRI account (PIS), 0.5% or ₹200 per executed order for equity
            (whichever is lower).
          </li>
          <li>
            If the account is in debit balance, any order placed will be charged
            ₹40 per executed order instead of ₹20 per executed order.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Pricing;
