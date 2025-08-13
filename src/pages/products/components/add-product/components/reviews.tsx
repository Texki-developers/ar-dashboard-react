import { Controller, type Control, type FieldErrors } from "react-hook-form";
import Input from "../../../../../components/form-components/Input";
import type { IAddProductModal } from "../AddProductModal";
import { useEffect, useState } from "react";
import { extractYouTubeId } from "../../../../../utils/utils";

const Reviews = ({
    control,
    errors,
    watch,
}: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    control: Control<IAddProductModal, any, IAddProductModal>;
    errors: FieldErrors<IAddProductModal>;
    watch: (name: string) => string;
}) => {
    const [embedLink, setEmbedLink] = useState<string>("");
    const youtubeEmbedLink = watch("youtubeEmbedLink");
    useEffect(() => {
        if (youtubeEmbedLink) {
            const id = extractYouTubeId(youtubeEmbedLink);
            if (id) {
                setEmbedLink(`https://www.youtube.com/embed/${id}`);
            }
        }
    }, [youtubeEmbedLink]);
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
            {embedLink && (
                <div className="w-full">
                    <iframe
                        width="560"
                        height="315"
                        src={embedLink}
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    />
                </div>
            )}
        </div>
    );
};

export default Reviews;
