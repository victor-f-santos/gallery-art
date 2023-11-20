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
    display: flex;
    max-width: 300px;
    border-radius: 20px;
    box-shadow: 5px 10px 8px #888888;
    margin: 50px auto;
  }

  p, h3, label, #commentInput, button {
    display: flex;
    justify-content: space-evenly;
  }

  .favBut {
    display: flex;
    justify-content: center;
    border-radius: 0;
    margin: 0;
    box-shadow: 0 0 0;
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
  }

  nav{
    display: flex;
  justify-content: space-evenly;
  background-color: aliceblue;
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 2px;
  border: 10px;
  }

form {
  margin: 30px auto;
}
`;
