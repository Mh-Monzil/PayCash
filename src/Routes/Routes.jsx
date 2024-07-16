import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Dashboard from "../pages/Dashboard";
import SendMoney from "../components/UserDashboard/SendMoney";
import CashOut from "../components/UserDashboard/CashOut";
import CashIn from "../components/UserDashboard/CashIn";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
        {
            index: true,
            element: <Dashboard />
        },
        {
            path: "/send-money",
            element: <SendMoney />
        },
        {
            path: "/cash-out",
            element: <CashOut />
        },
        {
            path: "/cash-in",
            element: <CashIn />
        },
    ]
  },
]);
