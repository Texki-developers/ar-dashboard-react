import type { JSX } from "react";
import type { IMenuItem } from "../../../components/side-menu/components/MenuItem";
import { DashboardIcon } from "../../../components/side-menu/icons/icons";
import SettingsProfile from "../pages/profile/SettingsProfile";

export enum ISettingsPages {
  Profile = "profile",
}

export const settingsSidebarConfig: IMenuItem[] = [
  {
    name: "Profile",
    icon: DashboardIcon,
    path: ISettingsPages.Profile,
  },
];

export const settingsRoutes: {
  [key in ISettingsPages]: { element: JSX.Element };
} = {
  [ISettingsPages.Profile]: { element: <SettingsProfile /> },
};
