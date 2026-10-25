import { Link } from "react-router";

function Logo() {
  return (
    <Link to="/" className="font-heading text-2xl font-extrabold md:text-3xl">
      <span className="text-accent">video</span>
      <span className="text-yellow">belajar</span>
    </Link>
  );
}

export default Logo;
