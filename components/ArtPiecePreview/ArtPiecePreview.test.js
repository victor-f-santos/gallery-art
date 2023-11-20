import { render, screen } from "@testing-library/react";
import ArtPiecePreview from "./ArtPiecePreview";

const mockPiece = {
  image: "https://example-apis.vercel.app/assets/art/orange-red-and-green.jpg",
  artist: "Steve Johnson",
  title: "whatever name",
};

test("Each art piece image is displayed", () => {
  render(<ArtPiecePreview image={mockPiece.image} title={mockPiece.title} />);
  const imageElement = screen.getByRole('img',{name:"whatever name"} );
  expect(imageElement).toBeInTheDocument();
});
test("Each art piece title is displayed", () => {
  render(<ArtPiecePreview title={mockPiece.title} />);
  const titleElement = screen.getByText("whatever name");
  expect(titleElement).toBeInTheDocument();
});
test("Each art piece artist is displayed", () => {
  render(<ArtPiecePreview artist={mockPiece.artist} />);
  const artistElement = screen.getByText("Steve Johnson");
  expect(artistElement).toBeInTheDocument();
});
