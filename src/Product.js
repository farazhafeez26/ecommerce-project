import React, { useState} from 'react';

export default function Product(props) {
    // Props is data from the parent
    // State is owned by the component
    const [quantity, setQuantity] = useState(1);  // Array Destructuring 
    return (
        <div style={{background:"#F44E3F",width:"200px",height:"100px"    }} >
            <h4 style={{color:"white"}}>  {props.name} </h4>
          <image src="/guitar.jpg" ></image>
            <span>{quantity}</span>
            <button onClick={() => (setQuantity(quantity+1))}>Add to cart</button>
            <button onClick={() => (setQuantity(quantity=0))}>remove</button>
         
        </div>
    )
}


//questions -28th Oct
//What is setQuantity, userstate? 
//what is export default, "}"?
//how do i add google fonts? 