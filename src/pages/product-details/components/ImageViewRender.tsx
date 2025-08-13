import ImageViewer from "../../../components/image-viewer/ImageViewer";
import { useState } from "react";

const ImageViewRender = ({ value }: { value: string }) => {
    const [show, setShow] = useState(false);
    return (
        <>
            <p
                className="text-blue-500 inline cursor-pointer underline"
                onClick={() => setShow(true)}>
                View Image
            </p>
            {show && (
                <ImageViewer
                    url={import.meta.env.VITE_FILE_URL + value}
                    onClose={() => setShow(false)}
                />
            )}
        </>
    );
};

export default ImageViewRender;
