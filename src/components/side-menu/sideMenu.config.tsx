import { SettingsIcon, TableIcon } from "../../assets/svg-icons";
import { RouteURLs } from "../../router/routeUrls";
import { DashboardIcon, ModelsIcon, ProductsIcon } from "./icons/icons";
import type { IMenuItem } from "./components/MenuItem";

export const sideMenuConfig: IMenuItem[] = [
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
    {
        name: "Settings",
        icon: SettingsIcon,
        path: RouteURLs.Settings?.replace('/', ''),
    },
];
