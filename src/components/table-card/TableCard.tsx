import { QRCode } from "react-qrcode-logo";
import { DownloadIcon } from "../../assets/svg-icons";
import { useRef } from "react";

const TableCard = ({ tableNumber, vendorId }: { tableNumber: string; vendorId: string }) => {
    const FrontendURL = import.meta.env.VITE_FRONTEND_URL;
    const qrCodeRef = useRef<QRCode | null>(null);
    return (
        <div className="w-full justify-center flex rounded-[20px] min-h-[300px] border p-4 overflow-hidden border-[#00000034] relative">
            <QRCode
                qrStyle="dots"
                eyeRadius={20}
                size={300}
                value={`${FrontendURL}?tableNumber=${tableNumber}&vendorId=${vendorId}`}
                ref={qrCodeRef}
                // logoImage="https://img.freepik.com/premium-vector/coffee-cream-logo_608547-94.jpg"
                // logoHeight={100}
                // logoWidth={100}
                removeQrCodeBehindLogo
            />
            <div className="absolute bottom-0 rounded-b-[20px] left-0 w-full h-[80px] bg-[#0000005a] backdrop-blur-md p-3 cursor-pointer">
                <div className="flex items-center h-full w-full justify-between">
                    <h1 className="text-2xl text-white font-semibold">Table : {tableNumber}</h1>
                    <div className="flex items-center gap-2">
                        <button
                            onClick={() => qrCodeRef.current?.download("png", `qr-code-tableNo-${tableNumber}.png`)}
                            className=" bg-[#00000024] cursor-pointer text-black p-4 rounded-full">
                            <DownloadIcon />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TableCard;
