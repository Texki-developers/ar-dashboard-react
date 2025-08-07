import Table from "../../builders/table-builder/Table";
import TableHeader from "../../builders/table-header-builder/TableHeaders";
import AddProductModal from "./components/add-product/AddProductModal";
import { productTableColumn } from "./products-table.config";
import { useState } from "react";
import useProducts from "./useProducts.hook";
import Loader from "../../components/loader/Loader";

const Products = () => {
    const { products, productsLoading } = useProducts();
    const [showModal, setShowModal] = useState(false);
    return (
        <div className="grid gap-3">
            <TableHeader
                headerConfig={{ title: "Products" }}
                actionButton={{
                    label: "Add Product",
                    onClick: () => setShowModal(true),
                }}
            />
            {productsLoading ? (
                <Loader />
            ) : (
                products?.data && (
                    <Table
                        data={products?.data}
                        columns={productTableColumn}
                    />
                )
            )}
            <AddProductModal
                show={showModal}
                onClose={() => setShowModal(false)}
            />
        </div>
    );
};

export default Products;
