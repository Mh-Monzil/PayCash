import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { IoMenu } from "react-icons/io5";
import { useState } from "react";

const Root = () => {
  const [isActive, setActive] = useState(false);
  const handleToggle = () => {
    setActive(!isActive);
  };
  return (
    <div className="relative min-h-screen w-full flex ">
      {/* sidebar  */}
      <div>
        <Sidebar isActive={isActive} handleToggle={handleToggle} />
      </div>
      {/* outlet --> dynamic content  */}
      <div className={`flex-1 ${isActive ? " md:pl-0" : " md:pl-72"} transition-all duration-300 ease-in-out`}>
        <nav className="flex items-center justify-between p-3 bg-[#161619] text-white">
          <IoMenu onClick={handleToggle} className="text-4xl cursor-pointer" />
          <div>
            <span>Noti</span>
            <span>pro</span>
          </div>
        </nav>
        <div className="p-5">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Root;
