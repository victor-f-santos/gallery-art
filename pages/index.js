import { ArtPieces } from "@/components/ArtPieces/ArtPieces";
import { Spotlight } from "@/components/Spotlight/Spotlight";

export default function HomePage({artPieces}) {

  function getRandomPiece(array) {
    return array[Math.floor(Math.random() * array.length)];
  }
  const randomPiece = getRandomPiece(artPieces);

  return (
    <div>
      <Spotlight image={randomPiece?.imageSource} artist={randomPiece.artist} />
      <ArtPieces pieces={artPieces} />
    </div>
  );
}
