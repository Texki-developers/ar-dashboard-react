import { useQuery } from "@tanstack/react-query";
import { ModelApi } from "../../service/apis/models/model";

const useModels = () => {
    const { data: models, isLoading: modelsLoading } = useQuery({
        queryKey: ["models"],
        queryFn: async () => {
            return ModelApi.getFolder();
        },
    });
    return {
        models,
        modelsLoading,
    };
};

export default useModels;
