import { motion } from "framer-motion"
import { Slidedown } from "../../../aniamtion/animation";


const Footer = () => {
    return (
        <div id="contact" className="bg-blue text-white  py-20 md:px-32 px-3 ">
            <div className="container flex flex-col  items-center justify-center space-y-4 font-fontpp mx-auto">
                <motion.h3
                    variants={Slidedown(0.3)}
                    initial='initial'
                    whileInView={"animate"}
                    className="md:text-4xl text-xl font-extrabold">
                    Get In Touch
                </motion.h3>
                <motion.p
                    variants={Slidedown(0.6)}
                    initial='initial'
                    whileInView={"animate"}
                    className="md:w-[520px] mx-auto text-center font-medium text-[#a09e9e] ">
                    Although I am not Currently looking for any new opportunites, my inbox is always
                    open.Wether you have a question or just wat to say hi, I will try my best to get back to you!
                </motion.p>
                {/* btn */}
                <motion.div
                    variants={Slidedown(0.9)}
                    initial='initial'
                    whileInView={"animate"}
                >
                    <a href="mailto:royprosanta172@gmail.com">
                        <button className="rounded-lg transition-colors duration-300 delay-300 font-normal border-2 border-nevy px-5 hover:text-white text-nevy hover:bg-[#556add] py-2">
                            Say Hello
                        </button>
                    </a>
                </motion.div>
            </div>
        </div>
    );
};

export default Footer;