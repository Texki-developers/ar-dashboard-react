import TableHeader from "../../builders/table-header-builder/TableHeaders";
import Box from "../../components/box/Box";
import Folder from "../../components/folder/Folder";
import useModels from "./useModels.hook";
import Loader from "../../components/loader/Loader";
import { useNavigate } from "react-router";
import Empty from "../../components/empty/Empty";
import { useEffect, useState } from "react";
import ConfirmPopup from "../../components/confirm-popup/ConfirmPopup";


const Models = () => {
    const navigate = useNavigate();
    const [showConfirmPopup, setShowConfirmPopup] = useState(false);
    const [deleteFolderId, setDeleteFolderId] = useState<string | null>(null);
    const { models, modelsLoading, deleteFolder } = useModels();

    const removeModelHandler = (folderId: string) => {
        setDeleteFolderId(folderId);
        setShowConfirmPopup(true);
    };

    useEffect(() => {
        if (deleteFolder?.isSuccess) {
            setShowConfirmPopup(false);
            setDeleteFolderId(null);
        }
    }, [deleteFolder?.isSuccess]);

    return (
        <div className="grid gap-4 grid-rows-[auto_1fr] h-full">
            <TableHeader headerConfig={{ title: "Models" }} />
            <Box className="h-full">
                {modelsLoading ? (
                    <Loader />
                ) : models?.length === 0 ? (
                    <Empty title="No models found" />
                ) : (
                    <div className="grid grid-cols-[repeat(auto-fill,minmax(100px,1fr))] gap-4 ">
                        {models?.map((model) => (
                            <Folder
                                onClick={() => {
                                    navigate(`/models/${model._id}`);
                                }}
                                onFileRemove={() => removeModelHandler(model._id)}
                                key={`folder-${model._id}`}
                                folderName={model.folder_name}
                            />
                        ))}
                    </div>
                )}
            </Box>
            <ConfirmPopup
                show={showConfirmPopup}
                onClose={() => setShowConfirmPopup(false)}
                title="Are you sure you want to delete this model?"
                negativeButtonLabel="Cancel"
                positiveButtonLabel="Delete"
                positiveLoading={deleteFolder?.isPending}
                onNegativeClick={() => setShowConfirmPopup(false)}
                onPositiveClick={() => {
                    setShowConfirmPopup(false);
                    deleteFolder.mutate(deleteFolderId!);
                }}
            />
        </div>
    );
};

export default Models;
