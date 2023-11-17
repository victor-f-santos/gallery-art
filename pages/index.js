import Spotlight from "@/components/Spotlight/Spotlight";
import { useEffect, useState } from "react";

export default function SpotlightPage({
  artPieces,
  handleToggleFavorite,
  artPiecesInfo,
}) {

  const [randomPiece, setRandomPiece] = useState({});
  useEffect(() => {
    setRandomPiece(getRandomPiece(artPieces));
  }, []);

  function getRandomPiece(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  return (
    <Spotlight
      image={randomPiece?.imageSource}
      artist={randomPiece.artist}
      slug={randomPiece.slug}
      handleToggleFavorite={handleToggleFavorite}
      artPiecesInfo={artPiecesInfo}
    />
  );
}
