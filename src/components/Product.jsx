import React from 'react'

const Product = ({product, products, cart, addProduct}) => {
    
    const { name, price, id } = product;

    // add product to cart
    const selectProduct = (id) => {
        const product = products.find(product => product.id === id);
        addProduct([...cart, product]);
    }

    const removeProduct = (id) => {
        const products = cart.filter(product => product.id !== id)
        // Set products on state
        addProduct(products)
    }

    return ( 
        <div id={id}>
            <h3>{name}</h3>
            <p>$ {price}</p>
            {
                products 
                ?
                    (
                        <button 
                            type="button"
                            id={`add-${id}`}
                            onClick={ () => selectProduct(id)}
                        >
                            Add
                        </button>
                    )
                :
                    (
                        <button 
                            type="button"
                            id={`remove-${id}`}
                            onClick={ () => removeProduct(id) }
                        >
                            Remove
                        </button>   
                    )
            }
            
        </div>  
    );

}
 
export default Product;