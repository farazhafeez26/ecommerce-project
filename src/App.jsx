import logo from "./logo.svg";
import "./App.css";
import Product from "./Product";
import Size from "./Size";

function App() {
  return (
    <div className="App">
       <h1>Das Flea Bazaar</h1>
      <div className="container">
       
        <Product
          name="Flamenco Guitar"
          imgSrc="pictures/guitar.jpg"
          price={200}
          shipping="standard"
        ></Product>
        
        <Product name="Drums" imgSrc="pictures/drums.jpg" price={300} shipping={"standard"} size={"M"}></Product>
        <Product name="Microphone" imgSrc="pictures/mic.jpg" price={250}></Product>
        <Product name="Amplifier" imgSrc="pictures/amplfier.jfif"price={210}></Product>
        <Product name="Electric Guitar" imgSrc="pictures/eguitar.jfif" price={4500}></Product>
        <Product name="Speaker" imgSrc="pictures/speaker.jfif" price={200}></Product>

      </div>
      
      <h1>Limited Stock Hurry!</h1>
    </div>
  );
}

export const test = "test";

export default App;

// TODO: Add a font and assigned it to all the elements in index.html
