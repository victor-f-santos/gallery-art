import { useEffect, useState } from "react";
import GlobalStyle from "../styles";
import useSWR from "swr";
import { v4 as uuidv4 } from "uuid";
import Layout from "@/components/Layout/Layout";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function App({ Component, pageProps }) {
  const [artPieces, setArtPieces] = useState([]);
  const [artPiecesInfo, setArtPiecesInfo] = useState([]);

  const URL = "https://example-apis.vercel.app/api/art";

  const { data, error, isLoading } = useSWR(URL, fetcher);

  useEffect(() => {
    if (data) {
      const initialArtPieces = data?.map((artPiece) => ({
        id: uuidv4(),
        ...artPiece,
      }));
      setArtPieces(initialArtPieces);
    }
  }, [data]);

  if (error) return <div>Failed to load</div>;
  if (isLoading) return <div>... is loading</div>;
  if (artPieces.length < 1) {
    return;
  }

  function handleToggleFavorite(slug) {
    setArtPiecesInfo((artPiecesInfo) => {
      const info = artPiecesInfo.find((info) => info.slug === slug);
      if (info) {
        return artPiecesInfo.map((info) =>
          info.slug === slug ? { ...info, isFavorite: !info.isFavorite } : info
        );
      }
      return [...artPiecesInfo, { slug, isFavorite: true }];
    });
  }

  return (
    <>
      <GlobalStyle />
      <Component
        {...pageProps}
        artPieces={artPieces}
        artPiecesInfo={artPiecesInfo}
        handleToggleFavorite={handleToggleFavorite}
      />
      <Layout />
    </>
  );
}
