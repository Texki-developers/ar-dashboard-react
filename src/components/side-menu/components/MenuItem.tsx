import type { JSX } from "react";

export interface IMenuItem {
    name: string;
    icon: ({ color, ...props }: { color?: string; width?: number | string; height?: number | string }) => JSX.Element;
    path: string;
}

const MenuItem = ({ item, isActive, onClick }: { item: IMenuItem; isActive: (path: string) => boolean; onClick: (path: string) => void }) => {
    return (
        <div
            onClick={() => onClick(item.path)}
            className={`flex items-center gap-2 ${isActive(item.path) ? "primary-gradient text-white" : "text-grayText"} rounded-md p-2 cursor-pointer text-sm `}>
            {item.icon({ color: isActive(item.path) ? "white" : "#9197B3" })}
            <h1>{item.name}</h1>
        </div>
    );
};

export default MenuItem;
