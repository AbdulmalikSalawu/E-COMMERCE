import React, { useContext } from 'react'
import "../Styles/Cart.css"
import { ShopContext } from '../Context/ShopContext'
import remove from "../Assets/remove.svg"

const Cart = () => {
    const {productData,cartItems,addToCArt,removeFromCart} = useContext(ShopContext)

  return (
    <div className='cart'>
        <div className="mainCart">
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
            return  
                <div>
                    <div className="cartFormat">
                        <img src={e.image} alt="" className='productIcon' />
                        <p>{e.name}</p>
                        <p>{e.newPrice}</p>
                        <button className='quantity'>{cartItems[e.id]}</button>
                        <p>{e.newPrice*cartItems[e.id]}</p>
                        <img src={remove} onClick={()=>{removeFromCart(e.id)}} alt="" />
                    </div>
                    <hr />
                </div>
            }
        })}
       
    </div>
  )
}

export default Cart
