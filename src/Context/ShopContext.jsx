import React, {createContext, useState,useEffect} from 'react'
// import productData from '../Components/Data'

export const ShopContext = createContext(null)
const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < 300+1; index++) {
        cart[index] = 0
    }
    return cart;
}

const ShopContextProvider = (props) => {
    //Context provides a way to pass data through the component tree without having to pass props down manually at every level.
    const [productData,setProductData] = useState([])
    const [cartItems, setCartItems] = useState(getDefaultCart());

    useEffect(()=>{
        fetch('http://localhost:4000/getAllProducts')
        .then((response)=>response.json())
        .then((data)=>setProductData(data.data))
    })

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

    const getTotalItems = () => {
        let totalItem = 0;
        for(const item in cartItems) {
            if(cartItems[item]>0){
                totalItem += cartItems[item]
            }
        }
        return totalItem
    }

    const contextValue = {getTotalItems,getTotalAmount,productData,cartItems,addToCart,removeFromCart}

    return (
        <ShopContext.Provider value={contextValue} >
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;