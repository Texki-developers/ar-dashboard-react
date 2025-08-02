import { authStore } from "../store/auth.store";
import { api } from "./instance";

class Http {
  private static getHeaders() {
    const token = authStore.getState().token;
    return {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
  }

  static async get<T>(url: string) {
    return api.get<T>(url, {
      headers: this.getHeaders(),
    });
  }

  static async post<T>(url: string, data: T) {
    return api.post<T>(url, data, {
      headers: this.getHeaders(),
    });
  }
}

export default Http;
