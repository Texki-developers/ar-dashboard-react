import ModalWrapper from "../modal/ModalWrapper";

interface ConfirmPopupProps {
    show: boolean;
    onClose: () => void;
    title: string;
    negativeButtonLabel?: string;
    positiveButtonLabel?: string;
    onNegativeClick?: () => void;
    onPositiveClick?: () => void;
}

const ConfirmPopup = ({ show, onClose, title, negativeButtonLabel, positiveButtonLabel, onNegativeClick, onPositiveClick }: ConfirmPopupProps) => {
    return (
        <ModalWrapper
            show={show}
            onClose={onClose}>
            <div className="grid gap-5 py-2 mx-w-[300px]">
                <h5 className="font-semibold text-md">{title}</h5>
                <div className="flex gap-2 justify-end">
                    {negativeButtonLabel && (
                        <button
                            className="border text-sm border-[#7E7E7E] px-3 py-2 rounded-md cursor-pointer"
                            onClick={onNegativeClick}>
                            {negativeButtonLabel}
                        </button>
                    )}
                    {positiveButtonLabel && (
                        <button
                            className="border text-sm border-[#7E7E7E] px-3 py-2 rounded-md cursor-pointer"
                            onClick={onPositiveClick}>
                            {positiveButtonLabel}
                        </button>
                    )}
                </div>
            </div>
        </ModalWrapper>
    );
};

export default ConfirmPopup;
