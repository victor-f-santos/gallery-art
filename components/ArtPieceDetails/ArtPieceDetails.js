import Link from "next/link";
import FavoriteButton from "../FavoriteButton/FavoriteButton";
import CommentForm from "../CommentForm/CommentForm";
import Comments from "../Comments/Comments";
import StyledColorPalette from "../StyledColorPalette/StyledColorPalette";

export default function ArtPieceDetails({ image, title, artist, year, genre, slug, colors ,handleToggleFavorite,artPiecesInfo,handleSubmitComment }) {
  let artPieceInfo = artPiecesInfo?.find( (info) => info.slug===slug )

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
      <StyledColorPalette colors={colors}/>
      <FavoriteButton isFavorite={artPieceInfo?.isFavorite} onToggleFavorite={handleToggleFavorite} slug={slug}/>
      <Comments comments={artPieceInfo?.comments}/>
      <CommentForm onSubmitComment={handleSubmitComment} slug={slug}/>
    </>
  );
}
