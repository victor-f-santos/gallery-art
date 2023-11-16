import Spotlight from "@/components/Spotlight/Spotlight";

export default function SpotlightPage({ artPieces }) {
  function getRandomPiece(array) {
    return array[Math.floor(Math.random() * array.length)];
  }
  const randomPiece = getRandomPiece(artPieces);

  return (
    <Spotlight image={randomPiece?.imageSource} artist={randomPiece.artist} />
  );
}
