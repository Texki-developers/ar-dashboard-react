import { Controller, type Control, type FieldErrors } from "react-hook-form";
import Input from "../../../../../components/form-components/Input";
import ImageUpload from "../../../../../components/form-components/ImageUpload";
import CustomCreatableSelect from "../../../../../components/form-components/CreatableSelect";
import type { IAddProductModal } from "../AddProductModal";
import type { ICategory } from "../../../../../service/apis/category/category.type";

const BasicDetails = ({
    control,
    categories,
    categoriesLoading,
    errors,
}: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    control: Control<IAddProductModal, any, IAddProductModal>;
    categories: ICategory[] | undefined;
    categoriesLoading: boolean;
    errors: FieldErrors<IAddProductModal>

}) => {
    return (
        <div className="border-t border-[#0000001f] py-4">
            <h2 className="text-lg ">Basic Details</h2>
            <div className="flex gap-[20px] justify-between">
                <Controller
                    name="name"
                    control={control}
                    rules={{ required: "Name is required" }}
                    render={({ field }) => (
                        <Input
                            label="Name"
                            error={errors?.name?.message as string}
                            {...field}
                        />
                    )}
                />
                <Controller
                    name="category"
                    control={control}
                    rules={{ required: "Category is required" }}
                    render={({ field }) => (
                        <CustomCreatableSelect
                            label="Category"
                            onCreateOption={(value) => {
                                field?.onChange(value);
                            }}
                            options={categories?.map((category) => ({
                                label: category.name,
                                value: category._id,
                            }))}
                            error={errors?.category?.message as string}
                            isLoading={categoriesLoading}
                            {...field}
                        />
                    )}
                />
            </div>
            <div className="flex gap-[20px] justify-between">
                <Controller
                    name="desc"
                    control={control}
                    rules={{ required: "Description is required" }}
                    render={({ field }) => (
                        <Input
                            label="Description"
                            {...field}
                            isTextArea
                            error={errors?.desc?.message as string}
                            className="w-[250px]! h-[80px]!"
                        />
                    )}
                />
                <Controller
                    name="image"
                    rules={{ required: "Image is required" }}
                    control={control}
                    render={({ field }) => (
                        <ImageUpload
                            label="Image"
                            error={errors?.image?.message as string}
                            {...field}
                        />
                    )}
                />
            </div>
            <div className="flex gap-[20px] justify-between">
                <Controller
                    name="actualPrice"
                    rules={{ required: "Price is required" }}
                    control={control}
                    render={({ field }) => (
                        <Input
                            label="Price"
                            type="number"
                            error={errors?.actualPrice?.message as string}
                            {...field}
                        />
                    )}
                />
                <Controller
                    name="offerPrice"
                    rules={{ required: "Offer Price is required" }}
                    control={control}
                    render={({ field }) => (
                        <Input
                            label="Offer Price"
                            type="number"
                            error={errors?.offerPrice?.message as string}
                            {...field}
                        />
                    )}
                />
            </div>
        </div>
    );
};

export default BasicDetails;
