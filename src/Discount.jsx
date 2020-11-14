import React, { useState } from "react";

const Discount = () => {
  const [hasDiscount, setHasDiscount] = useState(false);
  const [discount, setDiscount] = useState(5);

  const handleClick = () => {
    setHasDiscount(!hasDiscount);
  };
  const handleDiscountClick = () => {
    setDiscount(discount + 10);
  };

  return (
    <div>
      <p>Discount: {hasDiscount ? `${discount}%` : "0%"}</p>
      <button onClick={handleClick}>Apply Discount</button>
      <button onClick={handleDiscountClick}>Increase Discount</button>
    </div>
  );
};

export default Discount;

 