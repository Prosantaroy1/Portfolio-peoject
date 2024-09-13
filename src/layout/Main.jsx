import { NavLink, Outlet } from "react-router-dom";
import Navber from "../Component/Shared/navber/Navber";
import Footer from "../Component/Shared/Footer/Footer";
import { FaFacebook, FaGithub, FaLinkedin, FaSquareInstagram, FaSquareXTwitter } from "react-icons/fa6";

const Main = () => {
    return (
        <div>
            <Navber/>
            <Outlet/>
            <Footer/>
            {/* link */}
            <div className="fixed md:flex hidden bottom-20 left-8  text-white">
                <ul className="flex  flex-col gap-6">
                    <li className="hover:-translate-y-3 transition-all delay-200">
                        <NavLink target="_blank" to='https://github.com/Prosantaroy1'><FaGithub className="text-4xl bg-white text-black p-2 rounded-full"/></NavLink>
                    </li>
                    <li className="hover:-translate-y-3 transition-all delay-200">
                        <NavLink target="_blank" to='https://www.facebook.com/prosantaroy123'><FaFacebook className="text-4xl bg-white text-black p-2 rounded-full" /></NavLink>
                    </li>
                    <li className="hover:-translate-y-3 transition-all delay-200">
                        <NavLink target="_blank" to='https://x.com/RoyProsant81869'><FaSquareXTwitter className="text-4xl bg-white text-black p-2 rounded-full"/></NavLink>
                    </li>
                    <li className="hover:-translate-y-3 transition-all delay-200">
                        <NavLink target="_blank" to='https://www.linkedin.com/in/prosantaroy09/'><FaLinkedin className="text-4xl bg-white text-black p-2 rounded-full"/></NavLink>
                    </li>
                    <li className="hover:-translate-y-3 transition-all delay-200">
                        <NavLink target="_blank" to='https://www.instagram.com/dev.prosantaroy/'><FaSquareInstagram  className="text-4xl bg-white text-black p-2 rounded-full"/></NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Main;