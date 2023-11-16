import ArtPieceDetails from "@/components/ArtPieceDetails/ArtPieceDetails";
import { useRouter } from "next/router";

export default function ArtPieceDetailsPage({ artPieces }) {
  const router = useRouter();
  const { slug: routerSlug } = router.query;
  const piece = artPieces.find(({ slug }) => slug === routerSlug);

  return (
    <ArtPieceDetails
      image={piece.imageSource}
      title={piece.name}
      artist={piece.artist}
      year={piece.year}
      genre={piece.genre}
    />
  );
}
