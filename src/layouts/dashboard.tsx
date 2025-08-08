import { Outlet } from "react-router";
import SideMenu from "../components/side-menu/SideMenu";
import AppLayout from "./AppLayout";
import { authStore } from "../store/auth.store";
import { useNavigate } from "react-router";
import { useEffect } from "react";

const DashboardLayout = () => {
    const navigate = useNavigate();
    const { token } = authStore();
    useEffect(() => {
        if (!token) {
            navigate("/auth");
        }
    }, [token, navigate]);
    return (
        <AppLayout>
            <div className="grid grid-cols-[250px_1fr] h-screen w-screen">
                <SideMenu />
                <div className=" h-full  p-4 max-w-[calc(100vw-250px)]">
                    <Outlet />
                </div>
            </div>
        </AppLayout>
    );
};

export default DashboardLayout;
