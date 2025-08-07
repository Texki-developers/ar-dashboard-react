/* eslint-disable @typescript-eslint/no-explicit-any */
import { Controller, type Control, type FieldErrors } from "react-hook-form";
import CustomSelect from "../../../../../components/form-components/Select";
import type { IModelsApiResponse } from "../../../../models/models.type";
import type { IFileResponseData } from "../../../../fileScreen/file.type";
import type { IAddProductModal } from "../AddProductModal";

interface IModelDetails {
    control: Control<IAddProductModal, any, IAddProductModal>;
    folders?: IModelsApiResponse[];
    foldersLoading: boolean;
    files?: IFileResponseData[];
    filesLoading: boolean;
    setFolderId: (id: string) => void;
    errors: FieldErrors<IAddProductModal>
}

const ModelDetails = ({ control, folders = [], foldersLoading, files = [], filesLoading, setFolderId, errors }: IModelDetails) => {
    return (
        <div className="border-t border-[#0000001f] py-4">
            <h2 className="text-lg ">3D Model</h2>
            <div className="flex gap-[20px] justify-between">
                <Controller
                    name="folder"
                    control={control}
                    rules={{ required: "Folder is required" }}
                    render={({ field }) => (
                        <CustomSelect
                            label="Folder"
                            options={folders?.map((folder) => ({
                                label: folder.folder_name,
                                value: folder._id,
                            }))}
                            isLoading={foldersLoading}
                            error={errors?.folder?.message as string}
                            {...field}
                            onChange={(value) => {
                                field.onChange(value);
                                setFolderId(value?.value as string);
                            }}
                        />
                    )}
                />
                <Controller
                    name="file"
                    control={control}
                    rules={{ required: "File is required" }}
                    render={({ field }) => (
                        <CustomSelect
                            label="File"
                            isLoading={filesLoading}
                            error={errors?.file?.message as string}
                            options={files?.map((file) => ({
                                label: file.file_name,
                                value: file._id,
                            }))}
                            {...field}
                        />
                    )}
                />
            </div>
        </div>
    );
};

export default ModelDetails;
