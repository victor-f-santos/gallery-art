import ArtPieces from "@/components/ArtPieces/ArtPieces";

export default function ArtPiecesPage({ artPieces, artPiecesInfo , handleToggleFavorite}) {
  return <ArtPieces pieces={artPieces} handleToggleFavorite={handleToggleFavorite} artPiecesInfo={artPiecesInfo}  />;
}
