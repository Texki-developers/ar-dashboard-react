/* eslint-disable @typescript-eslint/no-explicit-any */

export interface IFormConfig {
  id: string;
  title: string;
  mode: "api" | "normal";
  apiEndpoint: string;
  fields: IFormField[];
  globalActions?: GlobalAction[];
  buttons?: IButton[];
}

export interface IFormField {
  id: string;
  label: string;
  type: "text" | "email" | "password";
  placeholder: string;
  rules: InputValidationRules[];
  options?: any[];
  conditions?: FormCondition[];
}

export interface FormCondition {
  field: string;
  operator: "equals" | "not_equals" | "exists" | "not_exists" | "contains";
  action: string;
}

export interface GlobalAction {
  trigger: string;
  field: string;
  actions: Actions[];
}

export interface Actions {
  type: ActionType;
  buttonId?: string;
  condition?: ICondition;
  payload?: {
    type?: "success" | "error" | "redirect";
    duration?: number;
    apiEndpoint?: string;
    apiMethod?: ApiMethod;
    urlParams?: { [key: string]: string };
    responseMapping?: { [key: string]: string };
    onSuccess?: Actions[];
    onError?: Actions[];
    placeholder?: string;
    apiSuccessMessage?: string;
    apiErrorMessage?: string;
    url?: string;
    isLogin?: boolean;
  };
  trueActions?: Actions[];
  falseActions?: Actions[];
}

export interface ICondition {
  field: string;
  operator: "equals" | "not_equals" | "exists" | "not_exists" | "contains";
  value?: string | boolean | number;
}

type ApiMethod = "GET" | "POST" | "PUT" | "DELETE";

type ActionType =
  | "set_field_value"
  | "set_button_loading"
  | "remove_button_loading"
  | "clear_field"
  | "show_loading"
  | "hide_loading"
  | "enable_field"
  | "disable_field"
  | "update_field_options"
  | "update_field_placeholder"
  | "fetch_options"
  | "trigger_field_change"
  | "delay"
  | "focus_field"
  | "show_message"
  | "conditional"
  | "validate_form"
  | "submit_form"
  | "return_function"
  | "navigate";

export interface IButton {
  id: string;
  label: string;
  type: string;
  actions?: Actions[];
}

export enum InputValidationRules {
  required = "required",
  email = "email",
  min = "min",
  max = "max",
  minLength = "minLength",
  maxLength = "maxLength",
}
