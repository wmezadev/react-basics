import React from 'react'

const Product = ({product}) => {
    
    const { name, price, id } = product;

    return ( 
        <div id={id}>
            <h3>{name}</h3>
            <p>{price}</p>
        </div> 
    );

}
 
export default Product;