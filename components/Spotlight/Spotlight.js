export default function Spotlight({ image, artist }) {
  return (
    <div>
      <img src={image}></img>
      {artist}
    </div>
  );
}
