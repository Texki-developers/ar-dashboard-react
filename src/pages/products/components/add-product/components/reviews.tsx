import { Controller, type Control, type FieldErrors } from "react-hook-form";
import Input from "../../../../../components/form-components/Input";
import type { IAddProductModal } from "../AddProductModal";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Reviews = ({ control, errors }: { control: Control<IAddProductModal, any, IAddProductModal>; errors: FieldErrors<IAddProductModal> }) => {
    return (
        <div className="border-t border-[#0000001f] py-4">
            <h2 className="text-lg ">Reviews</h2>
            <div className="flex gap-[20px] justify-between">
                <Controller
                    name="youtubeEmbedLink"
                    control={control}
                    render={({ field }) => (
                        <Input
                            label="Youtube Embed Link"
                            error={errors?.youtubeEmbedLink?.message as string}
                            {...field}
                        />
                    )}
                />
            </div>
        </div>
    );
};

export default Reviews;
