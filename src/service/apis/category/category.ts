import type { ApiResponse } from "../../../models/api.type";
import Http from "../../http";
import type { ICategory } from "./category.type";

export class CategoryApi extends Http {
  static getCategoryList = async () => {
    const response = await this.get<ApiResponse<ICategory[]>>("/crm/product/category");
    return response.data;
  };
  static addCategory = async ({ name, priority }: { name: string; priority: number }) => {
    const response = await this.post<{ name: string; priority: number }, ApiResponse<ICategory>>("/crm/product/category", { name, priority });
    return response.data;
  };
}
