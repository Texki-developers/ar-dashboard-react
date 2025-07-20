import { FileIcon } from "../../assets/svg-icons";

const File = () => {
    return (
        <div className="grid gap-2 cursor-pointer justify-items-center hover:scale-105 transition-all">
            <FileIcon />
            <h5 className="leading-none text-center">File Name manshad here </h5>
        </div>
    );
};
export default File;
