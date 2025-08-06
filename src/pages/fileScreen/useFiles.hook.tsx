import { useParams } from "react-router";
import Http from "../../service/http";
import type { ApiResponse } from "../../models/api.type";
import type { IFileResponseData } from "./file.type";
import { useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { useState, useEffect } from "react";

const useFiles = () => {
  const { id } = useParams();
  const [files, setFiles] = useState<IFileResponseData[]>([]);
  const getFiles = async () => {
    const response = await Http.get<ApiResponse<IFileResponseData[]>>(`/file/items?folderId=${id}`);
    return response.data;
  };

  const deleteFile = async (fileId: string) => {
    try {
      const response = await Http.delete<ApiResponse<IFileResponseData[]>>(`/file/delete?fileId=${fileId}`);
      if (response.status === 200 && response?.data?.data) {
        toast.success("File deleted successfully");
        setFiles(response?.data?.data);
      } else {
        toast.error(response?.data?.message || "Error deleting file");
      }
    } catch (error) {
      console.error(error);
      toast.error("Error deleting file");
    }
  };

  const { data, isLoading: filesLoading } = useQuery({
    queryKey: ["files", id],
    queryFn: async () => {
      return getFiles();
    },
  });

  useEffect(() => {
    if (data?.data) {
      setFiles(data?.data);
    }
  }, [data]);

  return { files, filesLoading, deleteFile };
};

export default useFiles;
