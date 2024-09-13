import { GoCheckCircle } from "react-icons/go";
import { motion } from "framer-motion"
import { Slidedown } from '../../aniamtion/animation';

const Skill = () => {
    return (
        <div id="skills" className="mt-14 py-16 md:px-32 px-4 text-white">
            <div className="container   font-fontppmx-auto">
                {/* title */}
                <motion.h3
                    variants={Slidedown(0.5)}
                    initial='initial'
                    whileInView={"animate"}
                    className="text-4xl font-bold text-center">
                    My Skills
                </motion.h3>
                <motion.p
                    variants={Slidedown(0.5)}
                    initial='initial'
                    whileInView={"animate"}
                    className="text-xl font-light text-[#a09e9e] text-center pt-3">
                    Here are a few technologies I have been working with recently:
                </motion.p>
                {/* skill part */}
                <div className="flex items-center flex-wrap  justify-center md:justify-between md:gap-1 gap-6 md:px-20 pt-12">
                    {/* frontend */}
                    <div className="bg-white rounded-lg px-12 py-12  text-black">
                        <h4 className="text-2xl text-center font-semibold">Frontend developer</h4>
                        <div className="flex items-center gap-16 pt-6 justify-between">
                            <ul className="pt-3 space-y-3">
                                <li className="flex items-start gap-2">
                                    <GoCheckCircle className="text-2xl bg-nevy rounded-full  font-bold" />
                                    <h3 className="font-semibold">HTML<span className="block text-xs">Experienced</span></h3>
                                </li>
                                <li className="flex items-start gap-2">
                                    <GoCheckCircle className="text-2xl bg-nevy rounded-full  font-bold" />
                                    <h3 className="font-semibold">CSS<span className="block text-xs">Experienced</span></h3>
                                </li>
                                <li className="flex items-start gap-2">
                                    <GoCheckCircle className="text-2xl bg-nevy rounded-full font-bold" />
                                    <h3 className="font-semibold">Tailwind<span className="block text-xs">Experienced</span></h3>
                                </li>

                            </ul>
                            <ul className="pt-3 space-y-3">
                                <li className="flex items-start gap-2">
                                    <GoCheckCircle className="text-2xl bg-nevy rounded-full  font-bold" />
                                    <h3 className="font-semibold">Javascript<span className="block text-xs">Intermediate</span></h3>
                                </li>
                                <li className="flex items-start gap-2">
                                    <GoCheckCircle className="text-2xl bg-nevy rounded-full  font-bold" />
                                    <h3 className="font-semibold">Javascript (ES6+)<span className="block text-xs">Experienced</span></h3>
                                </li>
                                <li className="flex items-start gap-2">
                                    <GoCheckCircle className="text-2xl bg-nevy rounded-full  font-bold" />
                                    <h3 className="font-semibold">React<span className="block text-xs">Intermediate</span></h3>
                                </li>

                            </ul>
                        </div>
                    </div>
                    {/* backend */}
                    <div className="bg-white rounded-lg px-12 py-6 text-black">
                        <h4 className="text-2xl text-center font-semibold">Backend developer</h4>
                        <div className="flex items-start  gap-16 pt-6 justify-between">
                            <ul className="pt-3 space-y-3">
                                <li className="flex items-start gap-2">
                                    <GoCheckCircle className="text-2xl bg-nevy rounded-full  font-bold" />
                                    <h3 className="font-semibold">Node<span className="block text-xs">Intermediate</span></h3>
                                </li>
                                <li className="flex items-start gap-2">
                                    <GoCheckCircle className="text-2xl bg-nevy rounded-full  font-bold" />
                                    <h3 className="font-semibold">Express<span className="block text-xs">Intermediate</span></h3>
                                </li>
                                <li className="flex items-start gap-2">
                                    <GoCheckCircle className="text-2xl bg-nevy rounded-full font-bold" />
                                    <h3 className="font-semibold">MongDB<span className="block text-xs">Bacis</span></h3>
                                </li>

                            </ul>
                            <ul className="pt-3 space-y-3">
                                <li className="flex items-start gap-2">
                                    <GoCheckCircle className="text-2xl bg-nevy rounded-full  font-bold" />
                                    <h3 className="font-semibold">Firebase<span className="block text-xs">Intermediate</span></h3>
                                </li>
                                <li className="flex items-start gap-2">
                                    <GoCheckCircle className="text-2xl bg-nevy rounded-full  font-bold" />
                                    <h3 className="font-semibold">Git<span className="block text-xs">Experienced</span></h3>
                                </li>

                            </ul>
                        </div>
                        <p className="text-center pt-3 font-semibold text-xl">This Technology Learnning Process..</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skill;