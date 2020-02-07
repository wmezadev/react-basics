import React from 'react'

const Product = ({product}) => {
    
    const { name, price, id } = product;

    // add product to cart
    const selectProduct = (id) => {
        console.log('Product added', id);
    }

    return ( 
        <div id={id}>
            <h3>{name}</h3>
            <p>$ {price}</p>
            <button 
                type="button"
                id={`button-${id}`}
                onClick={ () => selectProduct(id)}
            >
                Comprar
            </button>
        </div> 
    );

}
 
export default Product;