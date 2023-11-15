import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: system-ui;
    background-color: #e9edc9;
  }

  img {
    
    border-radius: 20px;
  }

.artPieceList{
  display: flex;
  flex-flow: row, wrap;
  align-items: center;

}

.artPieceCard{
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    max-width: 500px;
  }
`;
