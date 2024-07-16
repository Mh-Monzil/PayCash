
import { TbCurrencyTaka } from "react-icons/tb";
import { CgDollar } from "react-icons/cg";
import { LuArrowDownLeft } from "react-icons/lu";
import { FiArrowUpRight } from "react-icons/fi";

const Dashboard = () => {
  return (
    <div className="text-white">
      <div className="flex items-center  gap-5">
        {/* balance  */}
        <div className="bg-primarySlate w-96 rounded-xl p-6 space-y-3">
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
        <div className="bg-primarySlate w-80 rounded-xl p-6 space-y-3">
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
        <div className="bg-primarySlate w-80 rounded-xl p-6 space-y-3">
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
      <div></div>
    </div>
  );
};

export default Dashboard;
