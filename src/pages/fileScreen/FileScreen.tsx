import TableHeader from "../../builders/table-header-builder/TableHeaders";
import Box from "../../components/box/Box";
import BreadCrumb from "../../components/bread-crumb/BreadCrumb";
import File from "../../components/file/File";
import useFiles from "./useFiles.hook";
import Loader from "../../components/loader/Loader";
import Empty from "../../components/empty/Empty";
import ModalWrapper from "../../components/modal/ModalWrapper";
import { useState } from "react";
import ModelViewer from "./components/ModelViewer";
import { CloseIcon } from "../../assets/svg-icons";

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
                                model={file.glb_file}
                                onClick={() => setShowModal(true)}
                            />
                        ))}
                    </div>
                )}
            </Box>
            {files?.data?.[0]?.glb_file && (
                <ModalWrapper
                    show={showModal}
                    onClose={() => setShowModal(false)}
                >
                    <div className="flex justify-between">
                        <h5 className="text-[24px] font-semibold">{files?.data?.[0]?.file_name}</h5>
                        <button className="cursor-pointer" onClick={() => setShowModal(false)}>
                            <CloseIcon width="18" height="18" />
                        </button>
                    </div>
                    <ModelViewer src={import.meta.env.VITE_FILE_URL + files?.data?.[0]?.glb_file} />
                </ModalWrapper>
            )}
        </div>
    );
};

export default FileScreen;
