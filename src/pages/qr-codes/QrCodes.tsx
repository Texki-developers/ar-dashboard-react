import TableHeader from "../../builders/table-header-builder/TableHeaders";
import Box from "../../components/box/Box";
import QrCard from "../../components/qr-card/QrCard";

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
            <Box className="h-full max-h-[calc(100vh-115px)] overflow-y-auto">
                <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4 ">
                    <QrCard />
                    <QrCard />
                    <QrCard />
                    <QrCard />
                    <QrCard />
                    <QrCard />
                    <QrCard />
                    <QrCard />
                    <QrCard />
                    <QrCard />
                </div>
            </Box>
        </div>
    );
};

export default QrCodes;
