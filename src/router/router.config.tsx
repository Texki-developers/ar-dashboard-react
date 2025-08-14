import { lazy } from "react";
import { RouteURLs } from "./routeUrls";
import DashboardLayout from "../layouts/dashboard";

const Dashboard = lazy(() => import("../pages/dashboard/Dashboard"));
const Products = lazy(() => import("../pages/products/Products"));
const Models = lazy(() => import("../pages/models/Models"));
const Login = lazy(() => import("../pages/login/Login"));
const FileScreen = lazy(() => import("../pages/fileScreen/FileScreen"));
const ProductDetails = lazy(() => import("../pages/product-details/ProductDetails"));
const QrCodes = lazy(() => import("../pages/tables/Tables"));
const Settings = lazy(() => import("../pages/settings/Settings"));

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
                path: `${RouteURLs.Products}/:id`,
                element: <ProductDetails />,
            },
            {
                path: RouteURLs.Models,
                element: <Models />,
            },
            {
                path: `${RouteURLs.Models}/:id`,
                element: <FileScreen />,
            },
            {
                path: RouteURLs.Tables,
                element: <QrCodes />,
            },
            {
                path: RouteURLs.Settings,
                element: <Settings />,
            },
        ],
    },
];
