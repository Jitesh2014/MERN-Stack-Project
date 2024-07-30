import React from "react";

const About = () => {
  return (
    <div className="w-10/12 max-w-maxContent flex flex-col justify-between items-center gap-6 mx-auto ">
      <div className="text-center my-20">
        <h1 className="text-3xl font-semibold text-slate-700 tracking-wide">
          We Pioneered the discount broking model in India. <br />
          Now, we are beaking ground with our technologoy.
        </h1>
      </div>

      <div className="w-full h-[1px] bg-slate-300"></div>

      <div className="flex lg:flex-row flex-col justify-center gap-16 items-start p-10 mt-5  ">
        <div className="lg:w-[40%] text-slate-700 px-5">
          <p className="mb-5">
            We kick-started operations on the 15th of August, 2010 with the goal
            of breaking all barriers that traders and investors face in India in
            terms of cost, support, and technology. We named the company
            Zerodha, a combination of Zero and "Rodha", the Sanskrit word for
            barrier.
          </p>
          <p className="mb-5">
            Today, our disruptive pricing models and in-house technology have
            made us the biggest stock broker in India.
          </p>
          <p className="mb-5">
            Over 1+ Crore clients place millions of orders every day through our
            powerful ecosystem of investment platforms, contributing over 15% of
            all Indian retail trading volumes.
          </p>
        </div>

        <div className="lg:w-[40%] text-slate-700">
          <p className="mb-5">
            In addition, we run a number of popular open online educational and
            community initiatives to empower retail traders and investors.
          </p>
          <p className="mb-5">
            <span className="blue-text">Rainmatter,</span> our fintech fund and
            incubator, has invested in several fintech startups with the goal of
            growing the Indian capital markets.
          </p>
          <p className="mb-5">
            And yet, we are always up to something new every day. Catch up on
            the latest updates on our <span className="blue-text">blog</span> or
            see what the media is saying about us.
          </p>
        </div>
      </div>

      <h3 className=" text-4xl font-semibold text-center text-slate-800">
        People
      </h3>

      <div className="flex lg:flex-row flex-col justify-center lg:items-start items-center p-5">

        <div className="flex flex-col justify-center items-center gap-3 text-center">
            <img src="/media/image/nithinKamath.jpg" alt="founder_img" className=" rounded-full w-[60%]"  />

          <h2>Nithin Kamath</h2>
          <p>Founder, CEO</p>
        </div>

        <div className="lg:w-[50%]  flex flex-col justify-center items-start gap-5">
          <p >
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p >
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p >Playing basketball is his zen.</p>
          <p>
            Connect on <span className="blue-text">Homepage</span> /{" "}
            <span className="blue-text ">TradingQnA</span> /{" "}
            <span className="blue-text ">Twitter</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
