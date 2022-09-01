import React from 'react'
import "../product/product.css"

const Product = (props) => {
  function adding() {
    props.add(props.product);
    console.log(props.product);
  }

  return (

      <div className='product-container'>
        <div >
          {props.product.name}
          <br></br>
          {/* <h1>{product.name}</h1> */}
          {/* <h1>{this.props.product.qty}</h1> */}
          <button onClick={() => adding()}>Add to cart</button>

        </div>
      </div>
    
  )
}

export default Product