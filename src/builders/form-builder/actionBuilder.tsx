import type { ActionDispatch } from "react";
import type { Actions, IFormConfig } from "../../models/form";
import type { IButtonLoadingAction, IErrorAction, IFormAction, IFormState } from "./reducers";
import { conditionalAction, validateForm } from "./actions";

export interface IActionProps {
    formData: IFormState;
    dispatch: ActionDispatch<[action: IFormAction]>;
    action: Actions;
    config: IFormConfig;
    errorDispatch: ActionDispatch<[action: IErrorAction]>;
    setButtonsLoading: ActionDispatch<[action: IButtonLoadingAction]>;
}

export const actions = (actionProps: IActionProps): boolean => {
    const { formData, action, config, errorDispatch, setButtonsLoading } = actionProps;
    switch (action.type) {
        case "validate_form":
            return validateForm({ formData, config, errorDispatch });
        case "conditional":
            conditionalAction(actionProps);
            return false;
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
