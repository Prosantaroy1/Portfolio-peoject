import { motion } from "framer-motion"
import { Link } from "react-scroll";
import { Slidedown } from "../../aniamtion/animation";

const Banner = () => {
    return (
        <div className="text-white py-44 md:px-32 px-3">
            <div className="container   font-fontpp space-y-4 mx-auto">
                {/* banner title */}
                <motion.h4
                    variants={Slidedown(0.2)}
                    initial='initial'
                    animate="animate"
                    className="text-nevy font-semibold text-xl">
                    Hello, I am
                </motion.h4>
                <motion.h3
                    variants={Slidedown(0.4)}
                    initial='initial'
                    animate="animate"
                    className="md:text-4xl text-2xl font-bold">
                    Prosanta Chandra Roy
                </motion.h3>
                <motion.h2
                    variants={Slidedown(0.6)}
                    initial='initial'
                    animate="animate"
                    className="md:text-4xl text-2xl font-bold text-[#a09e9e]">
                    I build things for the web
                </motion.h2>
                <motion.p
                    variants={Slidedown(0.8)}
                    initial='initial'
                    animate="animate"
                    className="lg:w-2/3 text-[#a09e9e] md:text-xl font-normal">
                    I am a Frontend Developer  in  ReactJs, Javascript, Tailwind CSS,Bootstrap CSS, EJS and Intermediate NodeJS, ExpressJs,
                    MongoDB. I have a strong foundation in front-end
                    and skilled in creating user-friendly and responsive web applications using React and ecosystem.
                    <Link to="about"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}><span className="text-nevy cursor-pointer font-semibold ">Learn More</span></Link>
                </motion.p>
                {/* btn */}
                <motion.div
                    variants={Slidedown(1)}
                    initial='initial'
                    animate="animate"
                >
                    <Link
                        to="project"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}>
                        <button className="rounded-md border border-nevy px-5 font-medium py-3 inline  text-nevy">
                            view my project
                        </button>
                    </Link>
                </motion.div>
            </div>
        </div>
    );
};

export default Banner;