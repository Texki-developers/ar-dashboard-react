/* eslint-disable @typescript-eslint/no-explicit-any */
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

  static async formData<T>(url: string, data: any, method: "POST" | "PUT" = "POST") {
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]: any) => {
      formData.append(key, value);
    });
    if (method === "PUT") {
      return api.put<T>(url, formData, {
        headers: { ...this.getHeaders(), "Content-Type": "multipart/form-data" },
      });
    }
    return api.post<T>(url, formData, {
      headers: { ...this.getHeaders(), "Content-Type": "multipart/form-data" },
    });
  }

  static async delete<T>(url: string, data?: T) {
    return api.delete<T>(url, {
      headers: this.getHeaders(),
      data,
    });
  }
}

export default Http;
