import { FolderIcon } from "../../assets/svg-icons";

const Folder = () => {
    return (
        <div className="grid gap-2 cursor-pointer justify-items-center hover:scale-105 transition-all">
            <FolderIcon />
            <h5 className="leading-none text-center">Folder Name manshad here </h5>
        </div>
    );
};

export default Folder;
