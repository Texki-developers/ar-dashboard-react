interface InputProps extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
    label?: string;
    error?: string;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    isTextArea?: boolean;
    width?: string;
}

const Input = (props: InputProps) => {
    console.log(props)
    return (
        <div style={{ width: props.width ?? "250px" }} className="py-2">
            {props.label && (
                <label
                    htmlFor={props.name}
                    className="block text-[16px] mb-2 text-[#333]">
                    {props.label}
                </label>
            )}
            <div className="border border-[#333333] rounded-md flex items-center ">
                <div className="pl-2">{props.leftIcon}</div>
                {props.isTextArea ? (
                    <textarea
                        cols={50}
                        rows={10}
                        id={props.name}
                        {...props}
                        className={`h-[40px] w-[250px] outline-0 text-[16px] placeholder:text-gray-400  p-2 ${props.className}`}
                    />
                ) : (
                    <input
                        id={props.name}
                        {...props}
                        autoComplete="off"
                        className={`h-[40px] w-[250px] outline-0 text-[16px] placeholder:text-gray-400  p-2 ${props.className}`}
                    />
                )}
                <div className="pr-2">{props.rightIcon}</div>
            </div>
            <span className="text-red-500 text-[14px]">{props.error}</span>
        </div>
    );
};

export default Input;
