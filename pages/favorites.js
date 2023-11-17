import ArtPieces from "@/components/ArtPieces/ArtPieces";

export default function FavoritesPage({ artPiecesInfo, artPieces }) {
  const favoritePiecesInfos = artPiecesInfo.filter((info) => info.isFavorite);
  //   const favoritePieces = artPieces.filter();
  console.log("favoritePiecesInfos: ", favoritePiecesInfos);
  console.log("artPieces:", artPieces);
  const filteredArray = artPieces.filter((artPiece) => {
    return favoritePiecesInfos.find(
      (info) => artPiece.slug === info.slug && info.isFavorite
    );
  });
  console.log("filteredArray: ", filteredArray);
  return (
    <>
      <ArtPieces pieces={filteredArray} />
    </>
  );
}

// pieces, artPiecesInfo, handleToggleFavorite
