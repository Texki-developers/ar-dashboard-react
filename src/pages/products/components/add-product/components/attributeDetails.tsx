import { Controller, type Control, type FieldErrors } from "react-hook-form";
import CustomSelect, { type OptionType } from "../../../../../components/form-components/Select";
import { EFoodSpecialty, EFoodType } from "../../../model.type";
import CustomCreatableSelect from "../../../../../components/form-components/CreatableSelect";
import type { IAddProductModal } from "../AddProductModal";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const AttributeDetails = ({ control, errors }: { control: Control<IAddProductModal, any, IAddProductModal>; errors: FieldErrors<IAddProductModal> }) => {
    return (
        <div className="border-t border-[#0000001f] py-4">
            <h2 className="text-lg ">Attribute Details</h2>
            <div className="flex gap-[20px] justify-between">
                <Controller
                    name="isRecommended"
                    control={control}
                    rules={{ required: "Is Recommended is required" }}
                    render={({ field }) => (
                        <CustomSelect
                            label="Is Recommended"
                            options={isRecommendedOptions}
                            error={errors?.isRecommended?.message as string}
                            {...field}
                        />
                    )}
                />

                <Controller
                    name="specialty"
                    control={control}
                    rules={{ required: "Specialty is required" }}
                    render={({ field }) => (
                        <CustomSelect
                            label="Specialty"
                            options={Object.entries(EFoodSpecialty).map(([key, value]) => ({
                                label: value,
                                value: key,
                            }))}
                            error={errors?.specialty?.message as string}
                            {...field}
                        />
                    )}
                />
            </div>
            <div className="flex gap-[20px] justify-between">
                <Controller
                    name="recipes"
                    control={control}
                    rules={{ required: "Recipes is required" }}
                    render={({ field }) => (
                        <CustomCreatableSelect
                            label="Recipes"
                            onCreateOption={(value) => {
                                field?.onChange(value);
                            }}
                            placeholder="Add Recipe"
                            options={[]}
                            error={errors?.recipes?.message as string}
                            isMulti
                            {...field}
                        />
                    )}
                />
                <Controller
                    name="foodType"
                    control={control}
                    rules={{ required: "Food Type is required" }}
                    render={({ field }) => (
                        <CustomSelect
                            label="Food Type"
                            options={Object.entries(EFoodType).map(([key, value]) => ({
                                label: value,
                                value: key,
                            }))}
                            error={errors?.foodType?.message as string}
                            {...field}
                        />
                    )}
                />
            </div>
        </div>
    );
};

export default AttributeDetails;

const isRecommendedOptions: OptionType[] = [
    { label: "Yes", value: true },
    { label: "No", value: false },
];
