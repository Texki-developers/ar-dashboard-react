import { FileIcon } from "../../assets/svg-icons";

const File = ({ name, model, onClick }: { name: string; model: string; onClick: () => void }) => {
    console.log(import.meta.env.VITE_FILE_URL + model);
    return (
        <div
            onClick={onClick}
            className="grid gap-2 cursor-pointer justify-items-center hover:scale-105 transition-all">
            <FileIcon />
            <h5 className="leading-none text-center">{name}</h5>
        </div>
    );
};
export default File;
