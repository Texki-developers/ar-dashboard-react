import TableHeader from "../../builders/table-header-builder/TableHeaders";
import Box from "../../components/box/Box";

const QrCodes = () => {
    return (
        <div className="grid gap-4 grid-rows-[auto_1fr] h-full">
            <TableHeader
                headerConfig={{ title: "Models" }}
                actionButton={{
                    label: "Add Qr Code",
                    onClick: () => { },
                }}
            />
            <Box className="h-full">
                <div className="grid grid-cols-[repeat(auto-fill,minmax(100px,1fr))] gap-4 ">
                    <div className="flex flex-col gap-2">
                        <h1>Qr Code</h1>
                    </div>
                </div>
            </Box>
        </div>
    );
};

export default QrCodes;
