import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TelegramIcon from "@mui/icons-material/Telegram";
import YoutubeIcon from "@mui/icons-material/YouTube";
import WhatAppIcon from "@mui/icons-material/WhatsApp";
const Footer = () => {
  return (
    <div className="w-[100%] border-t bg-[#FBFBFB]">
      <footer className="w-10/12 max-w-maxContent mx-auto flex flex-col justify-between items-center mt-4 pt-5  -mb-3">
        <div className="flex lg:flex-row flex-col justify-start gap-20 items-start w-[100%]">

          <div className="flex flex-col justify-between items-start gap-6">
            <img src="/media/image/logo.svg" alt="logo" className="w-[9rem]" />
            <p className="text-base text-slate-500">
              &copy; 2010-2024, not Zerodh Broking Ltd. <br /> All right
              reserved
            </p>

            <div className="flex justify-center items-start gap-4 text-lg text-slate-500">
              <TwitterIcon className="linktags" />
              <FacebookIcon className="linktags" />
              <InstagramIcon className="linktags" />
              <LinkedInIcon className="linktags" />
            </div>

            <div className="flex justify-center items-start gap-4 text-lg text-slate-500 pt-3 border-t">
              <YoutubeIcon className="linktags" />
              <WhatAppIcon className="linktags" />
              <TelegramIcon className="linktags" />
            </div>
          </div>

          <div className=" text-slate-500 flex flex-col items-start text-[1rem] gap-1 font-semibold">
            <h2 className="text-xl font-semibold text-slate-700 mb-5">
              Company
            </h2>
            <p className="linktags">About</p>

            <p className="linktags ">Products</p>

            <p className="linktags ">Pricing</p>

            <p className="linktags">Referral programs</p>

            <p className="linktags">Carrers</p>

            <p className="linktags">Zerodha.tech</p>

            <p className="linktags">Press & media</p>

            <p className="linktags ">Zerodha cares(CSR)</p>
          </div>

          <div className=" text-slate-500 flex flex-col items-start text-[1rem] gap-1 font-semibold">
            <h2 className="text-xl font-semibold text-slate-700 mb-5">
              Contact
            </h2>

            <p className="linktags text-muted">Contact us</p>
            <p className="linktags text-muted">Support portal</p>

            <p className="linktags text-muted">Z-Connect blog</p>

            <p className="linktags text-muted">List of charges</p>

            <p className="linktags text-muted">Downloads & resourses</p>
            <p className="linktags text-muted">Vidoes</p>
            <p className="linktags text-muted">Market overview</p>
            <p className="linktags text-muted">How to file a complaint?</p>
            <p className="linktags text-muted">Status of your complaints</p>
          </div>

          <div className=" text-slate-500 flex flex-col items-start text-[1rem] gap-1 font-semibold">
            <h2 className="text-xl font-semibold text-slate-700 mb-5">
              Account
            </h2>
            <p className="linktags text-muted">Open an account</p>

            <p className="linktags text-muted">Fund transfer</p>

            <p className="linktags text-muted">60 day challenge</p>
          </div>
        </div>

        <div className="text-slate-400 text-[11px] p-1 mt-5">
          <div className="flex flex-col justify-center items-start gap-4">
            <p>
              Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI
              Registration no.: INZ000031633 CDSL/NSDL: Depository services
              through Zerodha Broking Ltd. – SEBI Registration no.:
              IN-DP-431-2019 Commodity Trading through Zerodha Commodities Pvt.
              Ltd. MCX: 46025; NSE-50001 – SEBI Registration no.: INZ000038238
              Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross,
              Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase,
              Bengaluru - 560078, Karnataka, India. For any complaints
              pertaining to securities broking please write to{" "}
              <span className="linktag">complaints@zerodha.com</span>, for DP
              related to
              <span className="linktag"> dp@zerodha.com</span>. Please ensure you
              carefully read the Risk Disclosure Document as prescribed by SEBI
              | ICF
            </p>
            <p>
              Procedure to file a complaint on
              <span className="linktag">SEBI SCORES</span>: Register on SCORES
              portal. Mandatory details for filing complaints on SCORES: Name,
              PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
              Communication, Speedy redressal of the grievances
            </p>
            <p>
              <span className="linktag">Smart Online Dispute Resolution</span> |{" "}
              <span className="linktag">Grievances Redressal Mechanism</span>
            </p>
            <p>
              Investments in securities market are subject to market risks; read
              all the related documents carefully before investing.
            </p>
            <p>
              Attention investors: 1) Stock brokers can accept securities as
              margins from clients only by way of pledge in the depository
              system w.e.f September 01, 2020. 2) Update your e-mail and phone
              number with your stock broker / depository participant and receive
              OTP directly from depository on your e-mail and/or mobile number
              to create pledge. 3) Check your securities / MF / bonds in the
              consolidated account statement issued by NSDL/CDSL every month.
            </p>
            <p>
              "Prevent unauthorised transactions in your account. Update your
              mobile numbers/email IDs with your stock brokers. Receive
              information of your transactions directly from Exchange on your
              mobile/email at the end of the day. Issued in the interest of
              investors. KYC is one time exercise while dealing in securities
              markets - once KYC is done through a SEBI registered intermediary
              (broker, DP, Mutual Fund etc.), you need not undergo the same
              process again when you approach another intermediary." Dear
              Investor, if you are subscribing to an IPO, there is no need to
              issue a cheque. Please write the Bank account number and sign the
              IPO application form to authorize your bank to make payment in
              case of allotment. In case of non allotment the funds will remain
              in your bank account. As a business we don't give stock tips, and
              have not authorized anyone to trade on behalf of others. If you
              find anyone claiming to be part of Zerodha and offering such
              services, please{" "}
              <span className="linktag">create a ticket here</span>
            </p>
          </div>

          <div className="w-[80%] mx-auto mt-3 mb-6">
            <ul className="flex lg:flex-row flex-wrap justify-between w-full text-[12px] font-semibold">
              <li className="hover:text-blue-600 transition-all duration-200 cursor-pointer">
                NSE
              </li>
              <li className="hover:text-blue-600 transition-all duration-200 cursor-pointer">
                BSE
              </li>
              <li className="hover:text-blue-600 transition-all duration-200 cursor-pointer">
                MCX
              </li>
              <li className="hover:text-blue-600 transition-all duration-200 cursor-pointer">
                Terms&Conditions
              </li>
              <li className="hover:text-blue-600 transition-all duration-200 cursor-pointer">
                Policies & Procedures
              </li>
              <li className="hover:text-blue-600 transition-all duration-200 cursor-pointer">
                Privacy Policy
              </li>
              <li className="hover:text-blue-600 transition-all duration-200 cursor-pointer">
                Disclosure
              </li>
              <li className="hover:text-blue-600 transition-all duration-200 cursor-pointer">
                for investors attention
              </li>
              <li className="hover:text-blue-600 transition-all duration-200 cursor-pointer">
                Investor charter
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
