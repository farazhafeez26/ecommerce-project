import React, { useState} from 'react';

export default function Product(props) {
    // Props is data from the parent
    // State is owned by the component
    const [quantity, setQuantity] = useState(1);  // Array Destructuring 
    return (
        <div>
            <h4>  {props.name} </h4>
            <span>{quantity}</span>
            <button onClick={() => (setQuantity(quantity+1))}>Add to cart</button>
        </div>
    )
}
