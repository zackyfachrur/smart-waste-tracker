import { Button } from "@/components/ui/button";
import BrandLogo from "@/assets/images/brandlogo.png"
import { MarkerSelection } from "@/components/General/MarkerSelection";

export const MarkerNotification = ({ onConfirm, onCancel }: any) => {

    return (
        <div className="fixed inset-0 w-full flex items-center justify-center bg-black/40 z-99 text-start">
            <div className="bg-white p-6 rounded-lg">
                <img src={BrandLogo} className="w-12 h-12 mb-2" alt="Brand Logo" />
                <h3 className="font-bold mb-1">Info</h3>
                <p>Apakah Anda yakin ingin menambahkan marker?</p>
                <MarkerSelection />

                <div className="flex gap-2 mt-4">
                    <Button variant="default" className="p-4 font-semibold cursor-pointer flex-1" onClick={onConfirm}>Yes</Button>
                    <Button variant="destructive" className="p-4 font-semibold cursor-pointer flex-1" onClick={onCancel}>No</Button>
                </div>
            </div>
        </div >
    );
};