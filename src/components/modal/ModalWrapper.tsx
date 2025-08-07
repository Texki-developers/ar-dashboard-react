import { createPortal } from "react-dom";

interface ModalWrapperProps {
    show: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

const ModalWrapper = ({ show, onClose, children }: ModalWrapperProps) => {
    const onCloseHandler = () => {
        onClose();
    }
    return show
        ? createPortal(
            <div onClick={onCloseHandler} className="fixed  top-0 z-50 grid place-items-center left-0 w-full h-full bg-[#0000007e]">
                <div onClick={(e) => e.stopPropagation()} className="bg-white max-h-[calc(100vh-100px)] overflow-auto rounded-md py-4 px-6">
                    {children}
                </div>
            </div>,
            document.body
        )
        : null;
};

export default ModalWrapper;
