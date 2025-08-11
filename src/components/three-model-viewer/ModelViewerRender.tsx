import ModalWrapper from "../modal/ModalWrapper";
import { CloseIcon } from "../../assets/svg-icons";
import ModelViewer from "../../pages/fileScreen/components/ModelViewer";

const ModelViewerRender = ({ show, onClose, name, src }: { show: boolean; onClose: () => void; name: string; src: string }) => {
  return (
    <ModalWrapper
      show={show}
      onClose={onClose}>
      <div className="flex justify-between">
        <h5 className="text-[24px] font-semibold">{name ?? "Model"}</h5>
        <button
          className="cursor-pointer"
          onClick={onClose}>
          <CloseIcon
            width="18"
            height="18"
          />
        </button>
      </div>
      <ModelViewer src={import.meta.env.VITE_FILE_URL + src} />
    </ModalWrapper>
  );
};

export default ModelViewerRender;
