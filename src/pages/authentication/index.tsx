import HeroAuthenticationImages from "@/assets/images/hero-authentication.jpg"
import { useAuthPagesStore } from "@/store/auth.store";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import BrandLogo from "@/assets/images/brandlogo.png";

const AuthenticationPages = () => {
    const { pages } = useAuthPagesStore();


    return (
        <section className="flex flex-row h-[100vh]">
            {/* FORM ENTRY --------------- */}
            <div className="w-[50vw] text-start flex flex-col gap-4 justify-center items-center">
                <img src={BrandLogo} className="w-[350px]" alt="Brand Logo" />
                {pages === "login" ? <LoginForm /> : <RegisterForm />}
            </div>
            {/* END FORM ENTRY --------------- */}


            {/* HERO --------------- */}
            <div
                style={{ backgroundImage: `url(${HeroAuthenticationImages})` }}
                className="bg-cover bg-center h-full w-[50vw]"
            >
                <h2>Hello</h2>
            </div>
            {/* END HERO --------------- */}
        </section>
    )
}

export default AuthenticationPages;