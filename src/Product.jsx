import React, { useState } from "react";
import Price from "./Price";

export default function Product(props) {
  // Props is data from the parent
  // State is owned by the component
  const [quantity, setQuantity] = useState(1); // Array Destructuring
  return (
    <div style={{ background: "#F44E3F", width: "200px", height: "300px" }}>
      <h4 style={{ color: "white" }}> {props.name} </h4>
      <img src={props.imgSrc} className="product-image"></img>

      <button onClick={() => setQuantity(quantity + 1)}>Add to cart</button>
      <button onClick={() => setQuantity(0)}>remove</button>
      <button onClick={() => setQuantity(quantity - 1)}>remove just one</button>

      <span>{quantity}</span>

      <Price value={props.price}></Price>
    </div>
  );
}

//questions  
