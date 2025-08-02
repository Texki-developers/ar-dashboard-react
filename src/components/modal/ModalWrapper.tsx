import { createPortal } from "react-dom";

interface ModalWrapperProps {
    show: boolean;
    onClose: () => void;
}

const ModalWrapper = ({ show, onClose }: ModalWrapperProps) => {
    const onCloseHandler = () => {
        onClose();
    }
    return show
        ? createPortal(
            <div onClick={onCloseHandler} className="fixed top-0 z-50 grid place-items-center left-0 w-full h-full bg-[#0000007e]">
                <div onClick={(e) => e.stopPropagation()} className="bg-white rounded-md p-4">

                </div>
            </div>,
            document.body
        )
        : null;
};

export default ModalWrapper;
