import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { CategoryCard } from "./CategoryCard";

test("renders Category component", () => {
  const Category = {
    _id: "abcd",
    imgUrl:
      "https://assets.vogue.in/photos/5e26cbd8d81c390008c3f4f0/3:2/w_1997,h_1331,c_limit/friends%20reboot%2090s%20tv%20shows.jpg",
    description: "Let’s see how much of a FRIENDS fanatic you truly are.",
    categoryName: "tv show",
  };

  render(
    <Router>
      <CategoryCard {...Category} key={Category._id} />
    </Router>
  );

  expect(screen.getByRole("img")).toBeInTheDocument();
});
