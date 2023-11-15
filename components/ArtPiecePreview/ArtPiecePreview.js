export function ArtPiecePreview({ image, title, artist }) {
  return (
    <div className="artPieceCard">
      <img src={image}></img>
      {title}
      {artist}
    </div>
  );
}
