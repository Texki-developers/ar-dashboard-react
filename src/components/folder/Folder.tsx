import { FolderIcon } from "../../assets/svg-icons";
import FolderRemoveIcon from "../folder-remove-icon/folder-remove-icon";
const Folder = ({ folderName, onClick, onFileRemove }: { folderName: string; onClick: () => void; onFileRemove: () => void }) => {
    return (
        <div
            onClick={onClick}
            className="grid gap-2 relative group cursor-pointer justify-items-center hover:scale-105 transition-all">
            <div className="absolute hidden left-[0%] -top-2 w-full h-full group-hover:block">
                <FolderRemoveIcon onClick={onFileRemove} />
            </div>
            <FolderIcon />
            <h5 className="leading-none text-center">{folderName}</h5>
        </div>
    );
};

export default Folder;
