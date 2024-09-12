import { FaBarsStaggered } from "react-icons/fa6";
import { NavLink } from "react-router-dom";


const Navber = () => {
    return (
        <div className="bg-blue shadow-md shadow-black fixed top-0 left-0 right-0 py-3 md:px-2 px-4">
            <nav className="container text-[#e7e5e5] flex items-center justify-between font-fontpp mx-auto">
                {/* nav left */}
                <h4 className="md:text-xl rounded-md border border-nevy px-3 py-2 inline font-bold text-nevy">Prosanta</h4>
                {/* nav right */}
                <div className="hidden md:flex">
                    <ul className="flex font-medium  items-center gap-8">
                        <li>
                            <NavLink>Home</NavLink>
                        </li>
                        <li>
                            <NavLink className='flex items-center'>
                                <span className="text-nevy">01.</span>About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className='flex items-center'>
                                <span className="text-nevy">02.</span>Project
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className='flex items-center'>
                                <span className="text-nevy">03.</span>Service
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className='flex items-center'>
                                <span className="text-nevy">04.</span>Contact
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className='rounded-md border  border-nevy px-3 py-2 inline  text-nevy'>
                                Resume
                            </NavLink>
                        </li>
                    </ul>
                </div>
                {/* responsive */}
                <div className="md:hidden flex">
                    <FaBarsStaggered className="text-2xl"/>
                </div>
            </nav>
        </div>
    );
};

export default Navber;