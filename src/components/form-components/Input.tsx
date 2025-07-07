interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    error?: string;
}

const Input = (props: InputProps) => {
    return (
        <div className="py-2">
            <label className="block text-[16px] font-medium mb-2">{props.label}</label>
            <input
                className="w-full h-[50px] outline-0 text-[16px] placeholder:text-gray-400 border border-[#333333] rounded-md p-2"
                {...props}
            />
            <span className="text-red-500 text-[14px]">{props.error}</span>
        </div>
    );
};

export default Input;
