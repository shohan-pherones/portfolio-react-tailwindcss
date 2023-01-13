import Hero from "../components/Hero";
import About from "./About";
import Skills from "./Skills";

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <About />
      <Skills />
    </div>
  );
};

export default Home;
