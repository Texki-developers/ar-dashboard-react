import { useState } from "react";

const ImageUpload = ({ label = "Image", onChange, error }: { label: string; onChange: (e: File | undefined) => void; error?: string }) => {
    const [image, setImage] = useState<string | null>(null);

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        onChange(file);
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setImage(e.target?.result as string);
            };
            reader.readAsDataURL(file);
        }
    };
    return (
        <div className="py-2">
            <label
                htmlFor="image"
                className="block text-[16px] mb-2 text-[#333]">
                {label}
            </label>
            <div className=" relative border border-[#333] w-[250px] h-[80px] rounded-md flex justify-center items-center">
                {image ? (
                    <>
                        <img
                            className="h-full object-cover p-1 rounded-md"
                            src={image}
                            alt=""
                        />
                        <div className="absolute text-xs left-0 w-full h-full flex items-center text-shadow-2xs justify-center text-white bg-[#0000003a] pointer-events-none">
                            Change Image
                        </div>
                    </>
                ) : (
                    <p className="text-sm text-grayText pointer-events-none">Upload Image</p>
                )}
                <input
                    type="file"
                    id="image"
                    onChange={onChangeHandler}
                    accept="image/*"
                    className="h-full w-full absolute left-0 top-0 outline-0 opacity-0"
                />
            </div>
            <span className="text-red-500 text-[14px]">{error}</span>
        </div>
    );
};

export default ImageUpload;
