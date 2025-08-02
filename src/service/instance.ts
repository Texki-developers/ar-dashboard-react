import axios from "axios";
import { authStore } from "../store/auth.store";
import { queryClient } from "../main";
import { toast } from "react-toastify";

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.status === 401) {
      authStore?.setState({
        token: "",
        user: null,
      });
      queryClient?.resetQueries();
      toast.error("Session expired");
      window.location.href = "/auth";
    }
    return Promise.reject(error);
  }
);
