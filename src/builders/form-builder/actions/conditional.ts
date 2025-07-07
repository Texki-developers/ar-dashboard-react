import { actions, type IActionProps } from "../actionBuilder";
import { evaluateCondition } from "../condition/evaluateConditions";

export const conditionalAction = (actionProps: IActionProps) => {
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
