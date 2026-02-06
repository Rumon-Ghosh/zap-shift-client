import React from "react";
import Logo from "../Logo/Logo";
import { Link, NavLink, useNavigate } from "react-router";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, LogOutUser } = useAuth();
  const navigate = useNavigate();

  const handleLogOut = async () => {
    try {
      await LogOutUser();
      navigate("/");
    } catch (error) {
      toast.error("Error at signout");
      console.log(error);
    }
  };

  const links = (
    <>
      <li>
        <NavLink to="services">Services</NavLink>
      </li>
      <li>
        <NavLink to="coverage">Coverage</NavLink>
      </li>
      <li>
        <NavLink to="about-us">About Us</NavLink>
      </li>
      <li>
        <NavLink to="send-parcel">Send Parcel</NavLink>
      </li>
      <li>
        <NavLink to="be-a-rider">Be A Rider</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm sticky top-0 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Logo></Logo>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end space-x-4">
        {user ? (
          <button onClick={handleLogOut} className="btn btn-outline">
            LogOut
          </button>
        ) : (
          <Link to="login" className="btn btn-outline">
            Login
          </Link>
        )}
        <Link to="be-a-rider" className="btn btn-primary text-black">
          Be A Rider
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
