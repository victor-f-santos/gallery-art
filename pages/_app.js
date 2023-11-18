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

  function handleSubmitComment(newCommentInfo) { 
    const info = artPiecesInfo.find((info) => info.slug === newCommentInfo.slug);
    let newArtPiecesInfoState = []
    if (info) {
      const isCommented = Boolean(info.comments)
      if (isCommented) {
        newArtPiecesInfoState = artPiecesInfo.map( info => (
          {...info,
          'comments':[...info.comments,{'comment':newCommentInfo.comment,time:newCommentInfo.time,date:newCommentInfo.date}
          ]}))
      }
      if (!isCommented) {
        newArtPiecesInfoState = artPiecesInfo.map( info => (
          {...info,
          'comments':[{'comment':newCommentInfo.comment,time:newCommentInfo.time, date:newCommentInfo.date}
        ]}))
      }
    }
    if (info===undefined) {
      newArtPiecesInfoState = [...artPiecesInfo,
        {'slug':newCommentInfo.slug,
        'comments':
          [{'comment':newCommentInfo.comment,date:newCommentInfo.date}
        ]}]
    }
    setArtPiecesInfo(newArtPiecesInfoState)
  }

  return (
    <>
      <GlobalStyle />
      <Component
        {...pageProps}
        artPieces={artPieces}
        artPiecesInfo={artPiecesInfo}
        handleToggleFavorite={handleToggleFavorite}
        handleSubmitComment={handleSubmitComment}
      />
      <Layout />
    </>
  );
}
