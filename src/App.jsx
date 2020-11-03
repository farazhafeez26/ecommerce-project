import logo from "./logo.svg";
import "./App.css";
import Product from "./Product";
import Size from "./Size";
import styled from "styled-components";

function App() {
  return (
    <div className="App">
      <MainTitle> Das Flea Bazaar </MainTitle>

      <SearchBar placeholder="🔍 Search" type="text">
        
      </SearchBar>

      <div className="container">
        <Product
          name="Flamenco Guitar"
          imgSrc="pic1.jpg"
          price={200}
          shipping="standard"
        ></Product>

        <Product
          name="Drums"
          imgSrc="pictures/drums.jpg"
          price={300}
          shipping={"standard"}
          size={"M"}
        ></Product>
        <Product
          name="Microphone"
          imgSrc="pictures/mic.jpg"
          price={250}
          shipping={"standard"}
          size={"M"}
        ></Product>
        <Product
          name="Amplifier"
          imgSrc="pictures/amplfier.jfif"
          price={210}
          shipping={"standard"}
          size={"M"}
        ></Product>
        <Product
          name="Electric Guitar"
          imgSrc="pictures/eguitar.jfif"
          price={4500}
          shipping={"standard"}
          size={"M"}
        ></Product>
        
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
  height:48px;
  border-radius: 24px;
  width:50%;
  font-size: 20px;
  background-color:#efefef;

`;

export const test = "test";

export default App;

// TODO: Add a font and assigned it to all the elements in index.html
