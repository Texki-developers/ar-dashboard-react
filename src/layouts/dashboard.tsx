import { Outlet } from "react-router";
import SideMenu from "../components/side-menu/SideMenu";
import AppLayout from "./AppLayout";

const DashboardLayout = () => {
    return (
        <AppLayout>
            <div className="grid grid-cols-[250px_1fr] h-screen w-screen">
                <SideMenu />
                <div className=" h-full w-full">
                    <Outlet />
                </div>
            </div>
        </AppLayout>
    );
};

export default DashboardLayout;
