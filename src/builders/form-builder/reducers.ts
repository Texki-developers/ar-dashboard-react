/* eslint-disable @typescript-eslint/no-explicit-any */
export interface IFormState {
  [key: string]: string | number | boolean | any;
}
export interface IErrorState {
  [key: string]: string;
}
export interface IErrorAction {
  type: string;
  id: string;
  value: string;
}

export interface IFormAction {
  type: string;
  id: string;
  value: string | number | boolean;
}

export interface IButtonLoadingState {
  [key: string]: boolean;
}
export interface IButtonLoadingAction {
  type: string;
  id: string;
  value: boolean;
}

export const formReducer = (state: IFormState, action: IFormAction) => {
  switch (action.type) {
    case "SET_FORM_DATA":
      return { ...state, [action.id]: action.value };
    default:
      return state;
  }
};

export const errorReducer = (state: IErrorState, action: IErrorAction) => {
  switch (action.type) {
    case "SET_ERROR":
      return { ...state, [action.id]: action.value };
    default:
      return state;
  }
};

export const buttonLoadingReducer = (state: IButtonLoadingState, action: IButtonLoadingAction) => {
  switch (action.type) {
    case "SET_BUTTON_LOADING":
      return { ...state, [action.id]: action.value ?? true };
    case "REMOVE_BUTTON_LOADING":
      return { ...state, [action.id]: action.value ?? false };
    default:
      return state;
  }
};
