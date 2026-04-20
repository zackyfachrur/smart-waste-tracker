import type { InputFormProps } from "@/types/input-types"

export const InputForm = (
    { icon, value, onChange, label, errorPopUp, placeholder, type, showPassword }:
        InputFormProps) => {
    return (
        <div className="flex flex-col gap-2 font-bold">
            {label}
            <div className="border border-gray-200 px-4 justify-center items-center gap-4  flex flex-row rounded-2xl py-2">
                {icon}
                <input type={type}
                    placeholder={placeholder}
                    value={value}
                    className=" w-full h-full outline-none py-2"
                    onChange={onChange} />
                {showPassword}
            </div>
            {errorPopUp}
        </div>
    )
}