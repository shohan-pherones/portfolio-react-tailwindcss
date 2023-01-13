import { Link, NavLink } from "react-router-dom";
import Anchor from "../components/Anchor";

const Navbar = () => {
  return (
    <nav className="navbar container mx-auto h-20 flex justify-between items-center">
      <Link
        to="/"
        className="logo font-medium text-cyan-400 hover:text-gray-300 duration-500"
      >
        tumpa_
      </Link>
      <div className="links flex gap-10">
        <NavLink
          to="/"
          className="link-item hover:text-cyan-400 duration-500 group"
        >
          <span className="text-gray-500 group-hover:text-cyan-400 duration-500">
            i.
          </span>{" "}
          Home
        </NavLink>
        <NavLink
          to="/about"
          className="link-item hover:text-cyan-400 duration-500 group"
        >
          <span className="text-gray-500 group-hover:text-cyan-400 duration-500">
            ii.
          </span>{" "}
          About
        </NavLink>
        <NavLink
          to="/skills"
          className="link-item hover:text-cyan-400 duration-500 group"
        >
          <span className="text-gray-500 group-hover:text-cyan-400 duration-500">
            iii.
          </span>{" "}
          Skills
        </NavLink>
        <NavLink
          to="/projects"
          className="link-item hover:text-cyan-400 duration-500 group"
        >
          <span className="text-gray-500 group-hover:text-cyan-400 duration-500">
            iv.
          </span>{" "}
          Projects
        </NavLink>
        <NavLink
          to="/contact"
          className="link-item hover:text-cyan-400 duration-500 group"
        >
          <span className="text-gray-500 group-hover:text-cyan-400 duration-500">
            v.
          </span>{" "}
          Contact
        </NavLink>
      </div>
      <Anchor href="https://www.google.com" text="Résumé" />
    </nav>
  );
};

export default Navbar;
