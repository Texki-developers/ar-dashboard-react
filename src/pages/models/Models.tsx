import TableHeader from "../../builders/table-header-builder/TableHeaders";
import Box from "../../components/box/Box";
import Folder from "../../components/folder/Folder";
import useModels from "./useModels.hook";
import Loader from "../../components/loader/Loader";
import { useNavigate } from "react-router";
import Empty from "../../components/empty/Empty";

const Models = () => {
    const navigate = useNavigate();
    const { models, modelsLoading } = useModels();
    return (
        <div className="grid gap-4 grid-rows-[auto_1fr] h-full">
            <TableHeader headerConfig={{ title: "Models" }} />
            <Box className="h-full">
                {modelsLoading ? (
                    <Loader />
                ) : models?.data?.length === 0 ? (
                    <Empty title="No models found" />
                ) : (
                    <div className="grid grid-cols-[repeat(auto-fill,minmax(100px,1fr))] gap-4 ">
                        {models?.data?.map((model) => (
                            <Folder
                                onClick={() => {
                                    navigate(`/models/${model._id}`);
                                }}
                                key={`folder-${model._id}`}
                                folderName={model.folder_name}
                            />
                        ))}
                    </div>
                )}
            </Box>
        </div>
    );
};

export default Models;
