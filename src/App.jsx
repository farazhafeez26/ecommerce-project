import logo from "./logo.svg";
import "./App.css";
import Product from "./Product";
 
import styled from "styled-components";

function App() {
  return (
    <div className="App">
      <MainTitle> Das Flea Bazaar </MainTitle>

      <SearchBar placeholder="🔍 Search" type="text"></SearchBar>

      <div className="container">
        <Product imgSrc=" pictures/dress.webp"></Product>
        <Product imgSrc="pictures/Black boots.webp"></Product>
        <Product imgSrc="pictures/black sweater.webp"></Product>
        <Product imgSrc="pictures/dress.webp"></Product>
        <Product imgSrc="pictures/jacket.webp"></Product>
        <Product imgSrc="pictures/shoes.webp"></Product>
      </div>
    </div>
  );
}

const MainTitle = styled.h1`
  text-align: center;
  margin: 10px;
`;

const SearchBar = styled.input`
  text-align: left;
  margin: 10px;
  height: 48px;
  border-radius: 24px;
  width: 100%;
  font-size: 20px;
  background-color: #efefef;
`;

export const test = "test";

export default App;

// TODO: Add a font and assigned it to all the elements in index.html
