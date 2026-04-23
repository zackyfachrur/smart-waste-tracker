import BrandLogo from "@/assets/images/brandlogo.png"
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            navigate("/")
        }, 2000)
    }, [])

    return (
        <div className="flex sm:flex-row flex-col  justify-center items-center h-screen gap-12">
            <img src={BrandLogo} alt="Brand Logo" className="w-[300px] sm:w-[300px]" />
            <div className="text-start flex flex-col gap-2">
                <h2 className="text-[8rem] font-bold">404</h2>
                <div>
                    <p className="font-semibold">Maaf, halaman yang kamu kunjungi tidak tersedia.</p>
                    <span className="italic">Anda akan kembali dalam 2 detik...</span>
                </div>
            </div>
        </div >
    );
}

export default NotFound;