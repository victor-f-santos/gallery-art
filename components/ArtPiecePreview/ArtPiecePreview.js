import Link from "next/link";

export default function ArtPiecePreview({ image, title, artist, slug }) {
  return (
    <div>
      <Link href={`/art-pieces/${slug}`}>
        <img src={image} alt={title}></img>
      </Link>
      <p>
        {title}
        {artist}
      </p>
    </div>
  );
}
