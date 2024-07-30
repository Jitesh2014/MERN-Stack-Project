import React from "react";
import { IoMdSearch } from "react-icons/io";
import { GoPlusCircle } from "react-icons/go";
import { FiUser } from "react-icons/fi";
import { FiBarChart2 } from "react-icons/fi";
import { LuCreditCard } from "react-icons/lu";
import { GiGlassBall } from "react-icons/gi";
import { SiCircle } from "react-icons/si";


const Support = () => {
  return (
    <>
      <div className="bg-[#387ED1]">
        <div className=" w-11/12 text-white  -mt-[5.3rem] mx-auto mb-10">
          <div className="flex justify-between items-center py-12 px-5 ">
            <div className="font-semibold text-xl">Support Portal</div>
            <div className="text-lg border-b">Track ticket</div>
          </div>

          <div className="flex lg:flex-row flex-col justify-center gap-6 items-center lg:w-[100%] pb-24">
            <div className="lg:w-[60%] flex flex-col justify-center items-start px-6 gap-6">
              <h2 className=" text-2xl">
                Search for an answer or browse help topics to create a ticket
              </h2>

              <div className="w-[100%] flex justify-between items-center">
                <input
                  type="text"
                  placeholder="Eg: how do i activate F&Q, Why my order getting rejected... "
                  className="w-[100%] p-5 h-14 rounded-s-sm outline-none text-slate-600"
                />
                <span className=" bg-white h-14 flex justify-center items-center px-3 text-slate-500 text-3xl rounded-e-sm border-none ">
                  <IoMdSearch />
                </span>
              </div>

              <div className="flex justify-start items-center gap-6">
                <p className=" border-b">Track account opening</p>
                <p className=" border-b">Track segment activation</p>
                <p className=" border-b">Intraday margins</p>
              </div>

              <p className=" border-b">Kite user manual</p>
            </div>

            <div className="lg:w-[35%] lg:-mt-12">
              <h3 className="text-2xl font-[500] mb-6">Featured</h3>
              <ul className="list-decimal pl-10 underline">
                <li className=" mb-2 cursor-pointer">
                  Current Takeovers and Delisting - July 2024
                </li>
                <li className=" mb-2 cursor-pointer">
                  Surveillance measure on scrips - July 2024
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="w-11/12 mx-auto mb-24 px-10">
        <h2 className="text-xl font-normal mb-12 text-slate-700">
          To create a ticket, select a relevant topic
        </h2>

        <div className="flex lg:flex-row flex-col lg:justify-center items-start gap-12 w-[100%]">

            <div className="flex flex-col justify-center items-start gap-12">

              <div className="">
                <div className="flex justify-start items-center gap-2 mb-5">
                  <GoPlusCircle fontSize={24} />
                  <h2 className="font-normal text-xl">Account Opening</h2>
                </div>

                <ul className="flex flex-col justify-center items-start gap-3 text-sm px-8">
                  <li className="text-[#387ED1] hover:text-slate-600 transition-all duration-200 cursor-pointer">
                    Getting Started
                  </li>
                  <li className="text-[#387ED1] hover:text-slate-600 transition-all duration-200 cursor-pointer">
                    Online
                  </li>
                  <li className="text-[#387ED1] hover:text-slate-600 transition-all duration-200 cursor-pointer">
                    Ofline
                  </li>
                  <li className="text-[#387ED1] hover:text-slate-600 transition-all duration-200 cursor-pointer">
                    Charges
                  </li>
                  <li className="text-[#387ED1] hover:text-slate-600 transition-all duration-200 cursor-pointer">
                    Company , Partnership ans HUF
                  </li>
                  <li className="text-[#387ED1] hover:text-slate-600 transition-all duration-200 cursor-pointer">
                    No Resident indian (NRI)
                  </li>
                </ul>
              </div>

              <div className="">
                <div className="flex justify-start items-center gap-2 mb-5">
                  <LuCreditCard fontSize={24} />
                  <h2 className="font-normal text-xl">Funds</h2>
                </div>

                <ul className="flex flex-col justify-center items-start gap-3 text-sm px-8">
                  <li className="text-[#387ED1] hover:text-slate-600 transition-all duration-200 cursor-pointer">
                    Fund withdrawal
                  </li>
                  <li className="text-[#387ED1] hover:text-slate-600 transition-all duration-200 cursor-pointer">
                    Adding funds
                  </li>
                  <li className="text-[#387ED1] hover:text-slate-600 transition-all duration-200 cursor-pointer">
                    Adding bank accounts
                  </li>
                  <li className="text-[#387ED1] hover:text-slate-600 transition-all duration-200 cursor-pointer">
                    eMandates
                  </li>

                </ul>
              </div>

            </div>

            <div className="flex flex-col justify-center items-start gap-12">

              <div className="">
                <div className="flex justify-start items-center gap-2 mb-5">
                  <FiUser fontSize={24} />
                  <h2 className="font-normal text-xl">Your Zerodha Account</h2>
                </div>

                <ul className="flex flex-col justify-center items-start gap-3 text-sm px-8">
                  <li className="text-[#387ED1] hover:text-slate-600 transition-all duration-200 cursor-pointer">
                    Login credentials
                  </li>
                  <li className="text-[#387ED1] hover:text-slate-600 transition-all duration-200 cursor-pointer">
                    Your Profile
                  </li>
                  <li className="text-[#387ED1] hover:text-slate-600 transition-all duration-200 cursor-pointer">
                    Account modification and segement addtion
                  </li>
                  <li className="text-[#387ED1] hover:text-slate-600 transition-all duration-200 cursor-pointer">
                    CMR & DP ID
                  </li>
                  <li className="text-[#387ED1] hover:text-slate-600 transition-all duration-200 cursor-pointer">
                    Nomination
                  </li>

                  <li className="text-[#387ED1] hover:text-slate-600 transition-all duration-200 cursor-pointer">
                    Transfer and conversion of shares
                  </li>
                </ul>
              </div>

              <div className="">
                <div className="flex justify-start items-center gap-2 mb-5">
                  <GiGlassBall fontSize={24} />
                  <h2 className="font-normal text-xl">Coin</h2>
                </div>

                <ul className="flex flex-col justify-center items-start gap-3 text-sm px-8">
                  <li className="text-[#387ED1] hover:text-slate-600 transition-all duration-200 cursor-pointer">
                    Understanding mutual funds and Coin
                  </li>
                  <li className="text-[#387ED1] hover:text-slate-600 transition-all duration-200 cursor-pointer">
                    Coin app
                  </li>
                  <li className="text-[#387ED1] hover:text-slate-600 transition-all duration-200 cursor-pointer">
                    Coin web
                  </li>
                  <li className="text-[#387ED1] hover:text-slate-600 transition-all duration-200 cursor-pointer">
                    Transactions and reports
                  </li>
                  <li className="text-[#387ED1] hover:text-slate-600 transition-all duration-200 cursor-pointer">
                    National Pension Scheme (NPS)
                  </li>
                </ul>
              </div>

            </div>

            <div className="flex flex-col justify-center items-start gap-12">

              <div className="">
                <div className="flex justify-start items-center gap-2 mb-5">
                  <FiBarChart2 fontSize={24} />
                  <h2 className="font-normal text-xl">Trading and Market</h2>
                </div>

                <ul className="flex flex-col justify-center items-start gap-3 text-sm px-8">
                  <li className="text-[#387ED1] hover:text-slate-600 transition-all duration-200 cursor-pointer">
                    Trading F&Q
                  </li>
                  <li className="text-[#387ED1] hover:text-slate-600 transition-all duration-200 cursor-pointer">
                    Kite
                  </li>
                  <li className="text-[#387ED1] hover:text-slate-600 transition-all duration-200 cursor-pointer">
                    Margins
                  </li>
                  <li className="text-[#387ED1] hover:text-slate-600 transition-all duration-200 cursor-pointer">
                    Product and order type
                  </li>
                  <li className="text-[#387ED1] hover:text-slate-600 transition-all duration-200 cursor-pointer">
                    Corporate and action
                  </li>
                  <li className="text-[#387ED1] hover:text-slate-600 transition-all duration-200 cursor-pointer">
                    Kite features
                  </li>
                </ul>
              </div>

              <div className="">
                <div className="flex justify-start items-center gap-2 mb-5">
                  <SiCircle fontSize={24} />
                  <h2 className="font-normal text-xl">Console</h2>
                </div>

                <ul className="flex flex-col justify-center items-start gap-3 text-sm px-8">
                  <li className="text-[#387ED1] hover:text-slate-600 transition-all duration-200 cursor-pointer">
                    IPO
                  </li>
                  <li className="text-[#387ED1] hover:text-slate-600 transition-all duration-200 cursor-pointer">
                    Portfolio
                  </li>
                  <li className="text-[#387ED1] hover:text-slate-600 transition-all duration-200 cursor-pointer">
                    Funds statement
                  </li>
                  <li className="text-[#387ED1] hover:text-slate-600 transition-all duration-200 cursor-pointer">
                    Profile
                  </li>
                  <li className="text-[#387ED1] hover:text-slate-600 transition-all duration-200 cursor-pointer">
                    Reports
                  </li>
                  <li className="text-[#387ED1] hover:text-slate-600 transition-all duration-200 cursor-pointer">
                    Referral program
                  </li>
                </ul>
              </div>

            </div>

        </div>
      </div>
    </>
  );
};

export default Support;
