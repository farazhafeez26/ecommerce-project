import React, { useState } from "react";
import Price from "./Price";
import Shipping from "./Shipping";
import Size from "./Size";
import styled from "styled-components";

export default function Product(props) {
  // Props is data from the parent
  // State is owned by the component
  const [quantity, setQuantity] = useState(1); // Array Destructuring
  return (
    <div className="boxitem">
      <div>
        <h4 style={{ color: "black" }}> {props.name} </h4>
      </div>
      <ImageContainer>
        <ProductImage
          src={props.imgSrc}
          className="product-image"
        ></ProductImage>
      </ImageContainer>

      <div>
        <QuantityContainer>
          <QtyButton onClick={() => setQuantity(quantity + 1)}>
            Add to cart
          </QtyButton>

          <Quantity>{quantity}</Quantity>
        </QuantityContainer>

        <InfoContainer>
          <Price value={props.price}> </Price>
          <Shipping value={props.shipping}></Shipping>
          <Size value={props.size}></Size>
        </InfoContainer>
      </div>
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
  height: 20px;
  justify-content: space-around;
  align-items: center;
`;

const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const QtyButton = styled.button`
  height: 20px;
  border-radius: 3px;
  &:hover{
    color:blue;
    background-color:red;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  max-height: 300px;
  width: 100%;
`;
const ProductImage = styled.img`
  width: 95%;
  height: 200px;
`;

//questions
//how to add pseudo css elements
