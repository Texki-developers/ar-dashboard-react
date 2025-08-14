import MenuItem from "./components/MenuItem";
import Profile from "./components/profile";
import { sideMenuConfig } from "./sideMenu.config";
import { useCallback } from "react";
import { useLocation, useNavigate } from "react-router";

const SideMenu = () => {
    const navigate = useNavigate();
    const selectedMenu = useLocation().pathname;

    const isActive = useCallback(
        (path: string) => {
            const firstPath = selectedMenu.split("/")[1];
            return firstPath === path;
        },
        [selectedMenu]
    );
    const onClick = useCallback((path: string) => navigate(path), [navigate]);
    return (
        <div className="bg-white w-[250px] h-full px-4 py-6">
            <div className="flex gap-2 items-center">
                <img
                    src="/images/LOGO.png"
                    alt=""
                />
                <h1 className="text-[20px] font-semibold">
                    AR Daddy <span className="text-[10px] text-gray-400">v.01</span>
                </h1>
            </div>
            <div className="grid gap-2 mt-10 grid-rows-[1fr_115px] h-full">
                <div className="h-full overflow-auto">
                    <div className="grid gap-2">
                        {sideMenuConfig.map((item) => (
                            <MenuItem
                                key={item.name}
                                item={item}
                                isActive={isActive}
                                onClick={onClick}
                            />
                        ))}
                    </div>
                </div>
                <div className="pb-2">
                    <Profile />
                </div>
            </div>
        </div>
    );
};

export default SideMenu;
