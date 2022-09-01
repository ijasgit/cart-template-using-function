import React from 'react'
import "../cart/cart.css"

const Cart = (props) => {

    function pushitem() {
        props.push(props.objs);
    }
    function minus() {
        props.minus(props.objs);
    }
    function plus() {
        props.adds(props.objs);
    }


    return (
        <div className='cart-container'>
            <p>{props.objs.name}</p>
            <p>Qty:{props.objs.qty}</p>
            <button onClick={() => pushitem()}>Remove</button>
            <button onClick={minus}>-</button>
            <button onClick={plus}>+</button>
            </div>
    )
}

export default Cart