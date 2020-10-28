import logo from './logo.svg';
import './App.css';
import Product from  "./Product"

function App() {
  return (
    <div className="App">
      <div>
        <h1>My Ecommerce Store</h1>
      </div>
      <div>
        <Product name="Flamenco Guitar"> </Product>
        <Product name="Classical Guitar"></Product>
        <Product name="Drums"></Product>
        <Product name="Microphone"></Product>
        <Product name="Amplifier"></Product>
        <Product name="Drums"></Product>
        <Product name="Microphone"></Product>
        <Product name="Tuner"></Product>

         

      </div>
    </div>
  );
}

export default App;
 