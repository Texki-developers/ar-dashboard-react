import { useParams } from "react-router";
import { DeleteIcon, EditIcon } from "../../assets/svg-icons";
import TableHeader from "../../builders/table-header-builder/TableHeaders";
import Box from "../../components/box/Box";
import { productDetailsConfig } from "./product-details.config";
import { useProductDetails } from "./useProductDetails.hook";
import type { IProduct } from "../../service/apis/product/product.type";
import ConfirmPopup from "../../components/confirm-popup/ConfirmPopup";
import AddProductModal from "../products/components/add-product/AddProductModal";
import { useState } from "react";

const ProductDetails = () => {
    const [showModal, setShowModal] = useState(false);
    const { id } = useParams<string>();
    const { product, isLoading, deleteProduct, isDeleting, showConfirmPopup, onProductRemove, setShowConfirmPopup } = useProductDetails(id!);
    console.log({ product });
    return (
        <div>
            <div className="grid gap-4 grid-rows-[auto_1fr] h-full">
                <TableHeader
                    showBackButton
                    headerConfig={{ title: product?.name ?? "" }}
                    actions={
                        <div className="flex gap-2">
                            <div
                                onClick={onProductRemove}
                                className="p-2 cursor-pointer hover:bg-gray-100 rounded-md">
                                <DeleteIcon color="#000" />
                            </div>
                            <div
                                onClick={() => setShowModal(true)}
                                className="p-2 cursor-pointer hover:bg-gray-100 rounded-md">
                                <EditIcon color="#000" />
                            </div>
                        </div>
                    }
                />
                <Box
                    isLoading={isLoading || isDeleting}
                    className="h-full">
                    <h2 className="text-lg font-semibold">Product Details</h2>
                    {product && (
                        <div className="grid gap-2 mt-5">
                            {productDetailsConfig.map((config) => (
                                <div
                                    key={config.label}
                                    className="grid grid-cols-[200px_1fr] gap-2">
                                    <span className="font-medium">{config.label} :</span>
                                    <span>{config?.render ? config.render(product) ?? "-" : (product?.[config?.sourceKey as keyof IProduct] as string) ?? "-"}</span>
                                </div>
                            ))}
                        </div>
                    )}
                </Box>
            </div>
            <ConfirmPopup
                show={showConfirmPopup}
                onClose={() => setShowConfirmPopup(false)}
                title="Are you sure you want to delete this product?"
                negativeButtonLabel="Cancel"
                positiveButtonLabel="Delete"
                onNegativeClick={() => setShowConfirmPopup(false)}
                onPositiveClick={() => {
                    setShowConfirmPopup(false);
                    deleteProduct();
                }}
            />
            {product && (
                <AddProductModal
                    key={product._id}
                    show={showModal}
                    onClose={() => setShowModal(false)}
                    isEdit
                    product={product}
                />
            )}
        </div>
    );
};

export default ProductDetails;
