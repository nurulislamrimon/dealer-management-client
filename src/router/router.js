import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import CustomerDetails from "../Pages/Customers/CustomerDetails/CustomerDetails";
import Customers from "../Pages/Customers/Customers";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Dealers from "../Pages/Dealers/Dealers";
import Finance from "../Pages/Finance/Finance";
import Invoice from "../Pages/Invoice/Invoice";
import NotFoundPage from "../Pages/NotFoundPage/NotFoundPage";
import BlankStock from "../Pages/Products/BlankStock/BlankStock";
import Products from "../Pages/Products/Products";
import StockAlert from "../Pages/Products/StockAlert/StockAlert";
import Purchases from "../Pages/Purchases/Purchases";
import Returned from "../Pages/Returned/Returned";
import Sales from "../Pages/Sales/Sales";
import Users from "../Pages/Users/Users";
import Warehouse from "../Pages/Warehouse/Warehouse";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Dashboard />
            },
            {
                path: "dashboard",
                element: <Dashboard />
            },
            {
                path: "products",
                element: < Products />
            },
            {
                path: "stock-alert",
                element: <StockAlert />
            },
            {
                path: "blank-stock",
                element: <BlankStock />
            },
            {
                path: "customer",
                element: < Customers />
            },
            {
                path: "customer/:id",
                element: < CustomerDetails />
            },
            {
                path: "sales",
                element: < Sales />
            },
            {
                path: "invoice",
                element: < Invoice />
            },
            {
                path: "returned",
                element: < Returned />
            },
            {
                path: "warehouse",
                element: < Warehouse />
            },
            {
                path: "purchases",
                element: < Purchases />
            },
            {
                path: "dealers",
                element: < Dealers />
            },
            {
                path: "finance",
                element: < Finance />
            },
            {
                path: "users",
                element: < Users />
            },
            {
                path: "*",
                element: < NotFoundPage />
            },

        ]
    },
])