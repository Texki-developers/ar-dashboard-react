/* eslint-disable @typescript-eslint/no-explicit-any */
import CreatableSelect from "react-select/creatable";
import { type Props as ReactSelectProps } from "react-select";
import type { OptionType } from "./Select";

interface SelectProps extends ReactSelectProps<OptionType> {
    label?: string;
    onCreateOption: (value: { label: string; value: string; isCreated?: boolean }) => void;
    error?: string;
}
const CustomCreatableSelect = ({ label, onCreateOption, error, ...props }: SelectProps) => {
    return (
        <div className="py-2">
            <p className="block text-[16px] mb-2 text-[#333]">{label}</p>
            <CreatableSelect
                onCreateOption={(currentValue) => {
                    if (props?.isMulti) {
                        const values = [...((props?.value as any[]) ?? []), { label: currentValue, value: currentValue, isCreated: true }];
                        onCreateOption(values as any);
                    } else {
                        onCreateOption({ label: currentValue, value: currentValue, isCreated: true });
                    }
                }}
                className="w-[250px] outline-0"
                classNamePrefix="react-select"
                styles={{
                    control: (base) => ({
                        ...base,
                        border: "1px solid #333",
                        borderRadius: "4px",
                        outline: "none",
                    }),
                }}
                {...props}
            />
            <span className="text-red-500 text-[14px]">{error}</span>
        </div>
    );
};

export default CustomCreatableSelect;
