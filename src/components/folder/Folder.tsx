import { FolderIcon } from "../../assets/svg-icons";
const Folder = ({ folderName, onClick }: { folderName: string, onClick: () => void }) => {
    return (
        <div onClick={onClick} className="grid gap-2 cursor-pointer justify-items-center hover:scale-105 transition-all">
            <FolderIcon />
            <h5 className="leading-none text-center">{folderName}</h5>
        </div>
    );
};

export default Folder;
