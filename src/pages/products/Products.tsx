import Table from "../../builders/table-builder/Table";
import TableHeader from "../../builders/table-header-builder/TableHeaders";
import { dummyData, productTableColumn } from "./products-table.config";

const Products = () => {
    return (
        <div className="grid gap-3">
            <TableHeader headerConfig={{ title: "Products" }} />
            <Table
                data={dummyData}
                columns={productTableColumn}
            />
        </div>
    );
};

export default Products;
