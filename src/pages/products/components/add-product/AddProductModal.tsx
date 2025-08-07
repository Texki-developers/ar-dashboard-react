/* eslint-disable @typescript-eslint/no-explicit-any */
import ModalWrapper from "../../../../components/modal/ModalWrapper";
import { useForm } from "react-hook-form";
import BasicDetails from "./components/basicDetails";
import { CloseIcon } from "../../../../assets/svg-icons";
import ModelDetails from "./components/modelDetails";
import AttributeDetails from "./components/attributeDetails";
import Reviews from "./components/reviews";
import Button from "../../../../components/button/Button";
import useAddProduct from "./useAddProduct.hook";

const AddProductModal = ({ onClose, show }: { onClose: () => void; show: boolean }) => {
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<IAddProductModal>();
    const { categories, categoriesLoading, setFolderId, folders, foldersLoading, files, filesLoading, onAddProductSubmit } = useAddProduct();
    const onSubmit = (data: IAddProductModal) => {
        onAddProductSubmit(data,onClose);
    };

    return (
        <ModalWrapper
            show={show}
            onClose={onClose}>
            <div className="min-w-[300px]">
                <div className="flex justify-between items-center py-4">
                    <h2 className="text-lg font-semibold">Add Product</h2>
                    <div
                        className="cursor-pointer"
                        onClick={onClose}>
                        <CloseIcon
                            width={20}
                            height={20}
                        />
                    </div>
                </div>
                <div>
                    <BasicDetails
                        categories={categories?.data}
                        categoriesLoading={categoriesLoading}
                        control={control}
                        errors={errors}
                    />
                    <ModelDetails
                        folders={folders?.data}
                        foldersLoading={foldersLoading}
                        files={files?.data}
                        filesLoading={filesLoading}
                        setFolderId={setFolderId}
                        control={control}
                        errors={errors}
                    />
                    <AttributeDetails
                        control={control}
                        errors={errors}
                    />
                    <Reviews
                        control={control}
                        errors={errors}
                    />
                    <div className="flex justify-end">
                        <Button onClick={handleSubmit(onSubmit)}>Submit</Button>
                    </div>
                </div>
            </div>
        </ModalWrapper>
    );
};

export default AddProductModal;


export interface IAddProductModal {
    name: string;
    desc: string;
    category: {
        label: string;
        value: string;
        isCreated?: boolean;
    };
    image: File;
    actualPrice: number;
    offerPrice: number;
    isRecommended: {
        label: string;
        value: string;
    };
    foodType: {
        label: string;
        value: string;
    };
    specialty: {
        label: string;
        value: string;
    }
    file: {
        label: string;
        value: string;
    };
    folder: {
        label: string;
        value: string;
    }
    recipes: {
        label: string;
        value: string;
    }[]
    youtubeEmbedLink: string;
}