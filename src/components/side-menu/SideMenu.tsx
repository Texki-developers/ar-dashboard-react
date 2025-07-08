import Profile from "./components/profile";
import { sideMenuConfig } from "./sideMenu.config";
import { useLocation, useNavigate } from "react-router";

const SideMenu = () => {
    const navigate = useNavigate();
    const selectedMenu = useLocation().pathname;

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
                            <div
                                onClick={() => {
                                    navigate(item.path);
                                }}
                                className={`flex items-center gap-2 ${selectedMenu === item.path ? "primary-gradient text-white" : "text-grayText"
                                    } rounded-md p-2 cursor-pointer text-sm `}>
                                {item.icon({ color: selectedMenu === item.path ? "white" : "#9197B3" })}
                                <h1>{item.name}</h1>
                            </div>
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
