import { useLoginForm } from "@/hooks/useLoginForm";
import { InputForm } from "@/components/AuthenticationPages/Input";
import EyeIcon from "@/components/AuthenticationPages/EyeIcon";
import { useState } from "react";
import ErrorParagraph from "@/components/General/ErrorParagraph";
import Loader from "@/components/General/Loader"
import BrandLogo from "@/assets/images/brandlogo.png"

const LoginForm = () => {
    const { form, setForm, setPages, errors, handleSubmit, loading } = useLoginForm();
    const [eye, setEye] = useState(false);
    const handleEye = () => { setEye(!eye) }

    if (loading) {
        return <Loader />
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">

            <img src={BrandLogo} className="w-[150px] self-center" alt="Brand Logo" />
            <h2 className="text-2xl 2xl:text-4xl font-bold">Sign in</h2>
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
                type={eye ? "text" : "password"}
                placeholder="********"
                label={<label htmlFor="password">Password</label>}
                icon={<i className="ri-lock-line"></i>}
                value={form.password}
                showPassword={<EyeIcon eye={eye} onClick={handleEye} />}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                errorPopUp={errors.password && <ErrorParagraph>{errors.password}</ErrorParagraph>}
            />

            <label htmlFor="remember" className="flex items-center mb-5 w-fit cursor-pointer outline-none ml-1">
                <input id="remember" type="checkbox" value="" className="w-4 h-4  border border-default-medium bg-neutral-secondary-medium outline-0 rounded-full cursor-pointer"
                    checked={form.checked}
                    onChange={(e) => setForm({ ...form, checked: e.target.checked })} />
                <p className="ms-2 text-sm font-medium text-heading select-none">Remember me</p>
            </label>

            <span>Belum memiliki akun ? <button className="font-bold text-black hover:underline-offset-2 hover:underline cursor-pointer"
                onClick={() => setPages("register")}>Sign up</button></span>

            <button type="submit" className="bg-lime-800 px-4 py-4 rounded-2xl text-white font-bold active:scale-95 cursor-pointer hover:bg-lime-700">Sign in</button>
        </form>
    )
}

export default LoginForm;