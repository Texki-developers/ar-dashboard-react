import TableHeader from "../../builders/table-header-builder/TableHeaders";
import Box from "../../components/box/Box";
import BreadCrumb from "../../components/bread-crumb/BreadCrumb";
import File from "../../components/file/File";
import useFiles from "./useFiles.hook";
import Loader from "../../components/loader/Loader";
import Empty from "../../components/empty/Empty";
import ModalWrapper from "../../components/modal/ModalWrapper";
import { useState } from "react";

const FileScreen = () => {
    const [showModal, setShowModal] = useState(false);
    const { files, filesLoading } = useFiles();
    return (
        <div className="grid gap-4 grid-rows-[auto_auto_1fr] h-full">
            <div className="w-max bg-white p-2 rounded-lg">
                <BreadCrumb />
            </div>
            <TableHeader headerConfig={{ title: "Files" }} />
            <Box className="h-full">
                {filesLoading ? (
                    <Loader />
                ) : files?.data?.length === 0 ? (
                    <Empty title="No files found" />
                ) : (
                    <div className="grid grid-cols-[repeat(auto-fill,minmax(100px,1fr))] gap-4 ">
                        {files?.data?.map((file) => (
                            <File
                                key={`file-${file._id}`}
                                name={file.file_name}
                                model={file.usdz_file}
                                onClick={() => setShowModal(true)}
                            />
                        ))}
                    </div>
                )}
            </Box>
            <ModalWrapper
                show={showModal}
                onClose={() => setShowModal(false)}
            />
        </div>
    );
};

export default FileScreen;
