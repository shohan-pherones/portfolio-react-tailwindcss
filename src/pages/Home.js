import Hero from "../components/Hero";
import About from "./About";
import Projects from "./Projects";
import Skills from "./Skills";

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <About />
      <Skills />
      <Projects />
    </div>
  );
};

export default Home;
