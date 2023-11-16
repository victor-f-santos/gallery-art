export default function ArtPieceDetails({ image, title, artist, year, genre }) {
  return (
    <div>
      <img src={image} alt={title}></img>
      <p>
        {title}
        {artist}
        {year}
        {genre}
      </p>
    </div>
  );
}
