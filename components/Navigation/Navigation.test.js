import { render, screen } from "@testing-library/react";
import Navigation from "./Navigation";

test("Navigation link labeled Spotlight is displayed", () => {
  render(<Navigation />);
  const link = screen.getByRole('link', {
    name: 'Spotlight'
  })
  expect(link).toBeInTheDocument()
});

test("Navigation link labeled Pieces is displayed", () => {
  render(<Navigation />);
  const link = screen.getByRole('link', {
    name: 'Pieces'
  })
  expect(link).toBeInTheDocument()
});

test("Navigation link labeled Favorites is displayed", () => {
  render(<Navigation />);
  const link = screen.getByRole('link', {
    name: 'Favorites'
  })
  expect(link).toBeInTheDocument()
});
