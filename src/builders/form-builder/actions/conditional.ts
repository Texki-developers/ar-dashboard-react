import { evaluateCondition } from "../condition/evaluateConditions";
import type { IActionProps } from "../useActionBuilder";

export const conditionalAction = (actionProps: IActionProps, actions: (actionProps: IActionProps) => Promise<boolean>) => {
  const { action, formData } = actionProps;
  if (action.condition) {
    if (evaluateCondition(action?.condition, formData)) {
      if (action.trueActions) {
        for (const actionData of action.trueActions) {
          actions({ ...actionProps, action: actionData });
        }
      }
    } else {
      if (action.falseActions) {
        for (const actionData of action.falseActions) {
          actions({ ...actionProps, action: actionData });
        }
      }
    }
  }
};
