import { useState } from "react";
import { LoaderComponent } from "../../../../components/loader/Loader";
import type { IProfileSettings } from "../../../../service/apis/settings/Settings.type";
import UpdateVendor from "./components/UpdateVendor";
import { profileSettingsConfig } from "./profile-settings-config";
import useProfileSettings from "./useProfileSettings.hook";
import { EditIcon } from "../../../../assets/svg-icons";

const SettingsProfile = () => {
    const { data, isLoading, setData } = useProfileSettings();
    const [showUpdateVendor, setShowUpdateVendor] = useState(false);
    const onCloseUpdateVendor = () => {
        setShowUpdateVendor(false);
    };
    return (
        <div>
            <div className="flex justify-between">
                <h1 className="text-lg font-semibold">Profile Settings</h1>
                <div
                    className="cursor-pointer"
                    onClick={() => {
                        console.log("clicked...");
                        setShowUpdateVendor(true);
                    }}>
                    <EditIcon
                        width={20}
                        height={20}
                        color="black"
                    />
                </div>
            </div>
            <div className="w-full h-full">
                {isLoading ? (
                    <div className="w-full h-full min-h-[300px] grid place-items-center">
                        <LoaderComponent />
                    </div>
                ) : (
                    <div className="grid gap-2 mt-5">
                        {profileSettingsConfig.map((config) => (
                            <div
                                key={config.label}
                                className="grid grid-cols-[150px_1fr] gap-2">
                                <span className="font-medium">{config.label} :</span>
                                <span>
                                    {config?.render ? config.render(data?.[config.sourceKey as keyof IProfileSettings]) : data?.[config.sourceKey as keyof IProfileSettings]}
                                </span>
                            </div>
                        ))}
                    </div>
                )}
            </div>
            {showUpdateVendor && data && (
                <UpdateVendor
                    show={showUpdateVendor}
                    onClose={onCloseUpdateVendor}
                    vendor={data}
                    setData={setData}
                />
            )}
        </div>
    );
};

export default SettingsProfile;
