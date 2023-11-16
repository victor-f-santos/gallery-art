import { render, screen } from "@testing-library/react";
import Spotlight from "./Spotlight";

const mockPiece = {
  image: "https://example-apis.vercel.app/assets/art/orange-red-and-green.jpg",
  artist: "Steve Johnson",
};

test("art image is displayed", () => {
  render(<Spotlight image={mockPiece.image} />);
  const imageElement = screen.getAllByRole("img");
  expect(imageElement[0]).toBeInTheDocument();
});
test("art piece artist is displayed", () => {
  render(<Spotlight artist={mockPiece.artist} />);
  const artistElement = screen.getByText("Steve Johnson");
  expect(artistElement).toBeInTheDocument();
});
