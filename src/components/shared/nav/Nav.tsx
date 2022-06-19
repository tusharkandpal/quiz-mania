import "./Nav.css";
import logo from "../../../Quiz.svg";
import { MdLightMode, MdModeNight } from "react-icons/md";
import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <nav className="navbar">
      <Link to="/">
        <img className="navbar_logo" src={logo} alt="navbar-logo" />
      </Link>
      <MdLightMode size={30} />
    </nav>
  );
};
