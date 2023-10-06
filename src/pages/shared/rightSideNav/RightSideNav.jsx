import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import qZone1 from "../../../assets/qZone1.png";
import qzone2 from "../../../assets/qZone2.png";
import qZone3 from "../../../assets/qZone3.png";
import LearnMore from "./LernMore";

const RightSideNav = () => {
  const location = useLocation();
  const isHomeRoute = location.pathname === "/";
  return (
    <div className="space-y-10 ">
      {/* Login With */}
      <div>
        <h1 className="text-3xl font-poppins text-center font-bold">Login With</h1>
        <div className="flex flex-col">
          <button className="btn border btn-outline border-blue-500 my-3">
            <FcGoogle />
            Login With Google
          </button>
          <button className="btn border btn-outline border-black">
            <FaGithub />
            Login With Github
          </button>
        </div>
      </div>
      {/* Find Us On */}
      <div>
        <h2 className="text-xl font-semibold">Find Us On</h2>
        <div className="flex flex-col mt-3">
          <Link>
            <p className="flex items-center text-center text-base font-semibold  p-4 border rounded-t-md  border-gray-200 w-full ">
              <FaFacebook className="pr-2 text-2xl font-semibold" />
              Facebook
            </p>
          </Link>
          <Link>
            <p className="flex items-center text-base font-semibold  p-4 border-x border-gray-200 w-full ">
              <FaTwitter className="pr-2 text-2xl font-semibold" />
              Twitter
            </p>
          </Link>
          <Link>
            <p className="flex items-center text-base font-semibold  p-4 border rounded-b-md border-gray-200 w-full  ">
              <FaInstagram className="pr-2 text-2xl font-semibold" />
              Instagram
            </p>
          </Link>
        </div>
      </div>
      {/* q zone */}
      <div className="flex flex-col">
        <img src={qZone1} alt="" />
        <img src={qzone2} alt="" />
        <img src={qZone3} alt="" />
      </div>
      {/* bg 1 png */}
      {isHomeRoute && <LearnMore />}
    </div>
  );
};

export default RightSideNav;
