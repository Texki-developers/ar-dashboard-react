import TableHeader from "../../builders/table-header-builder/TableHeaders";
import Box from "../../components/box/Box";
import TableCard from "../../components/table-card/TableCard";
import AddTable from "./components/AddTable";
import { useState } from "react";
import useTables from "./useTable";
import Empty from "../../components/empty/Empty";
import Loader from "../../components/loader/Loader";

const Tables = () => {
  const [showAddTable, setShowAddTable] = useState(false);
  const { tables, isLoading } = useTables();
  return (
    <div className="grid gap-4 grid-rows-[auto_1fr] h-full">
      <TableHeader
        headerConfig={{ title: "Tables" }}
        actionButton={{
          label: "Add Table",
          onClick: () => setShowAddTable(true),
        }}
      />
      <Box className="h-full max-h-[calc(100vh-115px)] overflow-y-auto">
        {isLoading ? (
          <Loader />
        ) : tables?.length === 0 ? (
          <Empty title="No tables found" />
        ) : (
          <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4 ">
            {tables?.map((table) => (
              <TableCard
                key={table._id}
                tableNumber={table.table_number}
                vendorId={table.vendor_id}
              />
            ))}
          </div>
        )}
      </Box>
      {showAddTable && (
        <AddTable
          show={showAddTable}
          onClose={() => setShowAddTable(false)}
        />
      )}
    </div>
  );
};

export default Tables;
