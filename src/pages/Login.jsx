import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "./shared/navbar/Navbar";
import { useContext, useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { AuthContext } from "../providers/AuthProvider";
// import toast from "react-hot-toast";
import swal from "sweetalert";

const Login = () => {
  const [show, setShow] = useState(true);
  const {signInUser} = useContext(AuthContext)
  const location = useLocation()
  const navigate = useNavigate()

  const handleLogin = (e) => {
    
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    signInUser(email, password)
      .then((res) => {
        console.log(res.user);
        navigate(location?.state ? location.state : "/")
      })
      .catch((err) => {
        console.log(err);
        // toast.error('Pleas Register First')
        swal("Error!", "Pleas Register First!", "error");
      });

  };

  return (
    <div className="bg-gray-200">
      <div className="md:mb-12">
        <Navbar />
      </div>
      <div className="flex justify-center  lg:p-16 ">
        <div className=" flex-col lg:w-1/2">
          <div className="  shadow-2xl">
            <form onSubmit={handleLogin} className="p-16 bg-white ">
              <div className="text-center ">
                <h1 className="text-2xl  font-bold">Login your account!</h1>
                <br />
                <hr className="mt-4 mb-5" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text  ">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="p-3 rounded-md bg-[#F3F3F3]"
                  required
                />
              </div>
              <div className="form-control relative">
                <div>
                  <label className="label">
                    <span className="label-text w-full">Password</span>
                  </label>
                  <input
                    type={show ? "text" : "password"}
                    name="password"
                    placeholder="password"
                    className="p-3 rounded-md bg-[#F3F3F3] w-full"
                    required
                  />
                </div>
                <div className="absolute top-12 right-1">
                  <span
                    className="text-xl font-extrabold"
                    onClick={() => setShow(!show)}
                  >
                    {show ? <BsEye></BsEye> : <BsEyeSlash></BsEyeSlash>}
                  </span>
                </div>
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-[#403F3F] text-white rounded-none">
                  Login
                </button>
              </div>
              <p className="text-center mt-4 text-[#706F6F]">
                Do not have an account? Please
                <Link className="text-[#F75B5F] font-bold" to="/register">
                  Register
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
