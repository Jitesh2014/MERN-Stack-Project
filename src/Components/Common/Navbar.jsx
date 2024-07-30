import React, { useState } from "react";
import IconComponent from "../Menu-barIcon/IconComponent";
import { Link } from "react-router-dom";
import HiddenCompont from "../HiddenCompont";
import { Squash as Hamburger } from "hamburger-react";

const Navbar = () => {
  
   const [selectedlink, setSelectedLink] =useState(null);

   const [barClick, setBarkClick] = useState(false);
   const [barClick2, setBarkClick2] = useState(false);
  

   function handleSelected (index){
         setSelectedLink(index);
   }
   

  return (
    <>
      <div className="mx-auto border-b border-r-zinc-600 mb-20 fixed z-50 bg-white w-[100vw]">
        <nav className="w-11/12 h-16 max-w-maxContent flex items-center justify-between gap-6 px-4 mx-auto ">
          <div>
            <Link to={"/"}>
              <img src="/media/image/logo.svg" alt="logo" className="w-[9rem]" />
            </Link>
          </div>

          <div className="lg:flex items-center justify-between gap-10 p-5 relative hidden">

            <ul className="lg:flex justify-between hidden gap-10 items-center text-sm text-slate-500">
              <li>
                <Link to={"/signup"}><span className="hover:text-blue-600 transition-all duration-200">Signup</span></Link>
              </li>
              <li>
                <Link to={"/Login"} ><span className="hover:text-blue-600 transition-all duration-200">Login</span></Link>
              </li>

              <li>
                <Link to={"/product"} ><span className="hover:text-blue-600 transition-all duration-200">Products</span></Link>
              </li>
              <li>
                <Link to={"/pricing"} ><span className="hover:text-blue-600 transition-all duration-200">Pricing</span></Link>
              </li>
              <li>
                <Link to={"/about"} ><span className="hover:text-blue-600 transition-all duration-200">About</span></Link>
              </li>
              <li>
                <Link to={"/support"}><span className="hover:text-blue-600 transition-all duration-200">Support</span> </Link>
              </li>
            </ul>
            <button 
              onClick={() => setBarkClick(!barClick)}
              className="text-gray-700 text-2xl  "
            >
              <Hamburger size={24} />
            </button>
            {barClick && (
              <>
                <div className="bg-white absolute -left-[10%]  top-[4.6rem] shadow-lg zindex transition-all duration-200">
                  <HiddenCompont/>
                </div>
              </>
            )}
          </div>

          <div className="lg:hidden flex relative">
            <button
              className="text-gray-800"
              onClick={() => setBarkClick2(!barClick2)}
            >
              <Hamburger size={24} />
            </button>
            {barClick2 && (
              <div className="bg-white absolute  top-12 -right-10 zindex w-fit shadow-lg transition-all duration-200">
                <IconComponent />
              </div>
            )}
          </div>
        </nav>
      </div>
      <div className="w-[100vw] h-[150px]"></div>
    </>
  );
};

export default Navbar;
