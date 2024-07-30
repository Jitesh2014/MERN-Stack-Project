import React from "react";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import CTAButton from "../Components/Common/CTAButton";

const Product = () => {
  return (
    <div className="w-11/12 mx-auto ">
      {/* Hero section  */}
      <div className="p-5 text-center  mb-20 text-slate-600 ">
        <h1 className="text-5xl font-semibold  text-slate-700 mb-5">
          Technology
        </h1>
        <p className="text-xl mb-5">
          Sleek, modern, and intuitive trading platforms
        </p>
        <p className="">
          Check out our{" "}
          <span className="blue-text">investment offerings →</span>
        </p>
      </div>

      {/* hero bttom border  <div className='w-full h-[0.5px] bg-slate-200 my-16'></div>  */}

      {/* section 01 */}

      <div className=" flex lg:flex-row flex-col justify-center items-start gap-5 border-t pt-20">
        <div className="lg:w-[50%]">
          <img src="/media/image/kite.png" alt="kite_img" />
        </div>

        <div className="lg:w-[40%] flex flex-col justify-center  items-start gap-3 lg:py-10 lg:px-20">
          <h2 className="text-3xl font-semibold text-slate-700">Kite</h2>
          <p className=" text-lg text-slate-700">
            Our ultra-fast flagship trading platform with streaming market data,
            advanced charts, an elegant UI, and more. Enjoy the Kite experience
            seamlessly on your Android and iOS devices.
          </p>

          <div className=" flex justify-start items-center gap-6 mt-4 mb-3 btn-group">
            <button className="blueBtn">
              {" "}
              Try Demo <ArrowRightAltIcon />
            </button>
            <button className="blueBtn">
              Learn more <ArrowRightAltIcon />
            </button>
          </div>
          <div className="flex justify-start gap-6 items-start w-[100%]">
            <img
              src="/media/image/googlePlayBadge.svg"
              alt="googleplay"
              className="w-[45%] cursor-pointer hover:opacity-80 transition-all duration-200"
            />
            <img
              src="/media/image/appstoreBadge.svg"
              alt="appstore"
              className="w-[40%] cursor-pointer hover:opacity-80 transition-all duration-200"
            />
          </div>
        </div>
      </div>

      {/* section 02 */}
      <div className=" flex lg:flex-row flex-col justify-center items-center  lg:gap-5 lg:py-10 lg: lg:px-20 mt-20 lg:mt-0">
        <div className="lg:w-[40%] lg:h-[100%] flex flex-col justify-center  items-start gap-3 lg:-mt-24 lg:px-10">
          <h2 className="text-3xl font-semibold text-slate-700">Console</h2>
          <p className=" text-lg text-slate-700">
            The central dashboard for your Zerodha account. Gain insights into
            your trades and investments with in-depth reports and
            visualisations.
          </p>
          <div className="flex justify-between items-center mt-4 mb-3 btn-group">
            <button className="blueBtn">
              Learn more <ArrowRightAltIcon />
            </button>
          </div>
        </div>

        <div className="lg:w-[60%]">
          <img src="/media/image/console.png" alt="kite_img" />
        </div>
      </div>

      {/* section 03 */}
      <div className=" flex lg:flex-row flex-col-reverse justify-center items-start lg:gap-5 gap-20 lg:mb-0 mb-20">
        <div className="lg:w-[50%]">
          <img src="/media/image/coin.png" alt="kite_img" />
        </div>

        <div className="lg:w-[40%] flex flex-col justify-center  items-start gap-3 lg:py-10 lg:px-20 ">
          <h2 className="text-3xl font-semibold text-slate-700">Coin</h2>
          <p className=" text-lg text-slate-700">
            Buy direct mutual funds online, commission-free, delivered directly
            to your Demat account. Enjoy the investment experience on your
            Android and iOS devices.
          </p>

          <div className=" flex justify-start items-center gap-6 mt-4 mb-3 btn-group">
            <button className="blueBtn">
              {" "}
              Coin <ArrowRightAltIcon />
            </button>
          </div>
          <div className="flex justify-start gap-6 items-start w-[100%]">
            <img
              src="/media/image/googlePlayBadge.svg"
              alt="googleplay"
              className="w-[45%] cursor-pointer hover:opacity-80 transition-all duration-200"
            />
            <img
              src="/media/image/appstoreBadge.svg"
              alt="appstore"
              className="w-[40%] cursor-pointer hover:opacity-80 transition-all duration-200"
            />
          </div>
        </div>
      </div>

      {/* section 04 */}
      <div className=" flex lg:flex-row flex-col justify-center items-center lg:gap-20  lg:py-10 lg:px-20 lg:mb-0 mb-20">
        <div className="lg:w-[40%] lg:h-[100%] flex flex-col justify-center  items-start gap-3 lg:px-10 ">
          <h2 className="text-3xl font-semibold text-slate-700">
            Kite Connect API
          </h2>
          <p className=" text-lg text-slate-700">
            Build powerful trading platforms and experiences with our super
            simple HTTP/JSON APIs. If you are a startup, build your investment
            app and showcase it to our clientbase.
          </p>
          <div className="flex justify-between items-center mt-4 mb-3 btn-group">
            <button className="blueBtn">
              Kite Connect <ArrowRightAltIcon />
            </button>
          </div>
        </div>

        <div className="lg:w-[60%]">
          <img src="/media/image/kiteconnect.png" alt="kiteconenct_img" />
        </div>
      </div>

      {/* section 05 */}
      <div className=" flex lg:flex-row flex-col-reverse justify-center items-center lg:gap-5 gap-20 mb-20">
        <div className="lg:w-[50%]">
          <img src="/media/image/varsity.png" alt="kite_img" />
        </div>

        <div className="lg:w-[40%] flex flex-col justify-center  items-start gap-3 lg:py-10 lg:px-20">
          <h2 className="text-3xl font-semibold text-slate-700">
            Varsity mobile
          </h2>
          <p className=" text-lg text-slate-700">
            An easy to grasp, collection of stock market lessons with in-depth
            coverage and illustrations. Content is broken down into bite-size
            cards to help you learn on the go
          </p>

          <div className=" flex justify-start items-center gap-6 mt-4 mb-3 btn-group">
            <button className="blueBtn">
              {" "}
              Try Demo <ArrowRightAltIcon />
            </button>
            <button className="blueBtn">
              Learn more <ArrowRightAltIcon />
            </button>
          </div>
          <div className="flex justify-start gap-6 items-start w-[100%]">
            <img
              src="/media/image/googlePlayBadge.svg"
              alt="googleplay"
              className="w-[45%] cursor-pointer hover:opacity-80 transition-all duration-200"
            />
            <img
              src="/media/image/appstoreBadge.svg"
              alt="appstore"
              className="w-[40%] cursor-pointer hover:opacity-80 transition-all duration-200"
            />
          </div>
        </div>
      </div>

      <div className="text-center text-xl  mb-24">
        Want to know more about our technology stack? Check out the{" "}
        <span className="blue-text">Zerodha.tech</span> blog.
      </div>

      {/* <Universe /> */}

      <div className="flex flex-col justify-center items-center gap-6 mb-20 text-slate-700">
        <h2 className="text-4xl font-semibold">The Zerodha Universe</h2>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="flex flex-col justify-center items-center gap-6">
          <div className="flex lg:flex-row flex-col justify-center items-center lg:gap-0 gap-12 py-10 px-20 ">
            <div className="flex flex-col justify-center items-center gap-3 lg:w-[30%] w-[60%] cursor-pointer hover:opacity-80 transition-all duration-200">
              <img
                src="/media/image/smallcaseLogo.png"
                alt="smallcaselLogo"
                className="w-[60%] "
              />
              <p className="text-sm text-slate-500 font-semibold">
                Tharmetic platform
              </p>
            </div>

            <div className="flex flex-col justify-center items-center gap-3 lg:w-[30%] w-[60%] cursor-pointer hover:opacity-80 transition-all duration-200">
              <img
                src="/media/image/streakLogo.png"
                alt="streakLogo"
                className="w-[50%] "
              />
              <p className="text-sm text-slate-500 font-semibold">
                Algo & strategy platform
              </p>
            </div>

            <div className="flex flex-col justify-center items-center gap-3 lg:w-[30%] w-[60%] cursor-pointer hover:opacity-80 transition-all duration-200">
              <img
                src="/media/image/sensibullLogo.svg"
                alt="smensibullLogo"
                className="w-[60%] "
              />
              <p className="text-sm text-slate-500 font-semibold">
                Option trading platform
              </p>
            </div>
          </div>

          <div className="flex lg:flex-row flex-col justify-center items-center  lg:gap-0 gap-12 py-10 px-20 ">
            <div className="flex flex-col justify-center items-center gap-3 lg:w-[30%] w-[50%] cursor-pointer hover:opacity-80 transition-all duration-200">
              <img
                src="/media/image/zerodhaFundhouse.png"
                alt="szerodhaFundhouse"
                className="w-[60%] "
              />
              <p className="text-sm text-slate-500 font-semibold">
                Asset Management
              </p>
            </div>

            <div className="flex flex-col justify-center items-center gap-3 lg:w-[30%] cursor-pointer hover:opacity-80 transition-all duration-200">
              <img
                src="https://zerodha.com/static/images/partners/tijori.svg"
                alt="tijori"
                className="w-[50%] "
              />
              <p className="text-sm text-slate-500 font-semibold">
                Fundamental research platform
              </p>
            </div>

            <div className="flex flex-col justify-center items-center gap-3 lg:w-[30%] w-[50%] cursor-pointer hover:opacity-80 transition-all duration-200">
              <img
                src="https://zerodha.com/static/images/products/ditto-logo.png"
                alt="ditto"
                className="w-[60%] "
              />
              <p className="text-sm text-slate-500 font-semibold">Insurence</p>
            </div>
          </div>
        </div>

        <CTAButton text={"Sign up Now"} />
      </div>
    </div>
  );
};

export default Product;
