import React from 'react'
import './cart.css'
import Product from './Product'

const Cart = ({cart, addProduct}) => (
    <div className="cart">
        <h2>Your shopping cart</h2>
        {
            cart.length === 0 
            ?
                <p>There is no products added</p>
            :
                cart.map(product => (
                    <Product
                        key={product.id}
                        product={product}
                        cart={cart}
                        addProduct={addProduct}
                    />
                ))
        }
    </div>
)
 
export default Cart;