import { render, screen } from "@testing-library/react";

import ArtPieceDetails from "./ArtPieceDetails";

const mockPiece = {
  imageSource:
    "https://example-apis.vercel.app/assets/art/orange-red-and-green.jpg",
  name: "Orange Red and Green Abstract Painting",
  artist: "Steve Johnson",
  year: "2018",
  genre: "Abstract Painting",
};

test("The art piece image is displayed", () => {
  render(<ArtPieceDetails image={mockPiece.image} title={mockPiece.name} />);
  const imageElement = screen.getByRole("img",{name:"Orange Red and Green Abstract Painting"});
  expect(imageElement).toBeInTheDocument();
});
test("The art piece title is displayed", () => {
  render(<ArtPieceDetails title={mockPiece.name} />);
  const titleElement = screen.getByText(
    "Orange Red and Green Abstract Painting"
  );
  expect(titleElement).toBeInTheDocument();
});
test("The art piece artist is displayed", () => {
  render(<ArtPieceDetails artist={mockPiece.artist} />);
  const artistElement = screen.getByText("Steve Johnson");
  expect(artistElement).toBeInTheDocument();
});
test("The art piece year is displayed", () => {
  render(<ArtPieceDetails year={mockPiece.year} />);
  const yearElement = screen.getByText("2018");
  expect(yearElement).toBeInTheDocument();
});
test("The art piece genre is displayed", () => {
  render(<ArtPieceDetails genre={mockPiece.genre} />);
  const genreElement = screen.getByText("Abstract Painting");
  expect(genreElement).toBeInTheDocument();
});
test("The return button is displayed", () => {
  render(<ArtPieceDetails />);
  const button = screen.getByRole("button", {name: 'Return'});
  expect(button).toBeInTheDocument();
});
