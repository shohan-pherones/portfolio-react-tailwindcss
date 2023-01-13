import { Link } from "react-router-dom";

const Button = ({ to, text }) => {
  return (
    <Link
      to={`/${to}`}
      className="bg-cyan-400/20 py-3 px-8 border border-cyan-400 rounded-sm hover:bg-cyan-400 hover:text-gray-900 font-medium duration-500 mt-3"
    >
      {text}
    </Link>
  );
};

export default Button;
