// import HeroAuthenticationImages from "@/assets/images/hero-authentication.jpg"
import { useBarrierAuthStore } from "@/store/barrier.auth.store";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

const AuthenticationPages = () => {
    const { pages } = useBarrierAuthStore();

    return (
        <section className="flex flex-row h-screen justify-center items-center">
            {/* FORM ENTRY --------------- */}
            <div className="2xl:w-[25vw] xl:w-[30%] lg:w-[40%] md:w-[60%] sm:w-[75%] max-w-[400px]:w-full text-start flex flex-col gap-4 justify-center items-center">
                {pages === "login" ? <LoginForm /> : <RegisterForm />}
            </div>
            {/* END FORM ENTRY --------------- */}

        </section>
    )
}

export default AuthenticationPages;