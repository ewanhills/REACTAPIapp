import React from 'react'
import {connect} from 'react-redux'

export const cartItemsWithQuantities = (cartItems) => {
 return cartItems.reduce((acc, item) => {
const filteredItem = acc.filter(item2 => item2.id === item.id)[0]
filteredItem !== undefined
? filteredItem.quantity++
: acc.push({...item, quantity: 1,})
        //iterate over each of our items
return acc
    }, [])
}


//if this item exists take quantity then add 1 to it


