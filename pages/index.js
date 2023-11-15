// import { error } from "console";
import useSWR from "swr";

export default function HomePage() {
  function fetchingArtPieces() {
    const URL = "https://example-apis.vercel.app/api/art";

    const fetcher = (...args) => fetch(...args).then((res) => res.json());

    const { data, error, isLoading } = useSWR(URL, fetcher);
    if (error) return <div>Failed to load</div>;
    if (isLoading) return <div>... is loading</div>;
    return data;
  }

  const artPieces = fetchingArtPieces();

  return (
    <div>
      <h1>Hello from Next.js</h1>
    </div>
  );
}
