/* eslint-disable @typescript-eslint/no-explicit-any */
import Select, { type Props as ReactSelectProps } from "react-select";

export type OptionType = {
    label: string;
    value: string | number | boolean | null | undefined;
};

interface SelectProps extends ReactSelectProps<OptionType, false> {
    label?: string;
    error?: string;
}

const CustomSelect = ({ label, error, ...props }: SelectProps) => {
    return (
        <div className="py-2">
            {label && <p className="block text-[16px] mb-2 text-[#333]">{label}</p>}
            <Select
                className="w-full h-[40px] min-w-[250px] outline-0"
                classNamePrefix="react-select"
                styles={{
                    control: (base) => ({
                        ...base,
                        border: "1px solid #333",
                        borderRadius: "4px",
                        height: "40px",
                        outline: "none",
                    }),
                }}
                {...props}
            />
            <span className="text-red-500 text-[14px]">{error}</span>
        </div>
    );
};

export default CustomSelect;
