import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
const IconComponent = () => {
  const [selectedlink, setSelectedLink] =useState(null);

  function handleSelected (index){
        setSelectedLink(index);
  }

  return (
    <div className=" flex justify-between w-[90vw] sm:w-[60vw] md:justify-evenly mx-auto bg-white px-6">

    <div className="flex flex-col justify-center gap-6">
      <div className="flex flex-col justify-center gap-6 text-gray-500">
      <Link to={"/signup"} onClick={()=>handleSelected(0)} className={`${selectedlink === 0 ? "text-blue-500":"text-slate-500"}`}><span className="hover:text-blue-600 transition-all duration-200">Signup</span></Link>

      <Link to={"/product"} onClick={()=>handleSelected(2)} className={`${selectedlink === 2 ? "text-blue-500":"text-slate-500"}`}><span className="hover:text-blue-600 transition-all duration-200">Products</span></Link>

      <Link to={"/support"} onClick={()=>handleSelected(4)} className={`${selectedlink === 4 ? "text-blue-500":"text-slate-500"}`}> <span className="hover:text-blue-600 transition-all duration-200">Support</span> </Link>

      </div>
      <div className="flex flex-col justify-between items-start gap-3 ">
        <div className="flex justify-center items-center gap-2 cursor-pointer hover:opacity-80 hover:hover:text-blue-600 transition-all duration-200">
          <img
            src="https://zerodha.com/static/images/products/kite-logo.svg"
            alt="" width={50}
          />
          <p className="text-gray-600">Kit</p>
        </div>

        <div className="flex justify-center items-center gap-2 cursor-pointer hover:opacity-80 hover:hover:text-blue-600 transition-all duration-200">
          <img
            src="https://zerodha.com/static/images/products/kite-connect.svg"
            alt="" width={50}
          />
          <p className="text-gray-600">Kit connect</p>
        </div>
        <div className="flex justify-center items-center gap-3 p-2 cursor-pointer hover:opacity-80 hover:hover:text-blue-600 transition-all duration-200">
          <img
            src="https://zerodha.com/static/images/products/varsity.png"
            alt="" width={35}
          />
          <p className="text-gray-600">Varsity</p>
        </div>
      </div>
    </div>

    <div className="flex flex-col justify-start gap-6">
      <div className="flex flex-col justify-center gap-6 mb-12 text-slate-500">
      <Link to={"/about"} onClick={()=>handleSelected(1)} className={`${selectedlink === 1 ? "text-blue-500":"text-slate-500"} `}><span className="hover:text-blue-600 transition-all duration-200">About</span></Link>
        <Link to={"/pricing"} onClick={()=>handleSelected(3)} className={`${selectedlink === 3 ? "text-blue-500":"text-slate-500"}`}><span className="hover:text-blue-600 transition-all duration-200">Pricing</span></Link>
      </div>
      <div className="flex flex-col justify-between items-start gap-3 ">
        <div className="flex justify-center items-center gap-2 cursor-pointer hover:opacity-80 hover:hover:text-blue-600 transition-all duration-200">
          <img
            src="https://zerodha.com/static/images/products/console.svg"
            alt="" width={50}
          />
          <p className="text-gray-600">Console</p>
        </div>
        
        <div className="flex justify-center items-center gap-2 cursor-pointer hover:opacity-80 hover:hover:text-blue-600 transition-all duration-200">
          <img
            src="https://zerodha.com/static/images/products/coin.svg"
            alt="" width={50}
          />
          <p className="text-gray-600">Coin</p>
        </div>
        <div className="flex justify-center items-center gap-3 p-2 cursor-pointer hover:opacity-80 hover:hover:text-blue-600 transition-all duration-200">
          <img
            src="https://zerodha.com/static/images/products/tqna.png"
            alt="" width={35}
          />
          <p className="text-gray-600">Trading Q&A</p>
        </div>
      </div>
    </div>


  </div>
  );
};

export default IconComponent;
