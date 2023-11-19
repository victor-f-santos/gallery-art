import styled from "styled-components"

const StyledBox = styled.li`
    color:white;
    outline-color: black;
    background-color:${ ({$bgcolor}) =>($bgcolor) };
    width:100px;
    height: 40px;
    display:flex;
    justify-content: center;
    align-items: center;
`
const FlexContainer = styled.ul`
    display:flex;
    list-style-type: none;
`

export default function StyledColorPalette({colors}) {
    return (
        <FlexContainer>
        { colors?.map( color => 
        <StyledBox 
            key={color} 
            $bgcolor={color}>
            {color}
        </StyledBox>)
        }
        </FlexContainer>
    )
}



   