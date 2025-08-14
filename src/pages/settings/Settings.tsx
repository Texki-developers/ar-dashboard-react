import TableHeader from "../../builders/table-header-builder/TableHeaders";
import Box from "../../components/box/Box";
import MenuItem from "../../components/side-menu/components/MenuItem";
import { ISettingsPages, settingsRoutes, settingsSidebarConfig } from "./config/settings-sidebar.config";
import { useState } from "react";

const Settings = () => {
    const [activeMenu, setActiveMenu] = useState<ISettingsPages>(ISettingsPages.Profile);
    const isActive = (path: string) => activeMenu === path;
    const onClick = (path: string) => setActiveMenu(path as ISettingsPages);
    return (
        <div className="grid gap-4 grid-rows-[auto_1fr] h-full">
            <TableHeader headerConfig={{ title: "Settings" }} />
            <div className="grid grid-cols-[200px_1fr] gap-4 h-full items-stretch">
                <Box className="p-4! rounded-lg bg-white">
                    {settingsSidebarConfig.map((item) => (
                        <MenuItem
                            key={item.name}
                            item={item}
                            isActive={isActive}
                            onClick={onClick}
                        />
                    ))}
                </Box>
                <Box className="p-4! rounded-lg bg-white w-full h-full">{settingsRoutes[activeMenu].element}</Box>
            </div>
        </div>
    );
};

export default Settings;
