import React from "react";

const HiddenCompont = () => {
  const ComponentDetail = [
    {
      id: 1,
      image: "https://zerodha.com/static/images/products/kite-logo.svg",
      heading: "Kite",
      text: "Trading platform",
    },
    {
      id: 2,
      image: "https://zerodha.com/static/images/products/console.svg",
      heading: "Console",
      text: "Backoffice",
    },
    {
      id: 3,
      image: "https://zerodha.com/static/images/products/kite-connect.svg",
      heading: "Kite Connect",
      text: "Trading APIs",
    },
    {
      id: 4,
      image: "https://zerodha.com/static/images/products/coin.svg",
      heading: "Coin",
      text: "Mutual fund",
    },
  ];
  return (
    <div className="w-[40rem] border rounded-md flex flex-col bg-white justify-between gap-12 p-6 ">
      <div className="flex justify-between items-start ">
        {ComponentDetail.map((item) => (
          <div
            key={item.id}
            className="flex flex-col justify-center items-center gap-1 text-gray-500 cursor-pointer hover:opacity-80 hover:hover:text-blue-600 transition-all duration-200 "
          >
            <img src={item.image} alt="" />
            <p className=" font-semibold text-md ">{item.heading}</p>
            <p className="text-gray-500 text-sm">{item.text}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-start gap-12">
        <div>
          <h2 className="text-md mb-5  text-gray-600 font-semibold">
            Utilities
          </h2>
          <ul className="flex flex-col justify-center gap-1 text-sm text-slate-600 ">
            <li className="cursor-pointer hover:opacity-80 hover:hover:text-blue-600 transition-all duration-200">Brokerage Calculator</li>
            <li className="cursor-pointer hover:opacity-80 hover:hover:text-blue-600 transition-all duration-200">Margin Calculator</li>
            <li className="cursor-pointer hover:opacity-80 hover:hover:text-blue-600 transition-all duration-200">Holiday Calendar</li>
            <li className="cursor-pointer hover:opacity-80 hover:hover:text-blue-600 transition-all duration-200">Market</li>
          </ul>
        </div>
        <div>
          <h2 className="text-md text-gray-600 mb-5 font-semibold">Updates</h2>
          <ul className="flex flex-col justify-center gap-1 text-sm text-slate-600">
            <li className="cursor-pointer hover:opacity-80 hover:hover:text-blue-600 transition-all duration-200">Z-connect blog</li>
            <li className="cursor-pointer hover:opacity-80 hover:hover:text-blue-600 transition-all duration-200">Pulse News</li>
            <li className="cursor-pointer hover:opacity-80 hover:hover:text-blue-600 transition-all duration-200">Circular /Bulletin</li>
            <li className="cursor-pointer hover:opacity-80 hover:hover:text-blue-600 transition-all duration-200">IPOs</li>
          </ul>
        </div>
        <div>
          <h2 className="text-md mb-5 text-gray-600 font-semibold ">Education</h2>
          <div className="flex justify-center gap-6">
            <div className="flex justify-center items-center flex-col text-sm gap-2 text-slate-600 cursor-pointer hover:opacity-80 hover:hover:text-blue-600 transition-all duration-200">
              <img
                src="https://zerodha.com/static/images/products/varsity.png"
                alt=""
              />
              <p>Versity</p>
            </div>
            <div className="flex justify-center items-center flex-col text-sm gap-2 text-slate-600 cursor-pointer hover:opacity-80 hover:hover:text-blue-600 transition-all duration-200">
              <img
                src="https://zerodha.com/static/images/products/tqna.png"
                alt=""
              />
              <p>Trading Q&A</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HiddenCompont;
