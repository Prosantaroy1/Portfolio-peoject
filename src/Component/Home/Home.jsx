import About from "../About/About";
import Banner from "../Banner/Banner";
import Project from "../Project/Project";
import Skill from "../Skill/Skill";

const Home = () => {
    return (
        <div id="home" className="bg-blue ">
            <Banner />
            <About />
            <Skill />
            <Project />
        </div>
    );
};

export default Home;