import type { ReactNode } from "react"

export type EyeIconProps = {
    eye: boolean;
    onClick: () => void;
}

export type InputFormProps = {
    icon: ReactNode
    value: string | undfined;
    placeholder: string | undefined;
    type: string | undefined;
    showPassword?: ReactNode;
    onChange: (e) => void;
    label: ReactNode
    errorPopUp: ReactNode;
}