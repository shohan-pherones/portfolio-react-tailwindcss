import SectionTitle from "../components/SectionTitle";
import { SiMongodb, SiExpress, SiReact, SiNodedotjs } from "react-icons/si";

const Skills = () => {
  return (
    <section className="skills container mx-auto py-10 pt-20">
      <SectionTitle title="Skills" />
      <div className="skills-wrapper flex gap-10">
        <div className="skills-left flex-1 flex flex-col gap-3">
          <p>
            <span className="text-cyan-400">Front-End:</span> HTML, CSS,
            Bootstrap, Tailwind CSS, JavaScript (ES6+), React.js, React Router,
            Redux.js, Redux Toolkit, Axios, GSAP, Firebase, Material UI,
            TypeScript, Next.js
          </p>
          <p>
            <span className="text-cyan-400">Back-End:</span> Node.js,
            Express.js, MongoDB, Mongoose, JWT, Stripe
          </p>
        </div>
        <div className="skills-right flex-1 flex justify-between text-6xl text-cyan-400">
          <span>
            <SiMongodb />
          </span>
          <span>
            <SiExpress />
          </span>
          <span>
            <SiReact />
          </span>
          <span>
            <SiNodedotjs />
          </span>
        </div>
      </div>
    </section>
  );
};

export default Skills;
