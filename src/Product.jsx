import React, { useState } from "react";
import Price from "./Price";

import styled from "styled-components";

export default function Product(props) {
  // Props is data from the parent
  // State is owned by the component
  const [quantity, setQuantity] = useState(1); // Array Destructuring
  return (
    <div className="boxitem">
      <ImageContainer>
        <ProductImage src={props.imgSrc}></ProductImage>

        <Price value={props.price}> </Price>

        <QuantityContainer>
          <QtyButton onClick={() => setQuantity(quantity + 1)}>
            Add to cart
          </QtyButton>

          <Quantity>{quantity}</Quantity>
        </QuantityContainer>
      </ImageContainer>
    </div>
  );
}

const Quantity = styled.h3`
  font-size: 1.5em;
  text-align: center;
  color: black;
`;

const QuantityContainer = styled.div`
  display: flex;
  height: 15px;
`;

const QtyButton = styled.button`
  height: 20px;
  border-radius: 3px;
  &:hover {
    color: blue;
    background-color: red;
  }
`;

const ImageContainer = styled.div`
  flex: wrap;
  width: 400px;
  height: 500px;
`;
const ProductImage = styled.img`
  width: 300px;
  height: 400px;
  border-image: 100 round;
  border-color: black;
`;

//questions
//how to add pseudo css elements
