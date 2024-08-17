import Balances from "../../components/Commons/Balances";
import TransactionActions from "../../components/Commons/TransactionActions";

const Dashboard = () => {
  return (
    <div className="text-white flex gap-8 items-start">
      {/* left part */}
      <div>
        <Balances />
        <TransactionActions />
      </div>

      {/* right part  */}
      <div className="bg-primarySlate rounded-xl h-96 w-full"></div>
    </div>
  );
};

export default Dashboard;
