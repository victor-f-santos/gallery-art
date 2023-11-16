import Link from "next/link";
import FavoriteButton from "../FavoriteButton/FavoriteButton";

export default function ArtPiecePreview({ image, title, artist, slug ,handleToggleFavorite }) {
  return (
    <div>
      <Link href={`/art-pieces/${slug}`}>
        <img src={image} alt={title}></img>
      </Link>
      <p>
        {title}
        {artist}
      </p>
      <FavoriteButton isFavorite={true} onToggleFavorite={handleToggleFavorite}/>
    </div>
  );
}
