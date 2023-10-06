import { Link, useNavigate } from "react-router-dom";
import Navbar from "./shared/navbar/Navbar";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

const Register = () => {
  const [show, setShow] = useState(true);

  const { createUser } = useContext(AuthContext);

  const naviget = useNavigate()

  const handleRegister = (e) => {
    e.preventDefault();

    // console.log(form.get('name','email','password','photo'));

    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(name, photo, email, password);

    // create user
    createUser(email, password)
    .then(result => {
        console.log(result.user)
        naviget('/login')
    })
    .catch(error => {
        console.error(error)
    })

    
  };

  return (
    <div className="bg-gray-200">
      <div className="md:mb-12">
        <Navbar />
      </div>
      <div className="flex justify-center  lg:p-12 ">
        <div className=" flex-col lg:w-1/2">
          <div className="  shadow-2xl">
            <form onSubmit={handleRegister} className="p-16 bg-white ">
              <div className="text-center ">
                <h1 className="text-2xl  font-bold">Register your account!</h1>
                <br />
                <hr className="mt-4 mb-5" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="p-3 rounded-md bg-[#F3F3F3]"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  name="photo"
                  placeholder="Photo URL"
                  className="p-3 rounded-md bg-[#F3F3F3]"
                />
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
                    <span className="label-text ">Password</span>
                  </label>
                  <input
                    type={show ? "text" : "password"}
                    name="password"
                    placeholder="password"
                    className="p-3 rounded-md bg-[#F3F3F3] w-full"
                    required
                  />
                  <div className="absolute top-12 right-1">
                    <span
                      className="text-xl  font-extrabold"
                      onClick={() => setShow(!show)}
                    >
                      {show ? <BsEye></BsEye> : <BsEyeSlash></BsEyeSlash>}
                    </span>
                  </div>
                </div>
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" name="checkbox" className="" required />
                <p className="text-base font-normal text-[#706F6F]">
                  Accept Terms & Conditions
                </p>
              </div>
              <div className="form-control mt-6">
                <button  className="btn bg-[#403F3F] text-white rounded-none">
                  Register
                </button>
              </div>
              <div>
                <p className="text-xl text-gray-500 font-semibold">Login With...!!</p>
              <div className="flex items-center justify-center gap-2 my-2">
                <button className="btn border btn-outline w-1/2 border-blue-500">
                  <FcGoogle />
                  Google
                </button>
                <button className="btn border btn-outline w-1/2 border-black">
                  <FaGithub />
                  Github
                </button>
              </div>
              </div>
              <p className="text-center mt-4 text-[#706F6F]">
                Already have an account? Please
                <Link className="text-[#F75B5F] font-bold" to="/login">
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
