import { FcGoogle } from "react-icons/fc";
// import { useSelector } from "react-redux"

// import frameImg from "../../../assets/Images/frame.png"
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

function Template({ title, description1, description2, image, formType }) {
  return (
    <div className="grid place-items-start -mt-20 mb-20">
      <div className="mx-auto flex w-10/12 max-w-maxContent flex-col-reverse justify-between gap-y-12 py-12 lg:flex-row  lg:gap-x-12">
        <div className="mx-auto w-11/12 max-w-[400px] md:mx-0">
          <p className="mt-4 text-[1.125rem] leading-[1.625rem]">
            <span className="text-richblack-100">{description1}</span>{" "}
            <span className="font-edu-sa font-bold italic text-blue-100">
              {description2}
            </span>
          </p>
          {formType === "signup" ? <SignupForm /> : <LoginForm />}
        </div>
        <div className=" mx-auto w-11/12">
          <img
            src={image}
            alt="Students"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}

export default Template;
