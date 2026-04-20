
import { useRegisterForm } from "@/hooks/useRegisterForm";
import { InputForm } from "@/components/AuthenticationPages/Input"
import { useState } from "react";
import EyeIcon from "@/components/AuthenticationPages/EyeIcon";


const RegisterForm = () => {

    const [eye, setEye] = useState(false);

    const handleEye = () => { setEye(!eye) }

    const { form, errors, handleSubmit, setForm, setPages } = useRegisterForm();


    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-[45%]">
            <h2 className="text-4xl font-bold">Sign up</h2>

            <InputForm
                type="text"
                placeholder="Johndoe"
                label={<label htmlFor="email">Username</label>}
                icon={<i className="ri-user-line"></i>}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                errorPopUp={errors.name && <p>{errors.name}</p>}
            />

            <InputForm
                type="email"
                placeholder="Johndoe@gmail.com"
                label={<label htmlFor="email">Email Address</label>}
                icon={<i className="ri-mail-line"></i>}
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                errorPopUp={errors.email && <p>{errors.email}</p>}
            />

            <InputForm
                type={eye ? "text" : "password"}
                placeholder="********"
                label={<label htmlFor="password">Password</label>}
                icon={<i className="ri-lock-line"></i>}
                value={form.password}
                showPassword={<EyeIcon eye={eye} onClick={handleEye} />}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                errorPopUp={errors.password && <p>{errors.password}</p>}
            />



            <div className="flex gap-2">
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
                        className="flex h-16 w-24 cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-gray-300 bg-gray-50 p-1 transition-transform duration-150 hover:border-blue-400 active:scale-95 peer-checked:border-blue-500 peer-checked:shadow-md peer-checked:shadow-blue-400"
                    >
                        <label
                            className="flex cursor-pointer items-center justify-center text-sm gap-2 uppercase text-gray-500 peer-checked:text-blue-500 py-8 select-none"
                            htmlFor="user"
                        >
                            <i className="ri-user-search-fill"></i>
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
                        className="flex h-16 w-24 cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-gray-300 bg-gray-50 p-1 transition-transform duration-150 hover:border-blue-400 active:scale-95 peer-checked:border-blue-500 peer-checked:shadow-md peer-checked:shadow-blue-400"
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


            <span>Sudah memiliki akun ? <button className="font-bold text-black"
                onClick={() => setPages("login")}>Sign in</button></span>

            <button type="submit" className="bg-lime-800 px-4 py-4 rounded-2xl text-white font-bold active:scale-95 cursor-pointer hover:bg-lime-700">Register</button>
        </form >
    )
}

export default RegisterForm;