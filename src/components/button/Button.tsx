interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
}

const Button = ({ children, ...props }: ButtonProps) => {
    return (
        <button
            className={`px-3 py-1.5 min-h-[40px] flex items-center justify-center rounded-md primary-gradient text-white font-semibold text-sm cursor-pointer hover:scale-105 transition-all ${props.className}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;