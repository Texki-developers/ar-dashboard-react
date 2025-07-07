/* eslint-disable @typescript-eslint/no-explicit-any */
import type { ActionDispatch } from "react";
import { emailRegex } from "../../../constants/form";
import { InputValidationRules, type IFormConfig } from "../../../models/form";
import type { IErrorAction } from "../reducers";

interface IValidateFormProps {
  config: IFormConfig;
  formData: any;
  errorDispatch: ActionDispatch<[action: IErrorAction]>;
}

export const validateForm = ({ config, formData, errorDispatch }: IValidateFormProps): boolean => {
  let hasError = false;
  for (const field of config.fields) {
    for (const rule of field.rules) {
      switch (rule) {
        case InputValidationRules.required:
          if (!formData[field.id]) {
            errorDispatch({ type: "SET_ERROR", id: field.id, value: "This field is required" });
            hasError = true;
          } else {
            errorDispatch({ type: "SET_ERROR", id: field.id, value: "" });
          }
          break;
        case InputValidationRules.email:
          if (!String(formData[field.id]).toLocaleLowerCase().match(emailRegex)) {
            errorDispatch({ type: "SET_ERROR", id: field.id, value: "Invalid email" });
            hasError = true;
          } else {
            errorDispatch({ type: "SET_ERROR", id: field.id, value: "" });
          }
          break;
        default:
          console.error("Invalid validation rule", rule);
          hasError = true;
          break;
      }
    }
  }

  return hasError;
};
