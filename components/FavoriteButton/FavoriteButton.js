import Image from "next/image";

export default function FavoriteButton({ isFavorite, onToggleFavorite, slug }) {
  return (
    <Image
      onClick={() => onToggleFavorite(slug)}
      src={`/heart${isFavorite ? "_filled" : ""}.svg`}
      alt="Favorite Button"
      width={30}
      height={30}
    ></Image>
  );
}
