import { useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";


const Navber = () => {
    // toggol
    const [open, setOpen] = useState(false);


    return (
        <>
            <div className="relative">
                <div className="bg-blue  shadow-md shadow-black fixed top-0 left-0 right-0 py-5 md:px-2 px-4">
                    <nav className="container text-[#e7e5e5] flex items-center justify-between font-fontpp mx-auto">
                        {/* nav left */}
                        <h4 className="md:text-xl rounded-md border border-nevy px-3 py-2 inline font-bold text-nevy">Prosanta</h4>
                        {/* nav right */}
                        <div className="hidden md:flex">
                            <ul className="flex font-medium  items-center gap-8">
                                <li>
                                    <Link
                                        to="home"
                                        spy={true}
                                        smooth={true}
                                        offset={-100}
                                        duration={500}>
                                        <NavLink >Home</NavLink>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="about"
                                        spy={true}
                                        smooth={true}
                                        offset={-100}
                                        duration={500}>
                                        <NavLink
                                            className='flex items-center'>
                                            <span className="text-nevy">01.</span>About
                                        </NavLink>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="project"
                                        spy={true}
                                        smooth={true}
                                        offset={-100}
                                        duration={500}>
                                        <NavLink className='flex items-center'>
                                            <span className="text-nevy">02.</span>Project
                                        </NavLink>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="skills"
                                        spy={true}
                                        smooth={true}
                                        offset={-100}
                                        duration={500}>
                                        <NavLink className='flex items-center'>
                                            <span className="text-nevy">03.</span>Skills
                                        </NavLink>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="contact"
                                        spy={true}
                                        smooth={true}
                                        offset={-100}
                                        duration={500}>
                                        <NavLink className='flex items-center'>
                                            <span className="text-nevy">04.</span>Contact
                                        </NavLink>
                                    </Link>
                                </li>
                                <li>
                                    <NavLink className='rounded-md border  border-nevy px-3 py-2 inline  text-nevy'>
                                        Resume
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                        {/* responsive */}
                        <div onClick={() => setOpen(!open)} className="md:hidden flex">
                            {
                                open ? <IoClose className="text-2xl" /> : <FaBarsStaggered className="text-2xl" />
                            }
                        </div>
                    </nav>
                </div>
            </div>
            {/* moblie */}
            <div className="flex md:hidden">
                {
                    open && <div className=" py-5 bg-blue w-full  absolute top-20 left-0  text-white ">
                        <ul className="flex flex-col  justify-center space-y-6 font-medium  items-center gap-8">
                            <li>
                                <Link
                                    to="home"
                                    spy={true}
                                    smooth={true}
                                    offset={-100}
                                    duration={500}>
                                    <NavLink target="_top">Home</NavLink>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="about"
                                    spy={true}
                                    smooth={true}
                                    offset={-100}
                                    duration={500}>
                                    <NavLink target="_top"
                                        className='flex items-center'>
                                        <span className="text-nevy">01.</span>About
                                    </NavLink>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="project"
                                    spy={true}
                                    smooth={true}
                                    offset={-100}
                                    duration={500}>
                                    <NavLink target="_top" className='flex items-center'>
                                        <span className="text-nevy">02.</span>Project
                                    </NavLink>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="skills"
                                    spy={true}
                                    smooth={true}
                                    offset={-100}
                                    duration={500}>
                                    <NavLink target="_top" className='flex items-center'>
                                        <span className="text-nevy">03.</span>Skills
                                    </NavLink>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="contact"
                                    spy={true}
                                    smooth={true}
                                    offset={-100}
                                    duration={500}>
                                    <NavLink target="_top" className='flex items-center'>
                                        <span className="text-nevy">04.</span>Contact
                                    </NavLink>
                                </Link>
                            </li>
                            <li>
                                <NavLink className='rounded-md border  border-nevy px-3 py-2 inline  text-nevy'>
                                    Resume
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                }
            </div>
        </>
    );
};

export default Navber;