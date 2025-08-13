import { useState } from "react";
import ModelViewerRender from "../../../components/three-model-viewer/ModelViewerRender";

const ThreeDModelViewerRender = ({ value }: { value: string }) => {
    const [show, setShow] = useState(false);
    return (
        <>
            <p
                className="text-blue-500 inline cursor-pointer underline"
                onClick={() => setShow(true)}>
                View Model
            </p>
            <ModelViewerRender
                show={show}
                onClose={() => setShow(false)}
                name=""
                src={value}
            />
        </>
    );
};

export default ThreeDModelViewerRender;
