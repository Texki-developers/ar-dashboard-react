import TableHeader from "../../builders/table-header-builder/TableHeaders";
import Box from "../../components/box/Box";
import BreadCrumb from "../../components/bread-crumb/BreadCrumb";
import File from "../../components/file/File";
import useFiles from "./useFiles.hook";
import Loader from "../../components/loader/Loader";
import Empty from "../../components/empty/Empty";
import { useState } from "react";
import ConfirmPopup from "../../components/confirm-popup/ConfirmPopup";
import ModelViewerRender from "../../components/three-model-viewer/ModelViewerRender";
import type { IFileResponseData } from "./file.type";

const FileScreen = () => {
    const [showModal, setShowModal] = useState(false);
    const [selectedFile, setSelectedFile] = useState<IFileResponseData | null>(null);
    const [showConfirmPopup, setShowConfirmPopup] = useState(false);
    const { files, filesLoading, deleteFile } = useFiles();
    const [deleteFileId, setDeleteFileId] = useState<string | null>(null);

    const onFileRemove = (fileId: string) => {
        setShowConfirmPopup(true);
        setDeleteFileId(fileId);
    };

    return (
        <div className="grid gap-4 grid-rows-[auto_auto_1fr] h-full">
            <div className="w-max bg-white p-2 rounded-lg">
                <BreadCrumb />
            </div>
            <TableHeader headerConfig={{ title: "Files" }} />
            <Box className="h-full">
                {filesLoading ? (
                    <Loader />
                ) : files?.length === 0 ? (
                    <Empty title="No files found" />
                ) : (
                    <div className="grid grid-cols-[repeat(auto-fill,minmax(100px,1fr))] gap-4 ">
                        {files?.map((file) => (
                            <File
                                key={`file-${file._id}`}
                                name={file.file_name}
                                model={file.glb_file}
                                onClick={() => {
                                    setSelectedFile(file);
                                    setShowModal(true);
                                }}
                                onFileRemove={() => onFileRemove(file._id)}
                            />
                        ))}
                    </div>
                )}
            </Box>
            {selectedFile && (
                <ModelViewerRender
                    show={showModal}
                    onClose={() => setShowModal(false)}
                    name={selectedFile?.file_name}
                    src={selectedFile?.glb_file}
                />
            )}
            <ConfirmPopup
                show={!!showConfirmPopup && !!deleteFileId}
                onClose={() => setShowConfirmPopup(false)}
                title="Are you sure you want to delete this file?"
                negativeButtonLabel="Cancel"
                positiveButtonLabel="Delete"
                onNegativeClick={() => setShowConfirmPopup(false)}
                onPositiveClick={() => {
                    setShowConfirmPopup(false);
                    deleteFile(deleteFileId!);
                }}
            />
        </div>
    );
};

export default FileScreen;
