// import { error } from "console";
import useSWR from "swr";
import { ArtPieces } from "@/components/ArtPieces/ArtPieces";
import { v4 as uuidv4 } from "uuid";

export default function HomePage() {
  const URL = "https://example-apis.vercel.app/api/art";

  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, error, isLoading } = useSWR(URL, fetcher);
  if (error) return <div>Failed to load</div>;
  if (isLoading) return <div>... is loading</div>;

  // const data = fetchingArtPieces();

  const artPieces = data.map((artPiece) => ({ id: uuidv4(), ...artPiece }));
  console.log("artPieces: ", artPieces);
  return (
    <div>
      <ArtPieces pieces={artPieces} />
    </div>
  );
}
