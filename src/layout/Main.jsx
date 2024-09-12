import { Outlet } from "react-router-dom";
import Navber from "../Component/Shared/navber/Navber";
import Footer from "../Component/Shared/Footer/Footer";

const Main = () => {
    return (
        <div>
            <Navber/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Main;