import About from "../About/About";
import Banner from "../Banner/Banner";
import Skill from "../Skill/Skill";

const Home = () => {
    return (
        <div className="bg-blue">
            <Banner/>
            <About/>
            <Skill/>
        </div>
    );
};

export default Home;