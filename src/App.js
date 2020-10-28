import logo from './logo.svg';
import './App.css';
import Product from  "./Product"

function App() {
  return (
    <div className="App">
      <div>
        <h1>Das Flea Bazaar</h1>
      </div>
      <div style={{left:"center"}}>
        <Product name="Flamenco Guitar" style={{color:"red" }} >?????</Product>
        <Product name="Classical Guitar"></Product>
        <Product name="Drums"></Product>
        <Product name="Microphone"></Product>
        <Product name="Amplifier"></Product>
        <Product name="Drums"></Product>
        <Product name="Microphone"></Product>
        <Product name="Tuner"></Product>
        

        <h1>Limited Stock! Hurry</h1>

         

      </div>
    </div>
  );
}

export default App;
 