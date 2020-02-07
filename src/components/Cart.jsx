import React from 'react'
import './cart.css'
import Product from './Product'

const Cart = ({cart}) => (
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
                    />
                ))
        }
    </div>
)
 
export default Cart;