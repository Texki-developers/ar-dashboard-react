import { FileIcon } from "../../assets/svg-icons";
import FolderRemoveIcon from "../folder-remove-icon/folder-remove-icon";

const File = ({ name, onClick, onFileRemove }: { name: string; model: string; onClick: () => void; onFileRemove: () => void }) => {
    return (
        <div
            onClick={onClick}
            className="grid relative gap-2 group cursor-pointer justify-items-center hover:scale-105 transition-all">
            <div className="absolute hidden left-[15%] -top-2 w-full h-full group-hover:block">
                <FolderRemoveIcon onClick={onFileRemove} />
            </div>
            <FileIcon />
            <h5 className="leading-none text-center">{name}</h5>
        </div>
    );
};
export default File;
