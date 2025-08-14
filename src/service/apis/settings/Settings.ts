import Http from "../../http";
import type { ApiResponse } from "../../../models/api.type";
import type { IProfileSettings } from "./Settings.type";

class SettingsApi extends Http {
  static async getProfileSettings() {
    const response = await this.get<ApiResponse<IProfileSettings>>("/user/get");
    return response.data;
  }
}

export default SettingsApi;
