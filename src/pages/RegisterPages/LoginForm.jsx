import axios from "axios";
import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { FaArrowRight } from "react-icons/fa6";
import { useNavigate, useNavigation } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useAuth } from "../../AuthContext"


function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate()
  const {login} = useAuth()
 
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });
  const { email, password } = inputValue;
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "top-left",
    });
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "top-left",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "https://mern-stack-project-hyv5.onrender.com/auth/login",
        {
          ...inputValue,
        },
        { withCredentials: true }
      );
      console.log("Login Response Data:", data);
      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        console.log("Navigation to welcome");
        login()
        navigate("/welcome");
      } else {
        handleError(message);
      }
    } catch (error) {
      console.error("Login Error:", error);
      handleError("An error occurred. Please try again.");
    }
    setInputValue({
      ...inputValue,
      email: "",
      password: "",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-6 flex w-full flex-col items-start gap-y-4 text-gray-600"
    >
      <label className="w-full">
        <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
          Email Address <sup className="text-pink-500">*</sup>
        </p>
        <input
          required
          type="email"
          name="email"
          value={email}
          onChange={handleOnChange}
          placeholder="Enter email address"
          className="inputStyle"
        />
      </label>
      <label className="relative w-full">
        <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
          Password <sup className="text-pink-500">*</sup>
        </p>
        <input
          required
          type={showPassword ? "text" : "password"}
          name="password"
          value={password}
          onChange={handleOnChange}
          placeholder="Enter Password"
          className="inputStyle"
        />
        <span
          onClick={() => setShowPassword((prev) => !prev)}
          className="absolute right-24 top-[36px] z-[10] cursor-pointer"
        >
          {showPassword ? (
            <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
          ) : (
            <AiOutlineEye fontSize={24} fill="#AFB2BF" />
          )}
        </span>
      </label>
      <button
        type="submit"
        className="mt-6 flex items-center justify-center  gap-3 rounded-[3px] bg-blue-500 py-2 px-6 font-medium text-richblack-900 hover:bg-black text-white transition-all duration-200"
      >
        Login <FaArrowRight />
      </button>
    </form>
  );
}

export default LoginForm;
