import type { EyeIconProps } from "@/types/input-types";
import type { FC } from "react";

const EyeIcon: FC<EyeIconProps> = ({ eye, onClick }) => {

    return eye ? (<i onClick={onClick} className="ri-eye-fill cursor-pointer"></i>) :
        (<i onClick={onClick} className="ri-eye-off-fill cursor-pointer"></i>);

}

export default EyeIcon;