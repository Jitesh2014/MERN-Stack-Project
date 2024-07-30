import React from "react";
import CTAButton from "../Components/Common/CTAButton";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { Link } from "react-router-dom";


const Home = () => {
  return (
    <div>
      {/* section 01  */}
      <div className="w-11/12 max-w-maxcontent flex flex-col mx-auto items-center justify-center gap-6">
        <img
          src="/media/image/homeHero.png"
          alt="heroimg"
          className="w-[60%] mb-12"
        />

        <div className="text-center mb-8">
          <h1 className="text-5xl font-semibold text-[#424242] mb-5">
            Invest in everything
          </h1>
          <p className=" text-2xl text-[#424242] ">
            Online platform to invest in stocks, derivatives, mutual funds, and
            more
          </p>
        </div>
        <CTAButton text={"Sign up Now"} />
      </div>

      {/* section 02  */}
      <div className="w-11/12 max-w-maxcontent flex lg:flex-row flex-col justify-center items-start gap-20 mx-auto my-24">
        <img
          src="https://zerodha.com/static/images/largest-broker.svg"
          alt="rewardimg"
          className="lg:w-[40%]  p-5"
        />

        <div className="flex flex-col justify-center gap-6 items-start lg:w-[40%] p-5 text-slate-700 ">
          <h1 className="text-[2.1rem] font-semibold ">
            Largest Stock broker in india
          </h1>
          <p className="">
            2+milion Zerodha clients contrubute to over 15% of all retail order
            volumes in india daily and investing in:
          </p>

          <div className="flex justify-center items-start gap-16 text-slate-700">
            <ul className="flex flex-col items-start gap-4 list-disc p-4">
              <li>
                <p>Futures and Option</p>
              </li>
              <li>
                <p>Commodity derivatives</p>
              </li>
              <li>
                <p>Currency derivatives</p>
              </li>
            </ul>

            <ul className="flex flex-col items-start gap-4 list-disc p-4">
              <li>
                <p>Stock & IPOs</p>
              </li>
              <li>
                <p>Direct mutual funds</p>
              </li>
              <li>Bonds and Gold</li>
            </ul>
          </div>

          <img
            src="/media/image/pressLogos.png"
            alt="pressLogoimg"
            className="w-fit"
          />
        </div>
      </div>

      {/* section 03 */}
      <div className="w-11/12 max-w-maxcontent flex lg:flex-row flex-col justify-center items-start gap-10 mx-auto">
        <div className="flex flex-col justify-center gap-10 items-start lg:w-[40%] p-16 text-slate-700 ">
          <h1 className="font-semibold text-4xl">Trust with confidence</h1>

          <div>
            <h2 className="font-semibold text-2xl">Customer-first always</h2>
            <p className="">
              That's why 1.3+ crore Customer trust Zerodha with ₹3.5+ lakh
              crores worth of equity investments{" "}
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-2xl">No span or gimmicks</h2>
            <p className="">
              No gimmicks span , "gamification", or annoying push notification
              High quality apps that you use at your pace, the way you like
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-2xl">The Zerodha universe</h2>
            <p className="">
              Not just an app, but whole ecosystem Our investments in 30+
              fintech startup offer you tailored services specific to you needs
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-2xl">Do better with money</h2>
            <p className="">
              With initiatives like Nudge ang kill switch, we dont just
              facilitate transaction, but actively help you do better with your
              money
            </p>
          </div>
        </div>

        <div className="lg:w-[50%]">
          <img
            src="/media/image/ecosystem.png"
            alt="ecosystem_img"
            className="p-5"
          />

          <div className="flex justify-center items-center gap-12 font-semibold ">
            <Link to={"/login"}>
              <button className="text-blue-500 hover:text-gray-700 transition-all duration-200 ">
                Explore products <ArrowRightAltIcon />{" "}
              </button>
            </Link>
            <Link to={"/signup"}>
              <button className="text-blue-500 hover:text-gray-700 transition-all duration-200 ">
                Try Kite <ArrowRightAltIcon />
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* section 04 */}
      <div className="w-10/12 max-w-maxcontent flex lg:flex-row flex-col justify-between items-start gap-10 lg:p-20 mx-auto lg:mt-0 mt-24">
        <div className="lg:w-[45%] text-slate-700 flex justify-between items-start flex-col  gap-8">
          <h1 className="text-4xl font-semibold">Unbeatable pricing</h1>
          <p className="">
            We pioneered the concept of discount broking and price transparency
            in india. Flat fees and no hidden charges.
          </p>
          <button className="text-blue-600 font-semibold hover:text-slate-700 transition-all duration-200 ">
            See Pricing <ArrowRightAltIcon />
          </button>
        </div>

        <div className=" lg:w-[50%] w-fit border flex sm:flex-row flex-col justify-evenly items-center mx-auto">
          <div className=" lg:w-fit lg:h-fit  md:w-[100%] border-r">
            <div className=" flex flex-col justify-center items-center pr-6 m-5  gap-6 text-center text-slate-700 ">
              <h2 className="text-5xl font-semibold">₹0</h2>
              <p className="text">
                Free equity delevery and <br />
                direct mutual funds
              </p>
            </div>
          </div>

          <div className=" lg:w-fit lg:h-fit md:w-[100%]">
            <div className=" flex flex-col justify-center items-center gap-6  m-5 text-slate-700  ">
              <h2 className="text-5xl font-semibold">₹20</h2>
              <p className="text p-3">Intraday and F&O</p>
            </div>
          </div>
        </div>
      </div>

      {/* section 05 */}
      <div className="w-11/12 max-w-maxcontent flex lg:flex-row flex-col justify-center items-center gap-10 mx-auto lg:mt-0 mt-20 mb-24">
   
          <div className="lg:w-[45%] ">
            <img
              src="/media/image/education.svg"
              alt="varsity_img"/>
          </div>

          <div className="lg:w-[45%] text-slate-700 flex flex-col justify-between items-start gap-6 p-10">
            <h1 className="text-2xl font-semibold"> Free and open market education</h1>
            <p className="">
              Versity,the largest online stock market education book in the
              world covering everything from the basics to advanced trading
            </p>
            <Link to={"/signup"} className="text-blue-600 font-semibold hover:text-slate-700 transition-all duration-200 ">
              Versity <ArrowRightAltIcon />
            </Link>

            <p>
              TradingQ&A the most active trading and investment community in
              india for all you market related queries
            </p>
            <Link to={"/login"} className="text-blue-600 font-semibold hover:text-slate-700 transition-all duration-200 ">
              TradingQ&A <ArrowRightAltIcon />
            </Link>
          </div>

      </div>
     
        {/* last open account section  */}
      <div className="w-10/12 max-w-maxcontent flex flex-col mx-auto items-center justify-center gap-6 mb-16">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-semibold text-[#424242] mb-5">
            Open a Zerodha Account
          </h1>
          <p className=" text-lg text-[#424242]">
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.
          </p>
        </div>
        <CTAButton text={"Sign up Now"} />
      </div>

    </div>
  );
};

export default Home;
