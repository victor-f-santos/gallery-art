import Link from "next/link";
import FavoriteButton from "../FavoriteButton/FavoriteButton";

export default function ArtPiecePreview({ image, title, artist, slug ,handleToggleFavorite,artPiecesInfo }) {
  const artPieceInfo = artPiecesInfo.find( (info) => info.slug===slug )
  return (
    <div>
      <Link href={`/art-pieces/${slug}`}>
        <img src={image} alt={title}></img>
      </Link>
      <p>
        {title}
        {artist}
      </p>
      <FavoriteButton isFavorite={artPieceInfo?.isFavorite} onToggleFavorite={handleToggleFavorite} slug={slug}/>
    </div>
  );
}
