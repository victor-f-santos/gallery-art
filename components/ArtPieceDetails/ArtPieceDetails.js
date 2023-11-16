import Link from "next/link";

export default function ArtPieceDetails({ image, title, artist, year, genre }) {
  return (
    <>
      <Link href="/art-pieces/">
        <button type="button">Return</button>
      </Link>
      <img src={image} alt={title}></img>
      <p>
        {title}
        {artist}
        {year}
        {genre}
      </p>
    </>
  );
}
