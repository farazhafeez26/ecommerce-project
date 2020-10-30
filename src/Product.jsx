import React, { useState } from "react";
import Price from "./Price";
import Shipping from "./Shipping";

export default function Product(props) {
  // Props is data from the parent
  // State is owned by the component
  const [quantity, setQuantity] = useState(1); // Array Destructuring
  return (
    <div class="display-items">
      <h4 style={{ color: "white" }}> {props.name} </h4>
      <img src={props.imgSrc} className="product-image"></img>

      <button onClick={() => setQuantity(quantity + 1)}>Add to cart</button>
      <button onClick={() => setQuantity(0)}>remove</button>
      <button onClick={() => setQuantity(quantity - 1)}>remove just one</button>

      <h3>{quantity}</h3>

      <Price value={props.price}> </Price>
      <Shipping value={props.shipping}></Shipping>
    </div>
  );
}

//questions
//how can i include in multiple properties of a product in one JSX file. For example shipping and price in one js file ?
// align items is not working
// how do i label stuff?
// How is spacing being allocated between the elements being allocated?
