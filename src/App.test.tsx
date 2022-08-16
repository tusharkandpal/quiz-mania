import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { QuizProvider, ThemeProvider } from "./context/context";
import App from "./App";

test("renders App component", () => {
  render(
    <Router>
      <QuizProvider>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </QuizProvider>
    </Router>
  );

  expect(screen.getByRole("navigation")).toBeInTheDocument();
});
