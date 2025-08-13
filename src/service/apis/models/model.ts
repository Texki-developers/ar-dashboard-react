import type { ApiResponse } from "../../../models/api.type";
import type { IFileResponseData } from "../../../pages/fileScreen/file.type";
import type { IModelsApiResponse } from "../../../pages/models/models.type";
import Http from "../../http";
// Add your model interfaces here or import them as needed

export class ModelApi extends Http {
  static getFolder = async () => {
    const response = await Http.get<ApiResponse<IModelsApiResponse[]>>("/folder/all");
    return response.data;
  };

  static getFiles = async (id: string | number) => {
    const response = await Http.get<ApiResponse<IFileResponseData[]>>(`/file/items?folderId=${id}`);
    return response.data;
  };

  static deleteFolder = async (id: string | number) => {
    const response = await Http.delete<ApiResponse<IModelsApiResponse[]>>(`folder/delete?folderId=${id}`);
    return response.data;
  };
}
