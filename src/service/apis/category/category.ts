import Http from "../../http";
import type { ICategoryList } from "./category.type";

export class CategoryApi extends Http {
  static getCategoryList = async () => {
    const response = await this.get<ICategoryList>("/product/category");
    return response.data;
  };
}
