import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { IoMenu } from "react-icons/io5";
import { IoMdNotifications } from "react-icons/io";
import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";

const Root = () => {
  const [isActive, setActive] = useState(false);
  const handleToggle = () => {
    setActive(!isActive);
  };
  return (
    <div className="relative min-h-screen w-full flex bg-[#121212]">
      {/* sidebar  */}
      <div>
        <Sidebar isActive={isActive} handleToggle={handleToggle} />
      </div>
      {/* outlet --> dynamic content  */}
      <div
        className={`flex-1 ${
          isActive ? " md:pl-0" : " md:pl-72"
        } transition-all duration-300 ease-in-out`}
      >
        <nav className="flex items-center justify-between p-3 px-6 bg-primarySlate text-white">
          <IoMenu onClick={handleToggle} className="text-4xl cursor-pointer" />
          <div className="flex gap-3">
            <IoMdNotifications className="text-[26px]" />
            <FaUserCircle className="text-2xl" />
          </div>
        </nav>
        <div className="mx-10 mt-10 h-[88vh]">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Root;
