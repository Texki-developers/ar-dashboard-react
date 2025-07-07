import type { ICondition } from "../../../models/form";
import type { IFormState } from "../reducers";

export function evaluateCondition(condition: ICondition, formData: IFormState) {
  const fieldValue = formData?.[condition?.field];
  switch (condition.operator) {
    case "equals":
      return fieldValue === condition.value;
    case "not_equals":
      return fieldValue !== condition.value;
    case "exists":
      return fieldValue !== undefined && fieldValue !== null && fieldValue !== "";
    case "not_exists":
      return !fieldValue;
    case "contains":
      return fieldValue && fieldValue.includes(condition.value);
    default:
      return false;
  }
}
