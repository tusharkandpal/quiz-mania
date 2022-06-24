import "./Nav.css";
import { ReactComponent as Logo } from "../../../Quiz.svg";
import { MdLightMode, MdModeNight } from "react-icons/md";
import { Link } from "react-router-dom";
import { useQuiz, useTheme } from "../../../context/context";

export const Nav = (): JSX.Element => {
  const { quizDispatch } = useQuiz();
  const { theme, setTheme } = useTheme();

  return (
    <nav className="navbar">
      <Link to="/" onClick={() => quizDispatch({ type: "RESET" })}>
        <Logo className="navbar_logo" />
      </Link>
      {theme === "light" ? (
        <MdModeNight
          size={30}
          onClick={() => setTheme("dark")}
          className="theme_icon"
          title="dark mode"
        />
      ) : (
        <MdLightMode
          size={30}
          onClick={() => setTheme("light")}
          className="theme_icon"
          title="light mode"
        />
      )}
    </nav>
  );
};
