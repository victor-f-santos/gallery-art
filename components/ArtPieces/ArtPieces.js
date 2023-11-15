import { ArtPiecePreview } from "../ArtPiecePreview/ArtPiecePreview";

export function ArtPieces({ pieces }) {
  return (
    <ul className="artPieceList">
      {pieces.map((piece) => (
        <li key={piece.id}>
          <ArtPiecePreview
            image={piece.imageSource}
            title={piece.name}
            artist={piece.artist}
          />
        </li>
      ))}
    </ul>
  );
}
