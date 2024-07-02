import React, {createContext, useState} from 'react'
import productData from '../Components/Data'

export const ShopContext = createContext(null)
const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < productData.length+1; index++) {
        cart[index] = 0
    }
    return cart;
}

const ShopContextProvider = (props) => {
    //Context provides a way to pass data through the component tree without having to pass props down manually at every level.

    const [cartItems, setCartItems] = useState(getDefaultCart());

    const addToCart = (itemId) => {
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        console.log(cartItems)
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }

    const getTotalAmount = () => {
        let totalAmount = 0;
        for(const item in cartItems) {
            if(cartItems[item]>0){
                let itemInfo = productData.find((product)=>product.id===Number(item))
                totalAmount += itemInfo.newPrice * cartItems[item]
            }
        }
        return totalAmount
    }

    const contextValue = {getTotalAmount,productData,cartItems,addToCart,removeFromCart}

    return (
        <ShopContext.Provider value={contextValue} >
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;