

const Footer = () => {
    return (
        <div id="contact" className="bg-blue text-white  py-14 md:px-32 px-3 ">
            <div className="container flex flex-col  items-center justify-center space-y-4 font-fontpp mx-auto">
                <h3 className="md:text-4xl text-xl font-extrabold">Get In Touch</h3>
                <p className="md:w-[520px] mx-auto text-center font-medium text-[#a09e9e] ">
                    Although I am not Currently looking for any new opportunites, my inbox is always
                    open.Wether you have a question or just wat to say hi, I will try my best to get back to you!
                </p>
                {/* btn */}
                <div>
                    <a href="mailto:royprosanta172@gmail.com">
                        <button className="rounded-lg transition-colors duration-300 delay-300 font-normal border-2 border-nevy px-5 hover:text-white text-nevy hover:bg-[#556add] py-2">
                            Say Hello
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Footer;