import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Dashboard from "../pages/Dashboard/Dashboard";
import SendMoney from "../pages/Dashboard/UserDashboard/SendMoney";
import CashOut from "../pages/Dashboard/UserDashboard/CashOut";
import CashIn from "../pages/Dashboard/UserDashboard/CashIn";
import Login from "../pages/Auth/Login";

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
  {
    path: '/login',
    element: <Login />
  }
]);
