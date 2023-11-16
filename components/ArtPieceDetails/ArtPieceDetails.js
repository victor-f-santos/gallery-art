import Link from "next/link";
import FavoriteButton from "../FavoriteButton/FavoriteButton";

export default function ArtPieceDetails({ image, title, artist, year, genre, slug ,handleToggleFavorite,artPiecesInfo }) {
  console.log('ArtPieceDetails slug: ',slug)
  let artPieceInfo = artPiecesInfo.find( (info) => info.slug===slug )
  if (!artPieceInfo) {
    artPieceInfo=false
  }
  console.log(artPieceInfo);
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
      <FavoriteButton isFavorite={artPieceInfo?.isFavorite} onToggleFavorite={handleToggleFavorite} slug={slug}/>
    </>
  );
}
