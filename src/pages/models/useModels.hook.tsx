import { useQuery } from "@tanstack/react-query";
import Http from "../../service/http";
import type { ApiResponse } from "../../models/api.type";
import type { IModelsApiResponse } from "./models.type";

const useModels = () => {
    const getModels = async () => {
        const response = await Http.get<ApiResponse<IModelsApiResponse[]>>("/folder/all");
        return response.data;
    };
    const { data: models, isLoading: modelsLoading } = useQuery({
        queryKey: ["models"],
        queryFn: async () => {
            return getModels();
        },
    });
    return {
        models,
        modelsLoading,
    };
};

export default useModels;
