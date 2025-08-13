import { useState } from "react";
import YtVideoViewer from "../../../components/yt-video-viewer/YtVideoViewer";
import { extractYouTubeId } from "../../../utils/utils";

const YtVideoViewerRender = ({ value }: { value: string }) => {
    const [show, setShow] = useState(false);
    const id = extractYouTubeId(value);
    const embedYoutubeUrl = "https://www.youtube.com/embed/" + id;
    return (
        <>
            <p
                className={`${value ? "" : "text-gray-500 underline-offset-0"} text-blue-500 inline cursor-pointer underline`}
                onClick={() => {
                    if (value) setShow(true);
                }}>
                {value ? "View Video" : "Nil"}
            </p>
            {show && (
                <YtVideoViewer
                    embedLink={embedYoutubeUrl}
                    onClose={() => setShow(false)}
                />
            )}
        </>
    );
};

export default YtVideoViewerRender;
