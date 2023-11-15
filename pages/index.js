// import { error } from "console";
import useSWR from "swr";
import { ArtPieces } from "@/components/ArtPieces/ArtPieces";
import { v4 as uuidv4 } from "uuid";
import { Spotlight } from "@/components/Spotlight/Spotlight";

export default function HomePage() {
  const URL = "https://example-apis.vercel.app/api/art";

  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, error, isLoading } = useSWR(URL, fetcher);
  if (error) return <div>Failed to load</div>;
  if (isLoading) return <div>... is loading</div>;

  const artPieces = data.map((artPiece) => ({ id: uuidv4(), ...artPiece }));

  function getRandomPiece(array) {
    return array[Math.floor(Math.random() * array.length)];
  }
  const randomPiece = getRandomPiece(artPieces);

  return (
    <div>
      <Spotlight image={randomPiece.imageSource} artist={randomPiece.artist} />
      <ArtPieces pieces={artPieces} />
    </div>
  );
}
