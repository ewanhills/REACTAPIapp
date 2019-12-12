import React from 'react'

export default function ProductListItem(props) {
    //grabbing the first item from an array of index
    const thisItemInCart = props.cart.filter(item => item.id ===props.product.id)[0]
return<div className='product-list-item'>

<h3>{ props.product.name} </h3>

<img
height={100}
title= { props.product.name}
src={`/products/${props.product.image}`}
/>

<div>{ props.product.description}</div>
<div>${ props.product.description}</div>
<div>
    <button
    onClick={() => props.addToCart(props.product)}
    > Add To Cart ({
        thisItemInCart && thisItemInCart.quantity || 0}) </button>
</div>
</div>

}