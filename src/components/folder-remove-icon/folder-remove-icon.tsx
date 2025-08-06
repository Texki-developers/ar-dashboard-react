import { CloseIcon } from "../../assets/svg-icons";

const FolderRemoveIcon = ({ onClick }: { onClick: () => void }) => {
    return (
        <div
            onClick={(e) => {
                e.stopPropagation();
                onClick();
            }}
            className="w-[25px] hover:border-[red] h-[25px] bg-white border border-[#7E7E7E] rounded-full flex items-center justify-center cursor-pointer">
            <CloseIcon
                width="12"
                height="12"
            />
        </div>
    );
};

export default FolderRemoveIcon;
