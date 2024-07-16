import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Dashboard from "../pages/Dashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
        {
            index: true,
            element: <Dashboard />
        }
    ]
  },
]);
