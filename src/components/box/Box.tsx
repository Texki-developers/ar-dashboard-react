import type React from "react";
import { LoaderComponent } from "../loader/Loader";

const Box = ({ children, className, isLoading }: { children: React.ReactNode; className?: string; isLoading?: boolean }) => {
    return (
        <div className={`bg-white p-6  rounded-xl ${className}`}>
            {isLoading ? (
                <div className="w-full h-full min-h-[200px] grid place-items-center">
                    <LoaderComponent />
                </div>
            ) : (
                children
            )}
        </div>
    );
};

export default Box;
