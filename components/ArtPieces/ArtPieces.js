import { ArtPiecePreview } from "../ArtPiecePreview/ArtPiecePreview";

export function ArtPieces({ pieces }) {
  console.log("pieces: ", pieces);
  return (
    <ul>
      {pieces.map((piece) => (
        <li key={piece.id}>
          <ArtPiecePreview
            image={piece.imageSource}
            title={piece.name}
            artist={piece.artist}
          />
          Hello!
        </li>
      ))}
    </ul>
  );
}
