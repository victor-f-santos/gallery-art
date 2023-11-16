import FavoriteButton from "../FavoriteButton/FavoriteButton";

export default function Spotlight({ image, artist ,slug ,handleToggleFavorite,artPiecesInfo }) {
  const artPieceInfo = artPiecesInfo.find( (info) => info.slug===slug )
  return (
    <div>
      <img src={image}></img>
      {artist}
      <FavoriteButton isFavorite={artPieceInfo?.isFavorite} onToggleFavorite={handleToggleFavorite} slug={slug}/>
    </div>
  );
}
