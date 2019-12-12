import React, { Component } from 'react';
import ProductListing from '../config/features/product-listing'
import data from '../data/products.json'

class Cart extends Component {
    render() {
return <div>
    <h1>My Cart</h1>
    <ProductListing products={data.products} />
</div>


    }
    
}


export default Cart;
