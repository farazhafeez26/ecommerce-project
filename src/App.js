import logo from './logo.svg';
import './App.css';
import Product from  "./Product"

function App() {
  return (
    <div className="App">
      <div className="center-items" > 
        <h1>Das Flea Bazaar</h1>
     
        
        <Product name="Flamenco Guitar"  imgSrc='pictures/guitar.jpg' price={200}>  </Product>  {/* try to avoid inline css, write them on in css file */}
                <Product name="Classical Guitar"></Product>
        <Product name="Drums"  price={300}></Product>
        <Product name="Microphone" price={250}></Product>
        <Product name="Amplifier" price={210}></Product>
        <Product name="Drums" price={4500}></Product>
        <Product name="Microphone" price={200}></Product>
        <Product name="Tuner" price={200}></Product>
        

        <h1>Limited Stock! Hurry</h1>

         

      </div>
       
    </div>
  );
}

export const test = "test";

export default App;

// TODO: Add a font and assigned it to all the elements in index.html
