import { useReducer } from "react";
import type { IFormConfig } from "../../models/form";
import FieldRender from "./FieldRender";
import ButtonRender from "./ButtonRender";
import { buttonLoadingReducer, errorReducer, formReducer } from "./reducers";
import useActionBuilder from "./useActionBuilder";

const FormRender = ({ config }: { config: IFormConfig }) => {
    const [formData, dispatch] = useReducer(formReducer, {});
    const [errors, errorDispatch] = useReducer(errorReducer, {});
    const [buttonsLoading, setButtonsLoading] = useReducer(buttonLoadingReducer, {});
    const { actions } = useActionBuilder();

    const onChange = (id: string, value: string | number | boolean) => {
        dispatch({ type: "SET_FORM_DATA", id, value });
    };

    const onClick = async (id: string) => {
        const currentButton = config.buttons?.find((button) => button.id === id);
        if (currentButton?.actions) {
            for (const action of currentButton.actions) {
                if (await actions({ formData, dispatch, action, config, errorDispatch, setButtonsLoading, buttonId: id })) {
                    return;
                }
            }
        }
    };

    return (
        <div key={config.id}>
            <h1 className="text-[40px] font-bold mb-6">{config.title}</h1>
            <FieldRender
                fields={config.fields}
                onChange={onChange}
                formData={formData}
                errors={errors}
            />
            {config.buttons && (
                <ButtonRender
                    buttons={config.buttons}
                    onClick={onClick}
                    buttonsLoading={buttonsLoading}
                />
            )}
        </div>
    );
};

export default FormRender;
