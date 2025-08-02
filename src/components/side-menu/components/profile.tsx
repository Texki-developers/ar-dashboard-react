import Avatar from "../../avatar/Avatar";
import { LogoutIcon } from "../icons/icons";
import { authStore } from "../../../store/auth.store";
import { EUserRole } from "../../../models/user.type";
import { useNavigate } from "react-router";

const Role: Record<EUserRole, string> = {
    [EUserRole.ADMIN]: "Admin",
    [EUserRole.SUPER_ADMIN]: "Super Admin",
    [EUserRole.MAINTAINER]: "Maintainer",
    [EUserRole.REGULAR]: "Regular",
}


const Profile = () => {
    const { user } = authStore();
    const navigate = useNavigate();

    if (!user) return null;

    const onLogout = () => {
        authStore.setState({ user: null, token: "" });
        navigate("/auth");
    };
    return (
        <div className="flex justify-between items-center hover:bg-gray-50 rounded-md cursor-pointer">
            <div className="flex items-center gap-2">
                <Avatar
                    fullName={user?.fullName}
                />
                <div className="grid">
                    <h1 className="text-[16px] font-semibold">{user?.fullName}</h1>
                    <p className="text-[12px] text-grayText">{Role[user?.role]}</p>
                </div>
            </div>
            <div onClick={onLogout} className="cursor-pointer">
                <LogoutIcon color="#9197B3" />
            </div>
        </div>
    );
};

export default Profile;
