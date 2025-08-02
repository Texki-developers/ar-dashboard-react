import type { Actions } from "../../../models/form";
import axios from "axios";
import type { IFormState } from "../reducers";
import type { ActionDispatch } from "react";
import type { IButtonLoadingAction } from "../reducers";
import { toast } from "react-toastify";
import { authStore } from "../../../store/auth.store";

export const submitForm = async ({
  action,
  formData,
  setButtonsLoading,
  buttonId,
}: {
  action: Actions;
  formData: IFormState;
  setButtonsLoading: ActionDispatch<[action: IButtonLoadingAction]>;
  buttonId?: string;
}): Promise<boolean> => {
  if (action.payload?.apiEndpoint && action.payload?.apiMethod) {
    try {
      console.log({ api: import.meta.env.VITE_API_URL });
      setButtonsLoading({ type: "SET_BUTTON_LOADING", id: buttonId ?? "", value: true });
      const response = await axios({
        method: action.payload.apiMethod,
        url: action.payload.apiEndpoint,
        data: formData,
      });
      if ([200, 201].includes(response.status)) {
        toast.success(action?.payload?.apiSuccessMessage ?? "Form submitted successfully");
        if (action?.payload?.isLogin) {
          authStore.setState({
            token: response.data?.data?.token,
            user: response.data?.data?.user,
          });
        }
        return false;
      } else {
        toast.error(action?.payload?.apiErrorMessage ?? "Error submitting form");
        return true;
      }
    } catch (error) {
      console.error("Error submitting form", error);
      toast.error(action?.payload?.apiErrorMessage ?? "Error submitting form");
      return true;
    } finally {
      setButtonsLoading({ type: "REMOVE_BUTTON_LOADING", id: buttonId ?? "", value: false });
    }
  }
  return false;
};
