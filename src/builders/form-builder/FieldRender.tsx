/* eslint-disable @typescript-eslint/no-explicit-any */
import Input from "../../components/form-components/Input";
import type { IFormField } from "../../models/form";
import type { IErrorState, IFormState } from "./reducers";

const FieldRender = ({
    fields,
    onChange,
    formData,
    errors,
}: {
    fields: IFormField[];
    onChange: (id: string, e: string | number | boolean) => void;
    formData: IFormState;
    errors: IErrorState;
}) => {
    return fields.map((field) => {
        switch (field.type) {
            case "text":
                return (
                    <Input
                        key={field.id}
                        {...field}
                        type="text"
                        value={(formData?.[field.id] as any) ?? ""}
                        onChange={(e) => onChange(field.id, e?.target.value)}
                        error={errors?.[field.id]}
                    />
                );
            case "email":
                return (
                    <Input
                        key={field.id}
                        {...field}
                        type="email"
                        value={(formData?.[field.id] as any) ?? ""}
                        onChange={(e) => onChange(field.id, e?.target.value)}
                        error={errors?.[field.id]}
                        width="350px"
                        className="w-full!"
                    />
                );
            case "password":
                return (
                    <Input
                        key={field.id}
                        {...field}
                        type="password"
                        value={(formData?.[field.id] as any) ?? ""}
                        onChange={(e) => onChange(field.id, e?.target.value)}
                        error={errors?.[field.id]}
                        width="350px"
                        className="w-full!"
                    />
                );
            default:
                return (
                    <Input
                        key={field.id}
                        {...field}
                        type="text"
                        value={(formData?.[field.id] as any) ?? ""}
                        onChange={(e) => onChange(field.id, e?.target.value)}
                        error={errors?.[field.id]}
                    />
                );
        }
    });
};

export default FieldRender;
