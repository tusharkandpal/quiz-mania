import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider, QuizProvider } from "../../../context/context";
import { Nav } from "./Nav";

describe("Nav component test execution", () => {
  beforeEach(() => {
    render(
      <Router>
        <ThemeProvider>
          <QuizProvider>
            <Nav />
          </QuizProvider>
        </ThemeProvider>
      </Router>
    );
  });

  test("Nav component Logo click event", () => {
    const navbarLogo = screen.getByRole("link");
    fireEvent.click(navbarLogo);

    expect(navbarLogo).toBeInTheDocument();
  });

  test("Nav component Theme toggle event", async () => {
    const themeBtn = screen.getByTitle("dark mode");
    fireEvent.click(themeBtn);

    await waitFor(() =>
      // getByRole throws an error if it cannot find an element
      expect(screen.getByTitle("light mode")).toBeInTheDocument()
    );

    fireEvent.click(screen.getByTitle("light mode"));
  });
});
