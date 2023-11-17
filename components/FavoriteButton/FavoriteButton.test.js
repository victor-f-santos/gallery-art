import { render, screen } from "@testing-library/react";
import FavoriteButton from "./FavoriteButton";
import Spotlight from "../Spotlight/Spotlight";
import ArtPieces from "../ArtPieces/ArtPieces";
import ArtPieceDetails from "../ArtPieceDetails/ArtPieceDetails";
import userEvent from "@testing-library/user-event";

const mockPieces = [
    {
      name: "Art piece name",
      id: 1,
    },
    {
      name: "Art piece name",
      id: 2,
    },
    {
      name: "third art piece name",
      id: 3,
    },
  ];

test('The favorite-button is displayed in the spotlight view',() => {
  render(<Spotlight />)
  const images = screen.getAllByRole('img')
  const favButton = images.find(image => image.alt==='Favorite Button')
  expect(favButton).toBeInTheDocument()
})
test('The favorite-button is displayed in each entry in the list view',()=>{
  render(<ArtPieces pieces={mockPieces}/>)
  const images = screen.getAllByRole('img')
  console.log(images);
  const favButtons = images.filter(image => image.alt==='Favorite Button')
  expect(favButtons[0]).toBeInTheDocument()
  expect(favButtons[1]).toBeInTheDocument()
  expect(favButtons[2]).toBeInTheDocument()
  expect(favButtons.length).toBe(3)
})
test('The favorite-button is displayed in the details view',()=>{
  render(<ArtPieceDetails/>)
  const images = screen.getAllByRole('img')
  const favButton = images.find(image => image.alt='Favorite Button')
  expect(favButton).toBeInTheDocument()
})

test('Clicking the favorite-button on a non-favorite piece saves it as a favorite',async()=>{
  const mockPiece = {'slug':'slug-name'}

  let mockPiecesInfo = []
  
  const user = userEvent.setup()
  function handleToggleFavorite(slug) {
      const info = mockPiecesInfo.find((info) => info.slug === slug);
      if (info) {
        mockPiecesInfo =  mockPiecesInfo.map((info) =>
          info.slug === slug ? { ...info, isFavorite: !info.isFavorite } : info
        );
      }
      mockPiecesInfo = [...mockPiecesInfo, { slug, isFavorite: true }];
  }

  render(<FavoriteButton 
    onToggleFavorite={handleToggleFavorite}
    isFavorite={mockPiecesInfo.isFavorite}
    slug={mockPiece.slug}
  />)
  const favButton = screen.getByRole('img')
  expect(favButton).toBeInTheDocument()
  await user.click(favButton)
  expect(mockPiecesInfo[0].isFavorite).toBe(true)
})

test('Clicking the favorite-button on a favorite piece removes it from favorites ',async()=>{
  const mockPiece = {'slug':'another-slug-name'}

  let mockPiecesInfo = [{
    'slug':'slug-name',
    'isFavorite':false
  },{
    'slug':'another-slug-name',
    'isFavorite':true
  }]
  
  const user = userEvent.setup()
  function handleToggleFavorite(slug) {
      const info = mockPiecesInfo.find((info) => info.slug === slug);
      if (info) {
        mockPiecesInfo =  mockPiecesInfo.map((info) =>
          info.slug === slug ? { ...info, isFavorite: !info.isFavorite } : info
        );
      }
      mockPiecesInfo = [...mockPiecesInfo, { slug, isFavorite: true }];
  }

  render(<FavoriteButton 
    onToggleFavorite={handleToggleFavorite}
    isFavorite={mockPiecesInfo.isFavorite}
    slug={mockPiece.slug}
  />)
  const favButton = screen.getByRole('img')
  expect(favButton).toBeInTheDocument()
  await user.click(favButton)
  expect(mockPiecesInfo[1].isFavorite).toBe(false)
})