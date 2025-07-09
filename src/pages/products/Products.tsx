import Table from "../../builders/table-builder/Table";
import TableHeader from "../../builders/table-header-builder/TableHeaders";
import { dummyData, productTableColumn } from "./products-table.config";

const Products = () => {
    return (
        <div className="p-6 grid gap-3">
            <TableHeader />
            <Table
                data={dummyData}
                columns={productTableColumn}
            />
        </div>
    );
};

export default Products;
