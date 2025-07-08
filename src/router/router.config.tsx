import { lazy } from "react";
import { RouteURLs } from "./routeUrls";
import DashboardLayout from "../layouts/dashboard";

const Dashboard = lazy(() => import("../pages/dashboard/Dashboard"));
const Products = lazy(() => import("../pages/products/Products"));
const Models = lazy(() => import("../pages/models/Models"));

const Login = lazy(() => import("../pages/login/Login"));

export const routerConfig = [
    {
        path: RouteURLs.Auth,
        element: <Login />,
    },
    {
        path: RouteURLs.Home,
        element: <DashboardLayout />,
        children: [
            {
                path: RouteURLs.Home,
                element: <Dashboard />,
            },
            {
                path: RouteURLs.Products,
                element: <Products />,
            },
            {
                path: RouteURLs.Models,
                element: <Models />,
            },
        ],
    },
];
