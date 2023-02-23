import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import About from "../Pages/About";
import Dashboard from "../Pages/Dashboard";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "dashboard",
                element: <Dashboard />
            },
            {
                path: "about",
                element: < About />
            },
        ]
    },
])