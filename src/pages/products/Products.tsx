import Table from "../../builders/table-builder/Table";
import TableHeader from "../../builders/table-header-builder/TableHeaders";
import AddProductModal from "./components/add-product/AddProductModal";
import { productTableColumn } from "./products-table.config";
import { useState } from "react";
import useProducts from "./useProducts.hook";
import Loader from "../../components/loader/Loader";
import { useNavigate } from "react-router";
import { RouteURLs } from "../../router/routeUrls";

const Products = () => {
    const navigate = useNavigate();
    const { products, productsLoading } = useProducts();
    const [showModal, setShowModal] = useState(false);
    return (
        <div>
            <div className="grid gap-3">
                <TableHeader
                    headerConfig={{ title: "Products" }}
                    actionButton={{
                        label: "Add Product",
                        onClick: () => setShowModal(true),
                    }}
                    showSearch
                />
                {productsLoading ? (
                    <Loader />
                ) : (
                    products?.data && (
                        <Table
                            data={products?.data}
                            columns={productTableColumn}
                            onRowClick={(item) => {
                                navigate(`${RouteURLs.Products}/${item._id}`);
                            }}
                        />
                    )
                )}
                <AddProductModal
                    show={showModal}
                    onClose={() => setShowModal(false)}
                />
            </div>
        </div>
    );
};

export default Products;
