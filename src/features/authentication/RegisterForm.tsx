
import { useRegisterForm } from "@/hooks/useRegisterForm";
import { InputForm } from "@/components/AuthenticationPages/Input"
import { useState } from "react";
import EyeIcon from "@/components/AuthenticationPages/EyeIcon";
import ErrorParagraph from "@/components/General/ErrorParagraph";
import BrandLogo from "@/assets/images/brandlogo.png"


const RegisterForm = () => {

    /* 
        Handle eye
        ==========================================
        for handle eye on input type from password to text
    */
    const [firstEye, setFirstEye] = useState(false);
    const [secondEye, setSecondEye] = useState(false);
    const handleFirstEye = () => { setFirstEye(!firstEye) }
    const handleSecondEye = () => { setSecondEye(!secondEye) }


    /* 
        Handle form register
        ==========================================
        assignment for clean code data Register 
    */
    const { form, errors, handleSubmit, setForm, setPages } = useRegisterForm();


    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
            <img src={BrandLogo} className="w-[150px] self-center" alt="Brand Logo" />
            <h2 className="text-2xl 2xl:text-4xl font-bold">Sign up</h2>

            <InputForm
                type="text"
                placeholder="Johndoe"
                label={<label htmlFor="email">Username</label>}
                icon={<i className="ri-user-line"></i>}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                errorPopUp={errors.name && <ErrorParagraph>{errors.name}</ErrorParagraph>}
            />

            <div className="flex gap-2">
                <div>
                    <input
                        className="peer sr-only"
                        value="1"
                        name="role_id"
                        id="admin"
                        type="radio"
                        onChange={(e) => setForm({ ...form, role_id: e.target.value })}
                    />
                    <div
                        className="flex h-12 px-4 cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-gray-300 bg-gray-50 p-1 transition-transform duration-150 hover:border-blue-400 active:scale-95 peer-checked:border-blue-500 peer-checked:shadow-md peer-checked:shadow-blue-400"
                    >
                        <label
                            className="flex cursor-pointer items-center gap-2 justify-center text-sm uppercase text-gray-500 peer-checked:text-blue-500 py-8 select-none"
                            htmlFor="admin"
                        >
                            <i className="ri-admin-fill"></i>
                            Admin
                        </label>
                    </div>
                </div>
                <div>
                    <input
                        className="peer sr-only bg-gray-400"
                        value="2"
                        name="role_id"
                        id="user"
                        type="radio"
                        onChange={(e) => setForm({ ...form, role_id: e.target.value })}
                    />
                    <div
                        className="flex h-12 px-4 w-24 cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-gray-300 bg-gray-50 p-1 transition-transform duration-150 hover:border-blue-400 active:scale-95 peer-checked:border-blue-500 peer-checked:shadow-md peer-checked:shadow-blue-400"
                    >
                        <label
                            className="flex cursor-pointer items-center justify-center text-sm gap-2 uppercase text-gray-500 peer-checked:text-blue-500 py-8 select-none"
                            htmlFor="user"
                        >
                            <i className="ri-map-pin-user-fill"></i>
                            User
                        </label>
                    </div>
                </div>
                <div>
                    <input
                        className="peer sr-only"
                        value="3"
                        name="role_id"
                        id="driver"
                        type="radio"
                        onChange={(e) => setForm({ ...form, role_id: e.target.value })}
                    />
                    <div
                        className="flex h-12 px-4 cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-gray-300 bg-gray-50 p-1 transition-transform duration-150 hover:border-blue-400 active:scale-95 peer-checked:border-blue-500 peer-checked:shadow-md peer-checked:shadow-blue-400"
                    >
                        <label
                            className="flex cursor-pointer items-center gap-2 justify-center text-sm uppercase text-gray-500 peer-checked:text-blue-500 py-8 select-none"
                            htmlFor="driver"
                        >
                            <i className="ri-caravan-fill"></i>
                            Driver
                        </label>
                    </div>
                </div>
            </div>

            <InputForm
                type="email"
                placeholder="Johndoe@gmail.com"
                label={<label htmlFor="email">Email Address</label>}
                icon={<i className="ri-mail-line"></i>}
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                errorPopUp={errors.email && <ErrorParagraph>{errors.email}</ErrorParagraph>}
            />



            <InputForm
                type={firstEye ? "text" : "password"}
                placeholder="********"
                label={<label htmlFor="password">Password</label>}
                icon={<i className="ri-lock-line"></i>}
                value={form.password}
                showPassword={<EyeIcon eye={firstEye} onClick={handleFirstEye} />}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                errorPopUp={errors.password && <ErrorParagraph>{errors.password}</ErrorParagraph>}
            />

            <InputForm
                type={secondEye ? "text" : "password"}
                placeholder="********"
                label={<label htmlFor="confirmPassword">Confirm Password</label>}
                icon={<i className="ri-lock-line"></i>}
                value={form.confirmPassword}
                showPassword={<EyeIcon eye={secondEye} onClick={handleSecondEye} />}
                onChange={(e) => setForm({ ...form, confirmPassword: e.target.value })}
                errorPopUp={errors.confirmPassword && <ErrorParagraph>{errors.confirmPassword}</ErrorParagraph>}
            />

            <span>Sudah memiliki akun ? <button type="button" className="font-bold text-black hover:underline-offset-2 hover:underline cursor-pointer"
                onClick={() => setPages("login")}>Sign in</button></span>

            <button type="submit" className="bg-lime-800 px-4 py-4 rounded-2xl text-white font-bold active:scale-95 cursor-pointer hover:bg-lime-700">Sign up</button>
        </form >
    )
}

export default RegisterForm;