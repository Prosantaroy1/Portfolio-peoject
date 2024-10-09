
import { NavLink } from 'react-router-dom';
import img1 from '../../../public/img/agency.png'
import img2 from '../../../public/img/asdasd123.webp'
import img3 from '../../../public/img/landing.png'
import img4 from '../../../public/img/orebi.png'
import img5 from '../../../public/img/facebook.png'
import img6 from '../../../public/img/tpscholl.png'
import { motion } from "framer-motion"
import { Slidedown } from '../../aniamtion/animation';

const Project = () => {
    return (
        <div id='project' className="text-white py-14 lg:px-32 px-4">
            <div className="container font-fontpp mx-auto">
                {/* titile project */}
                <motion.h4 
                variants={Slidedown(0.5)}
                initial='initial'
                whileInView={"animate"}
                className="text-center text-4xl font-semibold">
                    PROJECTS
                </motion.h4>
                <motion.p
                variants={Slidedown(0.8)}
                initial='initial'
                whileInView={"animate"}
                 className="text-xl font-normal py-3 text-center">
                    Already I have Developed these Projects.
                </motion.p>
                {/* project */}
                <div className="py-12 w-full">
                    {/*---------- first----------- */}
                    <div className='flex flex-col xl:flex-row gap-10 items-center'>
                        {/* img part*/}
                        <div className='w-full xl:w-1/2'>
                            <NavLink to='https://it-agency-bd.netlify.app/' target='_blank'>
                                <img src={img1} alt="" className='w-full h-96 bg-white p-3 shadow-xl shadow-black' />
                            </NavLink>
                        </div>
                        {/* titile part*/}
                        <div className='font-fontpp w-full xl:w-2/3  space-y-4'>
                            <h3 className='text-2xl font-medium'>Agency Website Design & Development.</h3>
                            <p className=''>
                                Agency built with the dynamic capabilities of React.js and the Tailwind CSS or React-router
                                delivers a seamless and experience for users across all devices.
                            </p>
                            {/* tools */}
                            <ul className='flex pl-4 text-[#a09e9e] flex-wrap items-center gap-5'>
                                <li>React</li>
                                <li>HTML</li>
                                <li>Javascript</li>
                                <li>Tailwind</li>
                                <li>React-router</li>
                            </ul>
                            {/* link */}
                            <div className='font-fontpp flex items-center gap-7'>
                                <NavLink to='https://github.com/Prosantaroy1/IT-Agency' target='_blank'>
                                    <button className='border border-nevy px-4 py-2 hover:translate-x-3 delay-200 duration-200 font-medium text-nevy rounded-lg text-xl'>Github</button>
                                </NavLink>
                                <NavLink to='https://it-agency-bd.netlify.app/' target='_blank'>
                                    <button className='border border-nevy px-4 py-2 hover:translate-x-3 delay-200 duration-200font-medium text-nevy rounded-lg text-xl'>Live</button>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                    {/*---------- second ----------*/}
                    <div className='mt-14 flex flex-col-reverse xl:flex-row items-center gap-10'>
                        {/* titile part*/}
                        <div className='font-fontpp w-full xl:w-2/3 space-y-4'>
                            <h3 className='text-2xl font-medium'>Twitter Website Clone Design.</h3>
                            <p className='text-balance'>
                                Twitter built with the dynamic capabilities of React.js and the Node or CRUD Operation
                                delivers a seamless and experience for users across all devices.
                            </p>
                            {/* tools */}
                            <ul className='flex pl-4  text-[#a09e9e] flex-wrap items-center gap-5'>
                                <li>React</li>
                                <li>Node</li>
                                <li>Tailwind</li>
                                <li>MongoDb</li>
                                <li>Express</li>
                                <li>Firebase</li>
                            </ul>
                            {/* link */}
                            <div className='font-fontpp flex items-center gap-7'>
                                <NavLink to='https://github.com/Prosantaroy1/Twitter-Frontend-Clone' target='_blank'>
                                    <button className='border border-nevy px-4 py-2 hover:translate-x-3 delay-200 duration-200 font-medium text-nevy rounded-lg text-xl'>Github</button>
                                </NavLink>
                                <NavLink to='https://twiiterclone12.netlify.app/login' target='_blank'>
                                    <button className='border border-nevy px-4 py-2 hover:translate-x-3 delay-200 duration-200font-medium text-nevy rounded-lg text-xl'>Live</button>
                                </NavLink>
                            </div>
                        </div>
                        {/* img part*/}
                        <div className='w-full xl:w-1/2'>
                            <NavLink to='https://twiiterclone12.netlify.app/login' target='_blank'>
                                <img src={img2} alt="" className='w-full h-96 bg-white p-3 shadow-xl shadow-black' />
                            </NavLink>
                        </div>
                    </div>
                    {/* ------------thrid---------- */}
                    <div className='mt-14 flex flex-col xl:flex-row items-center gap-10'>
                        {/* img part*/}
                        <div className='w-full xl:w-1/2'>
                            <NavLink to='https://leadingpage12.netlify.app/' target='_blank'>
                                <img src={img3} alt="" className='w-full h-96 bg-white p-3 shadow-xl shadow-black' />
                            </NavLink>
                        </div>
                        {/* titile part*/}
                        <div className='font-fontpp w-full xl:w-2/3 space-y-4'>
                            <h3 className='text-2xl font-medium'>Single Landing Website Design with React.</h3>
                            <p className='text-balance'>
                                Single Landing built with the dynamic capabilities of React.js and Animation Framer mation or React-router
                                delivers a seamless and experience for users across all devices.
                            </p>
                            {/* tools */}
                            <ul className='flex pl-4 text-[#a09e9e] flex-wrap items-center gap-5'>
                                <li>React</li>
                                <li>Framer Motion</li>
                                <li>Javascript</li>
                                <li>Tailwind</li>
                                <li>React-router</li>
                            </ul>
                            {/* link */}
                            <div className='font-fontpp flex items-center gap-7'>
                                <NavLink to='https://github.com/Prosantaroy1/landing-page-React' target='_blank'>
                                    <button className='border border-nevy px-4 py-2 hover:translate-x-3 delay-200 duration-200 font-medium text-nevy rounded-lg text-xl'>Github</button>
                                </NavLink>
                                <NavLink to='https://leadingpage12.netlify.app/' target='_blank'>
                                    <button className='border border-nevy px-4 py-2 hover:translate-x-3 delay-200 duration-200font-medium text-nevy rounded-lg text-xl'>Live</button>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                    {/* --------four -----------*/}
                    <div className='mt-14 flex flex-col-reverse xl:flex-row gap-10 items-center'>
                        {/* titile part*/}
                        <div className='font-fontpp w-full xl:w-2/3 space-y-4'>
                            <h3 className='text-2xl font-medium'>Ecommerce Website Design & Development.</h3>
                            <p className='text-balance'>
                                Ecommerce built with the dynamic capabilities of React.js and Redux or Authentication
                                delivers a seamless and experience for users across all devices.
                            </p>
                            {/* tools */}
                            <ul className='flex pl-4 text-[#a09e9e] flex-wrap items-center gap-5'>
                                <li>React</li>
                                <li>Firebase</li>
                                <li>Redux</li>
                                <li>Tailwind</li>
                                <li>React-router</li>
                            </ul>
                            {/* link */}
                            <div className='font-fontpp flex items-center gap-7'>
                                <NavLink to='https://github.com/Prosantaroy1/Orebi-Ecommerce' target='_blank'>
                                    <button className='border border-nevy px-4 py-2 hover:translate-x-3 delay-200 duration-200 font-medium text-nevy rounded-lg text-xl'>Github</button>
                                </NavLink>
                                <NavLink to='https://tp-shop.netlify.app/' target='_blank'>
                                    <button className='border border-nevy px-4 py-2 hover:translate-x-3 delay-200 duration-200font-medium text-nevy rounded-lg text-xl'>Live</button>
                                </NavLink>
                            </div>
                        </div>
                        {/* img part*/}
                        <div className='w-full xl:w-1/2'>
                            <NavLink to='https://tp-shop.netlify.app/' target='_blank'>
                                <img src={img4} alt="" className='w-full h-96 bg-white p-3 shadow-xl shadow-black' />
                            </NavLink>
                        </div>
                    </div>
                    {/* 
                     -----------five
                     ------ */}
                    <div className='mt-14 flex flex-col xl:flex-row items-center gap-10'>
                        {/* img part*/}
                        <div className='w-full xl:w-1/2'>
                            <NavLink to='https://socialprosantafd.netlify.app/' target='_blank'>
                                <img src={img5} alt="" className='w-full h-96 bg-white p-3 shadow-xl shadow-black' />
                            </NavLink>
                        </div>
                        {/* titile part*/}
                        <div className='font-fontpp w-full xl:w-2/3 space-y-4'>
                            <h3 className='text-2xl font-medium'>Facebook clone with HTML CSS</h3>
                            <p className='text-balance'>
                                Facebook built with core HTML CSS
                                delivers a seamless and experience for users across all devices.
                            </p>
                            {/* tools */}
                            <ul className='flex pl-4 text-[#a09e9e] flex-wrap items-center gap-5'>
                                <li>HTML</li>
                                <li>CSS</li>

                            </ul>
                            {/* link */}
                            <div className='font-fontpp flex items-center gap-7'>
                                <NavLink to='https://github.com/Prosantaroy1/facebook-clone-html-css' target='_blank'>
                                    <button className='border border-nevy px-4 py-2 hover:translate-x-3 delay-200 duration-200 font-medium text-nevy rounded-lg text-xl'>Github</button>
                                </NavLink>
                                <NavLink to='https://socialprosantafd.netlify.app/' target='_blank'>
                                    <button className='border border-nevy px-4 py-2 hover:translate-x-3 delay-200 duration-200font-medium text-nevy rounded-lg text-xl'>Live</button>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                    {/* 
                     -----------six
                     ------ */}
                    <div className='mt-14 flex flex-col-reverse xl:flex-row gap-10 items-center'>
                        {/* titile part*/}
                        <div className='font-fontpp w-full xl:w-2/3 space-y-4'>
                            <h3 className='text-2xl font-medium'>TP-School Website Design & Development.</h3>
                            <p className='text-balance'>
                                TP-School built with the dynamic capabilities of React.js and Tailwind
                                delivers a seamless and experience for users across all devices.
                            </p>
                            {/* tools */}
                            <ul className='flex pl-4 text-[#a09e9e] flex-wrap items-center gap-5'>
                                <li>React</li>
                                <li>Firebase</li>
                                <li>Tailwind</li>
                                <li>React-router</li>

                            </ul>
                            {/* link */}
                            <div className='font-fontpp flex items-center gap-7'>
                                <NavLink to='https://github.com/Prosantaroy1/TP-School-Project' target='_blank'>
                                    <button className='border border-nevy px-4 py-2 hover:translate-x-3 delay-200 duration-200 font-medium text-nevy rounded-lg text-xl'>Github</button>
                                </NavLink>
                                <NavLink to='https://tpschooltech.netlify.app/' target='_blank'>
                                    <button className='border border-nevy px-4 py-2 hover:translate-x-3 delay-200 duration-200font-medium text-nevy rounded-lg text-xl'>Live</button>
                                </NavLink>
                            </div>
                        </div>
                        {/* img part*/}
                        <div className='w-full xl:w-1/2'>
                            <NavLink to='https://tpschooltech.netlify.app/' target='_blank'>
                                <img src={img6} alt="" className='w-full h-96 bg-white p-3 shadow-xl shadow-black' />
                            </NavLink>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Project;