import ArtPiecePreview from "../ArtPiecePreview/ArtPiecePreview";

export default function ArtPieces({
  pieces,
  artPiecesInfo,
  handleToggleFavorite,
}) {
  return (
    <ul>
      {pieces.map((piece) => (
        <li key={piece.id}>
          <ArtPiecePreview
            image={piece.imageSource}
            title={piece.name}
            artist={piece.artist}
            slug={piece.slug}
            handleToggleFavorite={handleToggleFavorite}
            artPiecesInfo={artPiecesInfo}
          />
        </li>
      ))}
    </ul>
  );
}
