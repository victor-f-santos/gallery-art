import { render, screen } from "@testing-library/react";
import Navigation from "./Navigation";

test("Navigation link labeled Spotlight is displayed", () => {
  render(<Navigation />);
  const links = screen.getAllByRole("link");
  expect(links[0]).toHaveTextContent("Spotlight");
});

test("Navigation link labeled Pieces is displayed", () => {
  render(<Navigation />);
  const links = screen.getAllByRole("link");
  expect(links[1]).toHaveTextContent("Pieces");
});

test("Navigation link labeled Favorites is displayed", () => {
  render(<Navigation />);
  const links = screen.getAllByRole("link");
  expect(links[2]).toHaveTextContent("Favorites");
});
