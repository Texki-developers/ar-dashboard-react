import Avatar from "../../avatar/Avatar";
import { LogoutIcon } from "../icons/icons";

const Profile = () => {
    return (
        <div className="flex justify-between items-center hover:bg-gray-50 rounded-md cursor-pointer">
            <div className="flex items-center gap-2">
                <Avatar
                    src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    fullName="John Doe"
                />
                <div className="grid">
                    <h1 className="text-[16px] font-semibold">John Doe</h1>
                    <p className="text-[12px] text-grayText">Admin</p>
                </div>
            </div>
            <div className="cursor-pointer">
                <LogoutIcon color="#9197B3" />
            </div>
        </div>
    );
};

export default Profile;
