export function ArtPiecePreview({ image, title, artist }) {
  return (
    <div>
      <img src={image}></img>
      {title}
      {artist}
    </div>
  );
}
