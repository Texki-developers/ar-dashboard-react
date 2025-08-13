import { CloseIcon } from "../../assets/svg-icons";
import ModalWrapper from "../modal/ModalWrapper";

const YtVideoViewer = ({ embedLink, onClose }: { embedLink: string; onClose: () => void }) => {
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
            <iframe
                width="560"
                height="315"
                src={embedLink}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
            />
        </ModalWrapper>
    );
};

export default YtVideoViewer;
