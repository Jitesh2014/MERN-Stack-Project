import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { FaArrowRight } from "react-icons/fa6";
import { toast } from "react-hot-toast";

        // "https://mern-stack-project-hyv5.onrender.com/auth",
const Welcome = () => {
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies([]);
  const [username, setUsername] = useState("");
  useEffect(() => {
    const verifyCookie = async () => {
      if (!cookies.token) {
        navigate("/login");
      }
      const { data } = await axios.post(
        "http://localhost:4000/auth",

        {},
        { withCredentials: true }
      );
      const { status, user } = data;
      setUsername(user);
      return status
        ? toast(`Hello ${user}`, {
            position: "top-right",
          })
        :(navigate("/login"));
    };
    verifyCookie();
  }, [cookies, navigate, removeCookie]);
  const Logout = () => {
    removeCookie("token");
    navigate("/signup");
  };

  return (
    <div className="text-center mb-20">
      <h1 className="text-4xl font-semibold mb-8">
        Welcome to our Page {username}
      </h1>
      <div className="flex justify-center gap-6 items-center ">
        <div className=" flex justify-center items-center gap-3 py-2 px-5 bg-blue-500 text-white font-semibold rounded-sm hover:bg-black transition-all duration-200">
          <a href="https://dashboard-two-drab.vercel.app" className="inline-flex">
            Go To Dashboard
          </a>
          <FaArrowRight/>
        </div>
        <button
          className="py-2 px-5 bg-blue-500 text-white font-semibold rounded-sm hover:bg-black transition-all duration-200"
          onClick={Logout}
        >
          LOGOUT
        </button>
      </div>
    </div>
  );
};

export default Welcome;
