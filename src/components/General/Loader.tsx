import { FallingLines } from "react-loader-spinner";
import BrandLogo from "@/assets/images/brandlogo.png"

const Loader = () => {
    return (
        <div className="flex justify-center items-center h-screen gap-2">
            <img src={BrandLogo} alt="Brand Logo" width={80} height={80} />
            <FallingLines
                color="#4fa94d"
                width="100"
                visible={true}
                ariaLabel="falling-circles-loading"
            />
        </div>
    );
}

export default Loader;