import { CloseIcon } from "../../assets/svg-icons";
import ModalWrapper from "../modal/ModalWrapper";

const ImageViewer = ({ url, onClose }: { url: string; onClose: () => void }) => {
    return (
        <ModalWrapper
            show
            onClose={onClose}
            className="px-0! py-0! border-2 border-white relative">
            <div
                onClick={onClose}
                className="absolute top-2 right-2 bg-white rounded-full p-3 cursor-pointer">
                <CloseIcon
                    width={16}
                    height={16}
                />
            </div>
            <img
                className="w-full max-w-[min(80vw, 800px)] max-h-[min(80vh, 800px)] h-full object-cover rounded-md"
                src={url}
                style={{ maxWidth: "min(80vw, 800px)", maxHeight: "min(80vh, 800px)" }}
                alt=""
            />
        </ModalWrapper>
    );
};

export default ImageViewer;
