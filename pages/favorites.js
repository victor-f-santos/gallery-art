import ArtPieces from "@/components/ArtPieces/ArtPieces";

export default function FavoritesPage({
  artPiecesInfo,
  artPieces,
  handleToggleFavorite,
}) {
  const favoritePiecesInfos = artPiecesInfo.filter((info) => info.isFavorite);
  const filteredArray = artPieces.filter((artPiece) => {
    return favoritePiecesInfos.find(
      (info) => artPiece.slug === info.slug && info.isFavorite
    );
  });

  return (
    <>
      <ArtPieces
        pieces={filteredArray}
        artPiecesInfo={artPiecesInfo}
        handleToggleFavorite={handleToggleFavorite}
      />
    </>
  );
}
