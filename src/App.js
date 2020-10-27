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
        <Product name="Falmenco Guitarr"></Product>
        <Product name="Classical Guitarr"></Product>
        <Product name="Drums"></Product>
        <Product name="Microphone"></Product>

      </div>
    </div>
  );
}

export default App;
