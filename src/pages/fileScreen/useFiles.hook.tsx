import { useParams } from "react-router";
import Http from "../../service/http";
import type { ApiResponse } from "../../models/api.type";
import type { IFileResponseData } from "./file.type";
import { useQuery } from "@tanstack/react-query";

const useFiles = () => {
  const { id } = useParams();
  const getFiles = async () => {
    const response = await Http.get<ApiResponse<IFileResponseData[]>>(`/file/items?folderId=${id}`);
    return response.data;
  };

  const { data: files, isLoading: filesLoading } = useQuery({
    queryKey: ["files", id],
    queryFn: async () => {
      return getFiles();
    },
  });

  return { files, filesLoading };
};

export default useFiles;
