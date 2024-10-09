import { IoMdDownload } from 'react-icons/io';
import img1 from '../../../public/img/about.jpg'
import { motion } from "framer-motion"
import { Slidedown } from '../../aniamtion/animation';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div id='about' className='text-white lg:px-32 px-4'>
            <div className="container font-fontpp mx-auto">
                {/* about title section */}
                <div className='space-y-3 '>
                    <motion.h3
                        variants={Slidedown(0.4)}
                        initial='initial'
                        whileInView={"animate"}
                        className='text-4xl text-center font-bold'>
                        ABOUT ME
                    </motion.h3>
                    <motion.p
                        variants={Slidedown(0.6)}
                        initial='initial'
                        whileInView={"animate"}
                        className='font-light xl:w-[650px] mx-auto text-[#a09e9e] md:text-xl text-center'>
                        Here you will find more information about me, what I do,
                        and my current skills mostly in terms of programming and technology
                    </motion.p>
                </div>
                {/* about details section */}
                <div className=' pt-16 flex flex-col lg:flex-row items-center  gap-10'>
                    {/* img part */}
                    <div className='border-4 p-2 w-full lg:w-1/2 rounded-lg hover:border-0 border-nevy border-dotted'>
                        <img src={img1} alt="" className='w-full h-80 rounded-2xl' />
                    </div>
                    {/* text title */}
                    <div className='text-[#f3eeee] w-full lg:w-2/3  md:pt-1 pt-7 md:px-1 px-2'>
                        <p className='text-xl font-fontpp font-light'>
                            I&apos;m a Frontend Web Developer building the Front-end of Websites and Web Applications that leads
                            to the success of the overall product.
                        </p>
                        <p className='pb-5 text-xl font-fontpp font-light pt-3'>
                            My interest in Programmmig started back in 2023 when i
                            decided to try editing custom Web App.
                        </p>
                        {/* btn */}
                        <Link target='_blank' to='https://drive.google.com/file/d/1MiLiQ5YvrZ-2YhVq5xz2bF-9v6feqMky/view?usp=sharing'>
                            <button className='border cursor-pointer flex items-center gap-2 border-nevy px-4 py-2 text-nevy rounded-md'>
                                Download CV <IoMdDownload className='text-2xl' />
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;