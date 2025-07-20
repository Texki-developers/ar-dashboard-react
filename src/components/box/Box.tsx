import type React from "react";

const Box = ({ children, className }: { children: React.ReactNode; className?: string }) => {
    return <div className={`bg-white p-6  rounded-xl ${className}`}>{children}</div>;
};

export default Box;
