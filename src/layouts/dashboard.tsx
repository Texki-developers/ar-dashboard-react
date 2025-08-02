import { Outlet } from "react-router";
import SideMenu from "../components/side-menu/SideMenu";
import AppLayout from "./AppLayout";
import { authStore } from "../store/auth.store";
import { useNavigate } from "react-router";

const DashboardLayout = () => {
    const navigate = useNavigate();
    const { user } = authStore();
    if (!user) {
        navigate("/auth");
    }
    return (
        <AppLayout>
            <div className="grid grid-cols-[250px_1fr] h-screen w-screen">
                <SideMenu />
                <div className=" h-full w-full p-4">
                    <Outlet />
                </div>
            </div>
        </AppLayout>
    );
};

export default DashboardLayout;
