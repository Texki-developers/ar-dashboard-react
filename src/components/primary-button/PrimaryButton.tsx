interface PrimaryButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    loading?: boolean;
}

const PrimaryButton = ({ children, loading, ...props }: PrimaryButtonProps) => {
    return (
        <button
            {...props}
            className={`primary-gradient w-full h-[50px] rounded-lg text-white font-semibold text-[20px] ${props.className}`}>
            {loading ? "Loading..." : children}
        </button>
    );
};

export default PrimaryButton;
