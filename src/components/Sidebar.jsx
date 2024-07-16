import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { IoMenu, IoClose } from "react-icons/io5";
import { GrLogout } from "react-icons/gr";
import { FaTelegramPlane, FaHome } from "react-icons/fa";
import { BiSend } from "react-icons/bi";

const Sidebar = ({isActive, handleToggle}) => {
  

  return (
    <>
      <div
        className={`bg-[#161619] z-10 bg-primaryTeal flex flex-col justify-between overflow-x-hidden w-72 space-y-6 absolute inset-y-0 transform ${
          isActive ? " left-0 md:-left-72" : "-left-72 md:left-0"
        }  md:translate-x-0  transition-all duration-300 ease-in-out`}
      >
        <div>
          <div className="bg-rose-500 flex items-center justify-between">
            <div className="w-full flex px-4 py-3.5 rounded-lg justify-center items-center mx-auto text-white">
              <Link
                to="/"
                className="flex md:flex-1 rounded-lg items-center justify-center gap-1"
              >
                <FaTelegramPlane className="text-3xl" />
                <span className="text-2xl font-medium">AirCash</span>
              </Link>
            </div>
            <IoClose onClick={handleToggle} className="md:hidden text-4xl" />
          </div>

          {/* Nav Items */}
          <div className="flex flex-col justify-between flex-1 mt-6 ">

            {/*  Menu Items */}
            <nav>
              {/* home  */}
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `flex items-center px-8 py-2 my-5  transition-colors duration-300 border-l-[3px] border-transparent text-white ${
                    isActive ? " text-green-400  border-l-yellow-300" : " "
                  }`
                }
              >
                <FaHome className="text-2xl" />
                <span className="mx-4 font-medium">Dashboard</span>
              </NavLink>
              {/* send money  */}
              <NavLink
                to="/send-money"
                className={({ isActive }) =>
                  `flex items-center px-8 py-2 my-5  transition-colors duration-300 border-l-[3px] border-transparent text-white ${
                    isActive ? " text-green-400  border-l-yellow-300" : " "
                  }`
                }
              >
                <FaHome className="text-2xl" />
                <span className="mx-4 font-medium">Send Money</span>
              </NavLink>
              {/* cash out  */}
              <NavLink
                to="/cash-out"
                className={({ isActive }) =>
                  `flex items-center px-8 py-2 my-5  transition-colors duration-300 border-l-[3px] border-transparent text-white ${
                    isActive ? " text-green-400  border-l-yellow-300" : " "
                  }`
                }
              >
                <FaHome className="text-2xl" />
                <span className="mx-4 font-medium">Cash Out</span>
              </NavLink>
              {/* cash in  */}
              <NavLink
                to="/cash-in"
                className={({ isActive }) =>
                  `flex items-center px-8 py-2 my-5  transition-colors duration-300 border-l-[3px] border-transparent text-white ${
                    isActive ? " text-green-400  border-l-yellow-300" : " "
                  }`
                }
              >
                <FaHome className="text-2xl" />
                <span className="mx-4 font-medium">Cash In</span>
              </NavLink>
            </nav>
          </div>
        </div>

        <div>
          <hr />

          {/* logout */}
          <button
            // onClick={signOutUser}
            className="flex w-full items-center px-4 py-2 mt-5   hover:bg-orange-100   hover:text-navy transition-colors duration-300 transform shadow-sm shadow-white"
          >
            <GrLogout className="w-5 h-5" />

            <span className="mx-4 font-medium">Logout</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
