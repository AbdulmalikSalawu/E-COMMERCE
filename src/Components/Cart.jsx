import React, { useContext,useEffect, useState } from 'react'
import "../Styles/Cart.css"
import { ShopContext } from '../Context/ShopContext'
import remove from "../Assets/remove.svg"
import Navbar from './Navbar'
// import productData from './Data'
// import plus from '../Assets/plus-square.svg'
// import dash from '../Assets/dash-square.svg'
// import arrow from '../Assets/arrow-left.svg'
// import carti from '../Assets/cart2.svg'
import { useNavigate } from 'react-router'
import axios from 'axios'

const Cart = () => {
    const {getTotalAmount,productData,cartItems,removeFromCart} = useContext(ShopContext)
    const navigate = useNavigate()
    const [email,setEmail] = useState("youremail@gmail.com")
    const [userData,setUserData] = useState("")

    useEffect(() => {
        // fetch("https://storeformalik.onrender.com/userData", {
        fetch("http://localhost:4000/userData", {
          method: "POST",
          crossDomain: true,
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            token:localStorage.getItem("token"),
          }),
        })
        .then((res)=>res.json())
        .then((data)=> {
            console.log(data, "userData")
            setUserData(data.data)
            setEmail(data.data.email)
            if (data.data=="token expired") {
              alert("session expired, login again");
              localStorage.clear();
              navigate('/login')
            }
          })
      }, [])

    const paywithpaystack = () => {
        const totalCost = getTotalAmount()
        if(localStorage.getItem('token')){
        axios.post(`https://abdulmalikyinka.onrender.com/paywithpaystack`,{totalCost,email})
        .then((res)=>{
              let data = res.data
              window.location.href=data.data.authorization_url
        })} else {
            navigate('/login')
        }
    }

  return (
    <div>
    <Navbar />
    <div className='cartPage cart-container'>
        <div className="mainCart mt-5 pt-3">
            <p>Product</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr />
        {productData.map((e)=>{
            if(cartItems[e.id]>0) {
            return  ( 
                <div key={e.id}>
                    <div className="cartFormat mainCart">
                        <img src={e.newImage} alt="" className='productIcon' />
                        <p className='name'>{e.name}</p>
                        <p className='me-lg-5 price'>{e.newPrice}</p>
                        <button className='quantity'>{cartItems[e.id]}</button>
                        <p>{e.newPrice*cartItems[e.id]}</p>
                        <img className='removeIcon' src={remove} onClick={()=>{removeFromCart(e.id)}} alt="" />
                    </div>
                    <hr />
                </div>);
            } return null
        })}
        
        <div className="cartitems-down">
            <div className="cartitems-total">
                <h1>Cart Totals</h1>
                <div>
                    <div className="cartitems-total-item">
                        <p>Subtotal</p>
                        <p>${getTotalAmount()}</p>
                    </div>
                    <div className="cartitems-total-item">
                        <p>Shipping Fee</p>
                        <p>Free</p>
                    </div>
                    <hr />
                    <div className="cartitems-total-item">
                        <h3>Total</h3>
                        <h3>${getTotalAmount()}</h3>
                    </div>
                </div>
                <button onClick={paywithpaystack} className='checkout mt-4'>Proceed to Checkout</button>
                {email}
            </div>
        </div>
       
    </div>
    </div>
  )
}

export default Cart
