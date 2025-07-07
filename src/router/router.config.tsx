import { lazy } from "react";
import { RouteURLs } from "./routeUrls";
const Login = lazy(() => import("../pages/login/Login"));

export const routerConfig = [
    {
        path: RouteURLs.Auth,
        element: <Login />,
    },
];
