import { createPortal } from "react-dom";

const Loader = () => {
    return createPortal(
        <div className="w-full h-full grid place-items-center z-50 fixed top-0 left-0">
            <div className="w-12 h-12 border-b-2 rounded-full animate-spin"></div>
        </div>,
        document.body
    );
};

export default Loader;
