import { Link } from "react-router-dom";
import { TbCurrencyTaka } from "react-icons/tb";
import { CgDollar } from "react-icons/cg";
import { LuArrowDownLeft } from "react-icons/lu";
import { FiArrowUpRight } from "react-icons/fi";
import { GiCash } from "react-icons/gi";
import { MdOutlineMobileFriendly } from "react-icons/md";
import { BsCashCoin } from "react-icons/bs";

const Dashboard = () => {
  return (
    <div className="text-white flex gap-8 items-start">
      {/* left  */}
      <div>
        <div className="flex items-center  gap-5">
          {/* balance  */}
          <div className="bg-primarySlate w-96 h-52 rounded-xl p-6 space-y-3">
            <div className="flex items-center justify-between text-yellow-400 text-xl ">
              <span className=" font-semibold ">Balance</span>
              <div className="flex items-center gap-2">
                <div className="border border-gray-700 rounded-lg cursor-pointer">
                  <TbCurrencyTaka className="m-2 text-xl" />
                </div>
                <div className="border border-gray-700 rounded-lg cursor-pointer">
                  <CgDollar className="m-2 text-xl" />
                </div>
              </div>
            </div>
            <p className="text-4xl font-semibold pt-5">20,560</p>
            <div className="flex items-center justify-between text-lg font-normal">
              <span>80 transactions</span>
              <span className="text-green-400">80%</span>
            </div>
          </div>

          {/* incoming  */}
          <div className="bg-primarySlate w-80 h-52 rounded-xl p-6 space-y-3">
            <div className="flex items-center justify-between text-green-400 text-xl ">
              <span className=" font-semibold ">Incoming</span>
              <FiArrowUpRight />
            </div>
            <p className="text-4xl font-semibold pt-5">20,560</p>
            <div className="flex items-center justify-between text-lg font-normal">
              <span>80 transactions</span>
              <span className="text-green-400">80%</span>
            </div>
          </div>

          {/* outgoing  */}
          <div className="bg-primarySlate w-80 h-52 rounded-xl p-6 space-y-3">
            <div className="flex items-center justify-between text-red-500 text-xl ">
              <span className=" font-semibold ">Outgoing</span>
              <LuArrowDownLeft />
            </div>
            <p className="text-4xl font-semibold pt-5">20,560</p>
            <div className="flex items-center justify-between text-lg font-normal">
              <span>80 transactions</span>
              <span className="text-red-500">80%</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
          {/* send money  */}
          <Link to="/send-money" className="bg-primarySlate flex flex-col items-center justify-center gap-5 p-8 rounded-xl">
            <GiCash className="text-5xl" />
            <span className="text-3xl font-semibold">Send Money</span>
          </Link>

          {/* mobile recharge  */}
          <div to="mobile-recharge" className="bg-primarySlate flex flex-col items-center justify-center gap-5 p-8 rounded-xl">
          <MdOutlineMobileFriendly className="text-5xl" />
            <span className="text-3xl font-semibold">Mobile Recharge</span>
          </div>

          {/* cash out  */}
          <div className="bg-primarySlate flex flex-col items-center justify-center gap-5 p-8 rounded-xl">
          <BsCashCoin className="text-5xl" />
            <span className="text-3xl font-semibold">Cash Out</span>
          </div>
        </div>
      </div>

      {/* right  */}
      <div className="bg-slate-700 h-screen w-96">h</div>
    </div>
  );
};

export default Dashboard;
