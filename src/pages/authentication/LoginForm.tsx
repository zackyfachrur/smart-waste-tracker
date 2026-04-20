import { useLoginForm } from "@/hooks/useLoginForm";

const LoginForm = () => {
    const { form, setForm, setPages, errors, handleSubmit } = useLoginForm();

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-[45%]">
            <h2 className="text-4xl font-bold">Sign in</h2>
            <div className="flex flex-col gap-2 font-bold">
                <label htmlFor="email">Email Address</label>
                <div className="border border-gray-200 px-4 justify-center items-center gap-4  flex flex-row rounded-2xl py-2">
                    <i className="ri-mail-line"></i>
                    <input
                        name="email"
                        type="email"
                        placeholder="Johndoe@gmail.com"
                        value={form.email}
                        className=" w-full h-full outline-none py-2"
                        onChange={(e) => setForm({ ...form, email: e.target.value })} />
                    {errors.email && <p>{errors.email}</p>}
                </div>
            </div>

            <div className="flex flex-col gap-2 font-bold">
                <label htmlFor="email">Password</label>
                <div className="border border-gray-200 px-4 justify-center items-center gap-4  flex flex-row rounded-2xl py-2">
                    <i className="ri-lock-line"></i>
                    <input type="password"
                        placeholder="*********"
                        value={form.password}
                        className=" w-full h-full outline-none py-2"
                        onChange={(e) => setForm({ ...form, password: e.target.value })}
                    />
                    {errors.password && <p>{errors.password}</p>}
                </div>
            </div>

            <span>Belum memiliki akun ? <button className="font-bold text-black"
                onClick={() => setPages("register")}>Sign up</button></span>

            <button type="submit" className="bg-lime-800 px-4 py-4 rounded-2xl text-white font-bold">Sign in</button>
        </form>
    )
}

export default LoginForm;