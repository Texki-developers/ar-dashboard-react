import TableHeader from "../../builders/table-header-builder/TableHeaders";
import Box from "../../components/box/Box";
import Folder from "../../components/folder/Folder";

const Models = () => {
    return (
        <div className="grid gap-4 grid-rows-[auto_1fr] h-full">
            <TableHeader headerConfig={{ title: "Models" }} />
            <Box className="h-full">
                <div className="grid grid-cols-[repeat(auto-fill,minmax(100px,1fr))] gap-4 ">
                    {Array.from({ length: 10 }).map((_, i) => (
                        <Folder key={`folder-${i}`} />
                    ))}
                </div>
            </Box>
        </div>
    );
};

export default Models;
