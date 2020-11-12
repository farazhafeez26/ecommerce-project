import logo from "./logo.svg";
import "./App.css";
import AutoComplete from "./AutoComplete";
import Product from "./Product";
import { useState } from "react";

import styled from "styled-components";

const fullProductList = [
  { imgSrc: "pictures/dress.webp", price: 20 },

  { imgSrc: "pictures/Black boots.webp", price: 20, category: "Women" },
  { imgSrc: "pictures/black sweater.webp", price: 20, category: "Men" },
  { imgSrc: "pictures/dress.webp", price: 20 },
  { imgSrc: "pictures/shoes.webp", price: 20 },
  { imgSrc: "pictures/jacket.webp", price: 20 },
  { imgSrc: "pictures/jacket.webp", price: 50 },
  { imgSrc: "pictures/Black boots.webp", price: 30 },
  { imgSrc: "pictures/shoes.webp", price: 20 },
  { imgSrc: "pictures/black sweater.webp", price: 20, category: "Men" },
];



function App() {
  const [productsDisplayed, updateProductList] = useState(fullProductList); //hook

  
  return (
    <div className="App">
      <MainTitle> Das Flea Bazaar </MainTitle>

      <SearchBar placeholder="🔍 Search" type="text"></SearchBar>
      <AutoComplete>  </AutoComplete>

      <div className="container">
        {productsDisplayed.map((product) => (<Product imgSrc={product.imgSrc} price={product.price}></Product>))}

      
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
// TODO: Add a font and assigned it to all the elements in index.html
// TODO: Add a font and assigned it to all the elements in index.html
// TODO: Add a font and assigned it to all the elements in index.html
