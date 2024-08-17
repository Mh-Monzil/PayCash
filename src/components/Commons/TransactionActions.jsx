import { Link } from "react-router-dom";
import { GiCash } from "react-icons/gi";
import { MdOutlineMobileFriendly } from "react-icons/md";
import { BsCashCoin } from "react-icons/bs";
import { BiSolidShoppingBags } from "react-icons/bi";
import { RiBillFill } from "react-icons/ri";
import { FaTicketSimple } from "react-icons/fa6";

const TransactionActions = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pt-12 border-t-2 border-primarySlate">
      {/* send money  */}
      <Link
        to="/send-money"
        className="bg-primarySlate flex flex-col items-center justify-center gap-5 p-8 rounded-xl cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out"
      >
        <GiCash className="text-5xl text-yellow-400" />
        <span className="text-3xl font-semibold">Send Money</span>
      </Link>

      {/* mobile recharge  */}
      <div
        to="mobile-recharge"
        className="bg-primarySlate flex flex-col items-center justify-center gap-5 p-8 rounded-xl cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out"
      >
        <MdOutlineMobileFriendly className="text-5xl text-green-400" />
        <span className="text-3xl font-semibold">Mobile Recharge</span>
      </div>

      {/* cash out  */}
      <div className="bg-primarySlate flex flex-col items-center justify-center gap-5 p-8 rounded-xl cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out">
        <BsCashCoin className="text-5xl text-teal-400" />
        <span className="text-3xl font-semibold">Cash Out</span>
      </div>

      {/* payment  */}
      <div className="bg-primarySlate flex flex-col items-center justify-center gap-5 p-8 rounded-xl cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out">
        <BiSolidShoppingBags className="text-5xl text-orange-400" />
        <span className="text-3xl font-semibold">Payment</span>
      </div>

      {/* pay bill  */}
      <div className="bg-primarySlate flex flex-col items-center justify-center gap-5 p-8 rounded-xl cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out">
        <RiBillFill className="text-5xl text-yellow-300" />
        <span className="text-3xl font-semibold">Pay Bill</span>
      </div>

      {/* tickets  */}
      <div className="bg-primarySlate flex flex-col items-center justify-center gap-5 p-8 rounded-xl cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out">
        <FaTicketSimple className="text-5xl text-green-400" />
        <span className="text-3xl font-semibold">Tickets</span>
      </div>
    </div>
  );
};

export default TransactionActions;
