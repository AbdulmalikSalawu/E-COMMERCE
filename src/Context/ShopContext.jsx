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
        // fetch('http://localhost:4000/getAllProducts')
        fetch('https://storeformalik.onrender.com/getAllProducts')
        .then((response)=>response.json())
        .then((data)=>setProductData(data.data))

        if(localStorage.getItem('token')){
            fetch('https://storeformalik.onrender.com/getCart',{
                method:'POST',
                headers:{
                    Accept:'application/form-data',
                    'token':`${localStorage.getItem('token')}`,
                    'Content-Type':'application/json'
                },
                body:"",
        }).then((response)=>response.json())
        .then((data)=>setCartItems(data));
        }
    },[])

    const addToCart = (itemId) => {
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        if(localStorage.getItem('token')){
            fetch("https://storeformalik.onrender.com/addToCart",{
                method:'POST',
                headers: {
                    Accept: "application/form-data",
                    'token': `${localStorage.getItem('token')}`,
                    'Content-Type':'application/json',
                },
                body:JSON.stringify({"itemId":itemId}),
            })
            .then((response)=>response.json())
            .then((data)=>console.log(data))
        }
        // console.log(cartItems)
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
        if(localStorage.getItem('token')){
            fetch("https://storeformalik.onrender.com/removeFromCart",{
                method:'POST',
                headers: {
                    Accept: "application/form-data",
                    'token': `${localStorage.getItem('token')}`,
                    'Content-Type':'application/json',
                },
                body:JSON.stringify({"itemId":itemId}),
            })
            .then((response)=>response.json())
            .then((data)=>console.log(data))
        }
    }



    const getTotalAmount = () => {
        let totalAmount = 0;
        for(const item in cartItems) {
            if(cartItems[item]>0){
                let itemInfo = productData.find((product)=>product.id==(item))
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