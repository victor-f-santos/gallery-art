import {render, screen} from '@testing-library/react'
import ArtPieceDetails from '../ArtPieceDetails/ArtPieceDetails'
import Comments from './Comments'

const mockPiece = {
    imageSource:
      "https://example-apis.vercel.app/assets/art/orange-red-and-green.jpg",
    name: "Orange Red and Green Abstract Painting",
    artist: "Steve Johnson",
    year: "2018",
    genre: "Abstract Painting",
  };
const mockComments = [
    {'comment':'a comment','time':'08:52','date':'9 NOV 2023'},
    {'comment':'another comment','time':'08:55','date':'10 NOV 2023'}
]

test(`The detail view has a list of comments for this art piece with the headline "Comments"`, ()=>{
    render(<ArtPieceDetails/>)
    const commentsHeader = screen.getByRole('heading')
    const commentsList = screen.getByRole('list')
    expect(commentsHeader).toHaveTextContent('Comments')
    expect(commentsList).toBeInTheDocument()
});

test('Each comments text is displayed',()=> {
    render(<Comments comments={mockComments}/>)
    const comments = screen.getAllByRole('listitem');
    expect(comments[0]).toHaveTextContent('a comment');
    expect(comments[1]).toHaveTextContent('another comment');
});