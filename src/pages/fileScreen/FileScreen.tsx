import TableHeader from "../../builders/table-header-builder/TableHeaders";
import Box from "../../components/box/Box";
import BreadCrumb from "../../components/bread-crumb/BreadCrumb";
import File from "../../components/file/File";

const FileScreen = () => {
    return (
        <div className="grid gap-4 grid-rows-[auto_auto_1fr] h-full">
            <div className="w-max bg-white p-2 rounded-lg">
                <BreadCrumb />
            </div>
            <TableHeader headerConfig={{ title: "Files" }} />
            <Box className="h-full">
                <div className="grid grid-cols-[repeat(auto-fill,minmax(100px,1fr))] gap-4 ">
                    {Array.from({ length: 10 }).map((_, i) => (
                        <File key={`file-${i}`} />
                    ))}
                </div>
            </Box>
        </div>
    );
};

export default FileScreen;
