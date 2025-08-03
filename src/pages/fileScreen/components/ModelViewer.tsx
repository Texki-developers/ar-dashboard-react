import "@google/model-viewer";

const ModelViewer = ({ src }: { src: string }) => {
    console.log({ src });
    return (
        <div>
            {/* @ts-expect-error - Suppress any remaining TypeScript errors */}
            <model-viewer
                id={`modelViewer${src}`}
                src={src}
                alt="3D model"
                auto-rotate
                style={{ width: "350px", height: "350px" }}
                camera-controls
                shadow-intensity="1"
            />
        </div>
    );
};

export default ModelViewer;