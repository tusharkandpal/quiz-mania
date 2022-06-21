import "./Nav.css";
import logo from "../../../Quiz.svg";
import { MdLightMode } from "react-icons/md";
import { Link } from "react-router-dom";
import { useQuiz } from "../../../context/quiz-context";

export const Nav = (): JSX.Element => {
  const { quizDispatch } = useQuiz();
  
  return (
    <nav className="navbar">
      <Link to="/" onClick={() => quizDispatch({ type: "RESET" })}>
        <img className="navbar_logo" src={logo} alt="navbar-logo" />
      </Link>
      <MdLightMode size={30} />
    </nav>
  );
};
