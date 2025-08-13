import { TableIcon } from "../../assets/svg-icons";
import { RouteURLs } from "../../router/routeUrls";
import { DashboardIcon, ModelsIcon, ProductsIcon } from "./icons/icons";

export const sideMenuConfig = [
    {
        name: "Dashboard",
        icon: DashboardIcon,
        path: "",
    },
    {
        name: "Products",
        icon: ProductsIcon,
        path: RouteURLs.Products?.replace('/', ''),
    },
    {
        name: "Models",
        icon: ModelsIcon,
        path: RouteURLs.Models?.replace('/', ''),
    },
    {
        name: "Tables",
        icon: TableIcon,
        path: RouteURLs.Tables?.replace('/', ''),
    },
];
