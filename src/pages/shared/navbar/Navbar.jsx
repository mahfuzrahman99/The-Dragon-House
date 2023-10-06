import { useContext } from "react";
import User from "../../../assets/user.png";

import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

const Navbar = () => {
  // const Manus = () => {
  //   const links = ["home", "about", "career"];
  //   return (
  //     <>
  //       {links.map((link, index) => {
  //         return (
  //           <li key={index}>
  //             <Link to={`/${link}`} className="btn btn-sm  btn-ghost">{link}</Link>
  //           </li>
  //         );
  //       })}
  //     </>
  //   );
  // };

  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch(() => {});
  };

  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/career">Career</NavLink>
      </li>
      <li>
        <NavLink to="/addict">Addict</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl"></a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        <div className="dropdown dropdown-end flex items-center">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src={User} />
            </div>
          </label>
          {user ? (
              <button
                onClick={handleLogout}
                className="btn bg-gray-700 text-white px-7"
              >
                Logout
              </button>
          ) : (
            <button className="btn bg-gray-700 text-white px-7">
              <Link to={`/login`}>Login</Link>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
