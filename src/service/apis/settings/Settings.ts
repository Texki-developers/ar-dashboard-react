import Http from "../../http";
import type { ApiResponse } from "../../../models/api.type";
import type { IProfileSettings } from "./Settings.type";
import type { IUpdateVendor } from "../../../pages/settings/pages/profile/components/UpdateVendor";

class SettingsApi extends Http {
  static async getProfileSettings() {
    const response = await this.get<ApiResponse<IProfileSettings>>("/user/get");
    return response.data;
  }

  static async updateVendor(data: IUpdateVendor, id: string) {
    const response = await this.formData<ApiResponse<IProfileSettings>>(`/user/update/${id}`, data, "PUT");
    return response.data;
  }
}

export default SettingsApi;
