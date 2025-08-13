import { useEffect, useState } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { ModelApi } from "../../service/apis/models/model";
import type { IModelsApiResponse } from "./models.type";

const useModels = () => {
  const [models, setModels] = useState<IModelsApiResponse[]>([]);
  const { data, isLoading: modelsLoading } = useQuery({
    queryKey: ["models"],
    queryFn: async () => {
      return ModelApi.getFolder();
    },
  });

  useEffect(() => {
    if (data?.data) {
      setModels(data?.data);
    }
  }, [data]);

  const deleteFolder = useMutation({
    mutationFn: async (id: string) => {
      return ModelApi.deleteFolder(id);
    },
    onSuccess: (data) => {
      setModels(data?.data);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  return {
    models,
    modelsLoading,
    deleteFolder,
  };
};

export default useModels;
