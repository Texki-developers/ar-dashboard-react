import { useParams } from "react-router";
import { DeleteIcon, EditIcon } from "../../assets/svg-icons";
import TableHeader from "../../builders/table-header-builder/TableHeaders";
import Box from "../../components/box/Box";
import { productDetailsConfig } from "./product-details.config";
import { useProductDetails } from "./useProductDetails.hook";

const ProductDetails = () => {
    const { id } = useParams<string>();
    const { product, isLoading } = useProductDetails(id!);
    console.log({ product });
    return (
        <div>
            <div className="grid gap-4 grid-rows-[auto_1fr] h-full">
                <TableHeader
                    headerConfig={{ title: "Biriyani" }}
                    actions={
                        <div className="flex gap-2">
                            <div
                                onClick={() => { }}
                                className="p-2 cursor-pointer hover:bg-gray-100 rounded-md">
                                <DeleteIcon color="#000" />
                            </div>
                            <div
                                onClick={() => { }}
                                className="p-2 cursor-pointer hover:bg-gray-100 rounded-md">
                                <EditIcon color="#000" />
                            </div>
                        </div>
                    }
                />
                <Box isLoading={isLoading} className="h-full">
                    <h2 className="text-lg font-semibold">Product Details</h2>
                    <div className="grid gap-2 mt-5">
                        {productDetailsConfig.map((config) => (
                            <div key={config.label} className="grid grid-cols-[200px_1fr] gap-2">
                                <span className="font-medium">{config.label}:</span>
                                <span>{config.render ? config.render() : ""}</span>
                            </div>
                        ))}
                    </div>
                </Box>
            </div>
        </div>
    );
};

export default ProductDetails;
