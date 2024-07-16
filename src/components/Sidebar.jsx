import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { GrLogout } from "react-icons/gr";

const Sidebar = () => {
  const [isActive, setActive] = useState(false);
  // Sidebar Responsive Handler
  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
    <>
      {/* Small Screen Navbar */}
      <div className="bg-navy  flex justify-between md:hidden">
        <div>
          <div className="block cursor-pointer p-4 font-bold">
            <Link to="/">
              {/* <Logo /> */}
              logo
            </Link>
          </div>
        </div>

        <button
          onClick={handleToggle}
          className="mobile-menu-button p-4 focus:outline-none"
        >
          <IoMenu className="h-5 w-5" />
        </button>
      </div>

      {/* Sidebar */}

      <div
        className={`z-10 md:fixed bg-primaryTeal flex flex-col justify-between overflow-x-hidden bg-navy w-72 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
          isActive && "-translate-x-full"
        }  md:translate-x-0  transition duration-200 ease-in-out`}
      >
        <div>
          <div>
            <div className="w-full hidden md:flex px-4 py-2  rounded-lg justify-center items-center bg-navy mx-auto">
              <Link
                to="/"
                className="flex md:flex-1 bg-white rounded-lg items-center  gap-2"
              >
                {/* <Logo className="w-8 h-8 md:w-12 md:h-12" /> */}
                logo
                {/* <span className="font-bold text-2xl ">
                  Scholar<span className="text-yellow">Vista</span>.{" "}
                </span> */}
              </Link>
            </div>
          </div>

          {/* Nav Items */}
          <div className="flex flex-col justify-between flex-1 mt-6">
            {/* Conditional toggle button here.. */}

            {/*  Menu Items */}
            <nav>
              {/* my profile */}
              <NavLink
                to="my-profile"
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform rounded-md shadow-sm shadow-white hover:text-navy ${
                    isActive ? "bg-white text-navy" : " hover:bg-orange-100 "
                  }`
                }
              >
                
                <span className="mx-4 font-medium">My Profile</span>
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
