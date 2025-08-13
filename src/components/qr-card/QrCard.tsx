import QRCode from "react-qr-code";
import { DownloadIcon } from "../../assets/svg-icons";

const QrCard = () => {
    return (
        <div className="w-full  rounded-[20px] min-h-[300px] border p-4 overflow-hidden border-[#00000034] relative">
            <QRCode
                size={300}
                value="https://github.com/React-Training/react-router"
            />
            <div className="absolute bottom-0 rounded-b-[20px] left-0 w-full h-[80px] bg-[#0000001a] backdrop-blur-md p-3 cursor-pointer">
                <div className="flex items-center h-full w-full justify-between">
                    <h1 className="text-2xl text-white font-semibold">Qr Code</h1>
                    <div className="flex items-center gap-2">
                        <button className=" bg-[#00000024] text-black p-4 rounded-full">
                            <DownloadIcon />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QrCard;
