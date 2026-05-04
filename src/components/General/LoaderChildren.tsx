import { FallingLines } from "react-loader-spinner";
import BrandLogo from "@/assets/images/brandlogo.png"

const LoaderChildren = ({ className }: { className: string }) => {
    return (
        <div className={className}>
            <img src={BrandLogo} alt="Brand Logo" width={30} height={30} />
            <FallingLines
                color="#4fa94d"
                width="40"
                visible={true}
                ariaLabel="falling-circles-loading"
            />
        </div>
    );
}

export default LoaderChildren;