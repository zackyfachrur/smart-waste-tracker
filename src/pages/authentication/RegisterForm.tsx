
import { useRegisterForm } from "@/hooks/useRegisterForm";

const RegisterForm = () => {

    const { form, errors, handleSubmit, setForm, setPages } = useRegisterForm();


    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-[45%]">
            <h2 className="text-4xl font-bold">Sign up</h2>
            <div className="flex flex-col gap-2 font-bold">
                <label htmlFor="email">Username</label>
                <div className="border border-gray-200 px-4 justify-center items-center gap-4  flex flex-row rounded-2xl py-2">
                    <i className="ri-user-line"></i>
                    <input type="text"
                        placeholder="Johndoe"
                        value={form.name}
                        className=" w-full h-full outline-none py-2"
                        onChange={(e) => setForm({ ...form, name: e.target.value })} />
                    {errors.name && <p>{errors.name}</p>}
                </div>
            </div>

            <div className="flex flex-col gap-2 font-bold">
                <label htmlFor="email">Email Address</label>
                <div className="border border-gray-200 px-4 justify-center items-center gap-4  flex flex-row rounded-2xl py-2">
                    <i className="ri-mail-line"></i>
                    <input type="email"
                        placeholder="Johndoe@gmail.com"
                        value={form.email}
                        className=" w-full h-full outline-none py-2"
                        onChange={(e) => setForm({ ...form, email: e.target.value })} />
                    {errors.email && <p>{errors.email}</p>}
                </div>
            </div>

            <div className="flex flex-col gap-2 font-bold">
                <label htmlFor="password">Password</label>
                <div className="border border-gray-200 px-4 justify-center items-center gap-4  flex flex-row rounded-2xl py-2">
                    <i className="ri-lock-line"></i>
                    <input type="password"
                        placeholder="********"
                        value={form.password}
                        className=" w-full h-full outline-none py-2"
                        onChange={(e) => setForm({ ...form, password: e.target.value })} />
                    {errors.password && <p>{errors.email}</p>}
                </div>
            </div>

            {/* <div className="flex flex-col gap-2 font-bold">
                <div className="border border-gray-200 px-4 justify-center items-center gap-4  flex flex-row rounded-2xl py-2">
                    <i className="ri-user-line"></i>
                    <select value={form.role}
                        onChange={(e) => setForm({ ...form, role: e.target.value })}>
                        <option value="user">User</option>
                        <option value="driver">Driver</option>
                    </select>
                    {errors.role && <p>{errors.role}</p>}
                </div>
            </div> */}

            <div className="flex gap-2">
                <div>
                    <input
                        className="peer sr-only"
                        value="user"
                        name="roles"
                        id="user"
                        type="radio"
                    />
                    <div
                        className="flex h-16 w-24 cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-gray-300 bg-gray-50 p-1 transition-transform duration-150 hover:border-blue-400 active:scale-95 peer-checked:border-blue-500 peer-checked:shadow-md peer-checked:shadow-blue-400"
                    >
                        <label
                            className="flex cursor-pointer items-center justify-center text-sm gap-2 uppercase text-gray-500 peer-checked:text-blue-500"
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
                        value="driver"
                        name="roles"
                        id="driver"
                        type="radio"
                    />
                    <div
                        className="flex h-16 w-24 cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-gray-300 bg-gray-50 p-1 transition-transform duration-150 hover:border-blue-400 active:scale-95 peer-checked:border-blue-500 peer-checked:shadow-md peer-checked:shadow-blue-400"
                    >
                        <label
                            className="flex cursor-pointer items-center gap-2 justify-center text-sm uppercase text-gray-500 peer-checked:text-blue-500"
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

            <button type="submit" className="bg-lime-800 px-4 py-4 rounded-2xl text-white font-bold">Register</button>
        </form >
    )
}

export default RegisterForm;