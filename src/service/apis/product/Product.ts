import type { ApiResponse } from "../../../models/api.type";
import Http from "../../http";
import type { IProduct, IProductApiBody } from "./product.type";

export class ProductApi extends Http {
  static async addProduct(product: IProductApiBody) {
    const response = await this.formData<ApiResponse<IProduct>>("/crm/product/create", product);
    return response.data;
  }
  static async getProducts() {
    const response = await this.get<ApiResponse<IProduct[]>>("/crm/product/items");
    return response.data;
  }
  static async getProductById(id: string) {
    const response = await this.get<ApiResponse<IProduct>>(`/crm/product/items/${id}`);
    return response.data;
  }
  static async deleteProduct(id: string) {
    const response = await this.delete<ApiResponse<IProduct>>(`/crm/product/items/${id}`);
    return response.data;
  }
  static async updateProduct(id: string, product: IProductApiBody) {
    const response = await this.formData<ApiResponse<IProduct>>(`/crm/product/items/update/${id}`, product, "PUT");
    return response.data;
  }
}
