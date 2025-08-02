import type { ActionDispatch } from "react";
import type { Actions, IFormConfig } from "../../models/form";
import type { IButtonLoadingAction, IErrorAction, IFormAction, IFormState } from "./reducers";
import { conditionalAction, submitForm, validateForm } from "./actions";
import { useNavigate } from "react-router";

export interface IActionProps {
    formData: IFormState;
    dispatch: ActionDispatch<[action: IFormAction]>;
    action: Actions;
    config: IFormConfig;
    errorDispatch: ActionDispatch<[action: IErrorAction]>;
    setButtonsLoading: ActionDispatch<[action: IButtonLoadingAction]>;
    buttonId?: string;
}

const useActionBuilder = () => {
    const navigation = useNavigate();
    const actions = async (actionProps: IActionProps): Promise<boolean> => {
        const { formData, action, config, errorDispatch, setButtonsLoading, buttonId } = actionProps;
        switch (action.type) {
            case "validate_form":
                return validateForm({ formData, config, errorDispatch });
            case "conditional":
                conditionalAction(actionProps, actions);
                return false;
            case "set_button_loading":
                if (action.buttonId) setButtonsLoading({ type: "SET_BUTTON_LOADING", id: action.buttonId, value: true });
                return false;
            case "submit_form":
                return await submitForm({ action, formData, setButtonsLoading, buttonId });
            case "navigate":
                if (action.payload?.url) {
                    navigation(action.payload.url);
                }
                return false;
            default:
                break;
        }
        console.error("Invalid action type", action.type);
        return true;
    };
    return { actions };
};

export default useActionBuilder;
