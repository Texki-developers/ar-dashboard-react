import { InputValidationRules, type IFormConfig } from "../../models/form";

export const loginConfig: IFormConfig = {
    id: "login-form",
    title: "Login",
    mode: "normal",
    apiEndpoint: "",
    fields: [
        {
            id: "email",
            label: "Email",
            type: "email",
            placeholder: "Enter your email",
            rules: [InputValidationRules.email, InputValidationRules.required],
        },
        {
            id: "password",
            label: "Password",
            type: "password",
            placeholder: "Enter your password",
            rules: [InputValidationRules.required],
        },
    ],
    globalActions: [],
    buttons: [
        {
            id: "login",
            label: "Login",
            type: "primaryButton",
            actions: [
                {
                    type: "validate_form",
                },
                {
                    type: "submit_form",
                    payload: {
                        apiEndpoint: `${import.meta.env.VITE_API_URL}/auth/login`,
                        apiMethod: "POST",
                        apiSuccessMessage: "Login successful",
                        apiErrorMessage: "Login failed",
                        isLogin: true,
                    },
                },
                {
                    type: "navigate",
                    payload: {
                        url: "/",
                    },
                },
            ],
        },
    ],
};
