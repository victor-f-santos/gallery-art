import {render, screen} from '@testing-library/react'
import { ArtPieces } from "./ArtPieces";

const mockPieces = [
    {
        name:'Art piece name',
        id:1,

    },
    {
        name:'Art piece name',
        id:2,

    },
    {
        name:'third art piece name',
        id:3,
    }
];

test('All art pieces are displayed as a list: ', () => {
    render(<ArtPieces pieces={mockPieces} />)
    const listOfPieces = screen.getByRole('list');
    const listItems = screen.getAllByRole('listitem');
    expect(listOfPieces).toBeInTheDocument();
    expect(listItems[0]).toBeInTheDocument();
    expect(listItems[1]).toBeInTheDocument();
    expect(listItems[2]).toBeInTheDocument();
    expect(listItems.length).toBe(3)
})