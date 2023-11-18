import ArtPieceDetails from "@/components/ArtPieceDetails/ArtPieceDetails";
import { useRouter } from "next/router";

export default function ArtPieceDetailsPage({ artPieces , handleToggleFavorite,artPiecesInfo,handleSubmitComment }) {
  const router = useRouter();
  const { slug: routerSlug } = router.query;
  const piece = artPieces.find(({ slug }) => slug === routerSlug);

  return (
    <>
      <ArtPieceDetails
        image={piece.imageSource}
        title={piece.name}
        artist={piece.artist}
        year={piece.year}
        genre={piece.genre}
        slug={piece.slug}
        handleToggleFavorite={handleToggleFavorite}
        artPiecesInfo={artPiecesInfo}
        handleSubmitComment={handleSubmitComment}
      />
    </>
  );
}
