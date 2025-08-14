import { Controller, useForm } from "react-hook-form";
import { CloseIcon } from "../../../../../assets/svg-icons";
import ModalWrapper from "../../../../../components/modal/ModalWrapper";
import Input from "../../../../../components/form-components/Input";
import ImageUpload from "../../../../../components/form-components/ImageUpload";
import Button from "../../../../../components/button/Button";
import { useEffect } from "react";
import type { IProfileSettings } from "../../../../../service/apis/settings/Settings.type";

const UpdateVendor = ({ show, onClose, vendor }: { show: boolean; onClose: () => void; vendor: IProfileSettings }) => {
    const {
        control,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<IUpdateVendor>();
    const onSubmit = (data: IUpdateVendor) => {
        console.log(data);
    };

    useEffect(() => {
        if (vendor) {
            reset({
                name: vendor.name,
                location: vendor.location,
                logo: vendor.logo,
                banner: vendor.banner,
            });
        }
    }, [vendor, reset]);
    return (
        <ModalWrapper
            show={show}
            onClose={onClose}>
            <div className="min-w-[300px]">
                <div className="flex justify-between items-center">
                    <h2 className="text-lg font-semibold">Update Vendor</h2>
                    <div
                        className="cursor-pointer"
                        onClick={onClose}>
                        <CloseIcon
                            width={20}
                            height={20}
                        />
                    </div>
                </div>
                <div className="mt-2">
                    <Controller
                        control={control}
                        name="name"
                        render={({ field }) => (
                            <Input
                                {...field}
                                width="300px"
                                label="Name"
                                error={errors.name?.message as string}
                                placeholder="Name"
                            />
                        )}
                    />
                    <Controller
                        control={control}
                        name="location"
                        render={({ field }) => (
                            <Input
                                {...field}
                                width="300px"
                                label="Location"
                                error={errors.location?.message as string}
                                placeholder="Location"
                            />
                        )}
                    />
                    <Controller
                        name="logo"
                        rules={{ required: "Logo is required" }}
                        control={control}
                        render={({ field }) => (
                            <ImageUpload
                                width="300px"
                                label="Logo"
                                error={errors?.logo?.message as string}
                                {...field}
                            />
                        )}
                    />
                    <Controller
                        name="banner"
                        rules={{ required: "Banner is required" }}
                        control={control}
                        render={({ field }) => (
                            <ImageUpload
                                width="300px"
                                label="Banner"
                                error={errors?.banner?.message as string}
                                {...field}
                            />
                        )}
                    />
                    <div className="flex justify-end mt-2">
                        <Button onClick={handleSubmit(onSubmit)}>Submit</Button>
                    </div>
                </div>
            </div>
        </ModalWrapper>
    );
};

export default UpdateVendor;

export interface IUpdateVendor {
    name: string;
    location: string;
    logo: File | string;
    banner: File | string;
}
