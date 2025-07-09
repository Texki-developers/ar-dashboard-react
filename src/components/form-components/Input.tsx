interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
}

const Input = (props: InputProps) => {
    return (
        <div className="py-2">
            {props.label && <label className="block text-[16px] font-medium mb-2">{props.label}</label>}
            <div className="border border-[#333333] rounded-md flex items-center ">
                <div className="pl-2">{props.leftIcon}</div>
                <input
                    className="w-full h-[40px] min-w-[250px] outline-0 text-[16px] placeholder:text-gray-400  p-2"
                    {...props}
                />
                <div className="pr-2">{props.rightIcon}</div>
            </div>
            <span className="text-red-500 text-[14px]">{props.error}</span>
        </div>
    );
};

export default Input;
