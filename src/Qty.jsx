import React, { useState } from "react";

const Qty = () => {
  const [hasQty, setQty] = useState(false);

  const handleQty = () => {
    setQty(!hasQty);
  };

  return (
    <div>
      <p> Qty: {hasQty ? "10%" : "0%"} </p>
      <button onClick={handleQty}>Click me</button>
    </div>
  );
};

export default Qty;