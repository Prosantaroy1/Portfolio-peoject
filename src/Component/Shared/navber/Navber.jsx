import { useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import { motion } from "framer-motion"
import { Slideup } from "../../../aniamtion/animation";

const Navber = () => {
    // toggol
    const [open, setOpen] = useState(false);
    

    return (
        <>
            <div className="relative">
                <div className="bg-blue  shadow-md shadow-black fixed top-0 left-0 right-0 py-5 md:px-2 px-4">
                    <nav className="container text-[#e7e5e5] flex items-center justify-between font-fontpp mx-auto">
                        {/* nav left */}
                        <motion.h4
                            variants={Slideup(0.04)}
                            initial='initial'
                            animate="animate"
                            className="md:text-xl rounded-md border border-nevy px-3 py-2 inline font-bold text-nevy">
                            Prosanta
                        </motion.h4>
                        {/* nav right */}
                        <div className="hidden md:flex">
                            <ul className="flex font-medium  items-center gap-8">
                                <motion.li
                                    variants={Slideup(0.04)}
                                    initial='initial'
                                    animate="animate"
                                >
                                    <Link
                                        to="home"
                                        spy={true}
                                        smooth={true}
                                        offset={-100}
                                        duration={500}>
                                        <NavLink >Home</NavLink>
                                    </Link>
                                </motion.li>
                                <motion.li
                                    variants={Slideup(0.06)}
                                    initial='initial'
                                    animate="animate">
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
                                </motion.li>
                                <motion.li
                                    variants={Slideup(0.08)}
                                    initial='initial'
                                    animate="animate">
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
                                </motion.li>
                                <motion.li
                                    variants={Slideup(0.10)}
                                    initial='initial'
                                    animate="animate">
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
                                </motion.li>
                                <motion.li
                                    variants={Slideup(0.12)}
                                    initial='initial'
                                    animate="animate">
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
                                </motion.li>
                                <motion.li
                                    variants={Slideup(0.14)}
                                    initial='initial'
                                    animate="animate">
                                    <NavLink to='https://drive.google.com/file/d/1MiLiQ5YvrZ-2YhVq5xz2bF-9v6feqMky/view?usp=sharing' target="_blank" className='rounded-md border  border-nevy px-3 py-2 inline  text-nevy'>
                                        Resume
                                    </NavLink>
                                </motion.li>
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
                    open && <div className=" py-5 bg-blue w-full h-screen  fixed z-30 top-20 left-0  text-white ">
                        <ul className="flex flex-col  justify-center space-y-6 font-medium  items-center gap-8">
                            <li>
                                <Link
                                    to="home"
                                    spy={true}
                                    smooth={true}
                                    offset={-100}
                                    duration={500}>
                                    <NavLink onClick={()=>setOpen(false)} target="_top">Home</NavLink>
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
                                    onClick={()=>setOpen(false)} 
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
                                    <NavLink target="_top" onClick={()=>setOpen(false)}  className='flex items-center'>
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
                                    <NavLink onClick={()=>setOpen(false)}  target="_top" className='flex items-center'>
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
                                    <NavLink onClick={()=>setOpen(false)}  target="_top" className='flex items-center'>
                                        <span className="text-nevy">04.</span>Contact
                                    </NavLink>
                                </Link>
                            </li>
                            <li>
                                <a href="www.youtube.com" target="_blank" onClick={()=>setOpen(false)}  className='rounded-md border  border-nevy px-3 py-2 inline  text-nevy'>
                                   Resume
                                </a>
                            </li>
                        </ul>
                    </div>
                }
            </div>
        </>
    );
};

export default Navber;