import type { ActionDispatch } from "react";
import type { Actions, IFormConfig } from "../../models/form";
import { validateForm } from "./actions/validate-form";
import type { IButtonLoadingAction, IErrorAction, IFormAction, IFormState } from "./reducers";

interface IActionProps {
    formData: IFormState;
    dispatch: ActionDispatch<[action: IFormAction]>;
    action: Actions;
    config: IFormConfig;
    errorDispatch: ActionDispatch<[action: IErrorAction]>;
    setButtonsLoading: ActionDispatch<[action: IButtonLoadingAction]>;
}

export const actions = ({ formData, action, config, errorDispatch, setButtonsLoading }: IActionProps): boolean => {
    switch (action.type) {
        case "validate_form":
            return validateForm({ formData, config, errorDispatch });

        case "set_button_loading":
            if (action?.buttonId) {
                setButtonsLoading({ type: "SET_BUTTON_LOADING", id: action.buttonId, value: true });
            }
            return false;
        default:
            break;
    }
    console.error("Invalid action type", action.type);
    return true;
};
