import logo from "./logo.svg";
import "./App.css";
import Product from "./Product";
import Size from "./Size";
import styled from "styled-components";

function App() {
  return (
    <div className="App">
      <MainTitle>  Das Flea Bazaar </MainTitle>
      <div className="container">
       
        <Product
          name="Flamenco Guitar"
          imgSrc="pictures/guitar.jpg"
          price={200}
          shipping="standard"
        ></Product>
        
        <Product name="Drums" imgSrc="pictures/drums.jpg" price={300} shipping={"standard"} size={"M"}></Product>
        <Product name="Microphone" imgSrc="pictures/mic.jpg" price={250} shipping={"standard"} size={"M"}></Product>
        <Product name="Amplifier" imgSrc="pictures/amplfier.jfif"price={210} shipping={"standard"} size={"M"}></Product>
        <Product name="Electric Guitar" imgSrc="pictures/eguitar.jfif" price={4500} shipping={"standard"} size={"M"}></Product>
        <Product name="Speaker" imgSrc="pictures/speaker.jfif" price={200} shipping={"standard"} size={"M"}></Product>

      </div>
      
 
    </div>
  );
}

const MainTitle= styled.h1`
text-align:center;
margin:10px;
`;



export const test = "test";

export default App;

// TODO: Add a font and assigned it to all the elements in index.html
