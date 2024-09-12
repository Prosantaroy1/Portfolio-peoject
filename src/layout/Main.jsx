import { NavLink, Outlet } from "react-router-dom";
import Navber from "../Component/Shared/navber/Navber";
import Footer from "../Component/Shared/Footer/Footer";
import { FaFacebook, FaGithub, FaLinkedin, FaSquareXTwitter } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";

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
                        <NavLink><FaGithub className="text-4xl bg-white text-black p-2 rounded-full"/></NavLink>
                    </li>
                    <li className="hover:-translate-y-3 transition-all delay-200">
                        <NavLink><FaFacebook className="text-4xl bg-white text-black p-2 rounded-full" /></NavLink>
                    </li>
                    <li className="hover:-translate-y-3 transition-all delay-200">
                        <NavLink><FaSquareXTwitter className="text-4xl bg-white text-black p-2 rounded-full"/></NavLink>
                    </li>
                    <li className="hover:-translate-y-3 transition-all delay-200">
                        <NavLink><FaLinkedin className="text-4xl bg-white text-black p-2 rounded-full"/></NavLink>
                    </li>
                    <li className="hover:-translate-y-3 transition-all delay-200">
                        <NavLink><IoMail className="text-4xl bg-white text-black p-2 rounded-full"/></NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Main;