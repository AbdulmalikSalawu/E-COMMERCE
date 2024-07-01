import React, { useContext } from 'react'
import "../Styles/Cart.css"
import { ShopContext } from '../Context/ShopContext'
import remove from "../Assets/remove.svg"
import Navbar from './Navbar'
import productData from './Data'
import plus from '../Assets/plus-square.svg'
import dash from '../Assets/dash-square.svg'
import arrow from '../Assets/arrow-left.svg'
import carti from '../Assets/cart2.svg'
import { useNavigate } from 'react-router'

const Cart = () => {
    const {productData,cartItems,removeFromCart} = useContext(ShopContext)
    const navigate = useNavigate()

  return (
    <div>
    <Navbar />
    <div className='cartPage cart-container'>
        <div className="mainCart mt-5">
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
                    <div className="cartFormat">
                        <img src={e.image} alt="" className='productIcon' />
                        <p>{e.name}</p>
                        <p>{e.newPrice}</p>
                        <button className='quantity'>{cartItems[e.id]}</button>
                        <p>{e.newPrice*cartItems[e.id]}</p>
                        <img src={remove} onClick={()=>{removeFromCart(e.id)}} alt="" />
                    </div>
                    <hr />
                </div>);
            } return null
        })}
       
    </div>
    </div>
  )
}


// return (
//     <div className='mt-5 pt-3'>
//             <div className='cartBody'>
//               <h1 className='mt-5 pt-5'>WORKING</h1>
        
//             {cartItems[e.id]<=0 ? (
//               <div className='d-block m-auto'>
//                   <p className='text-center mt-5 fs-3 fw-bold'>Your cart is currently empty</p>
//                   <p className='text-center mt-5'><img src={arrow} onClick={()=>navigate('/product')} className='me-3 col-1 mt-1' alt='back' />Start Shopping</p>
//                 </div>
//                 ) :
//                  (
//                   <div>
//                     {( <img src={arrow} onClick={()=>navigate(-1)} className='ms-3 col-1 mt-1' alt='back' />)}         
                   
//                 <h3 className='text-center mb-5 fw-bold'>Your Cart<span><img className='cartIcon2 ms-2' src={carti} alt='cart icon'></img></span></h3>
                
//                   <div className='cart-container px-2 py- mb-5 col-sm-10 col-md-10 col-lg-8 d-block m-auto mt- shadow'>
//                 {
//                 productData.map((e) => (
//                   <div className='wholeItem'>
//                     <div className='cart-body py-2'>
//                         <img className='cartImg ms-1 mt-1' src={e.image} alt='error' />
//                         <div className='qtyBtns ms-2 mt-3'>
//                           <img src={plus} />
//                           <img onClick={()=>{removeFromCart(e.id)}} src={dash} />
//                         </div>
                        
//                         <div className='cartItemName product-name ms-md-3 ms-lg-5 fw-bold'>{e.name}</div>
//                         <span className='cartPrice lg-hidden ms-md-3 ms-lg-5 d-md-      
//                          none'>${e.newPrice*cartItems[e.id]}</span> 
//                         <span className='cartQty ms-md-3 ms-lg-5'><i className='fs-5'>QTY</i><input className='ms-3 productQuantity cartInp fw-bold fs-3' value={cartItems[e.id]} type='number' /></span>
//                         <span className='cartTotal fw-bold d-none d-md-block'>${e.newPrice*cartItems[e.id]}</span>
//                         <button className='d-sm-none d-md-block makeOrder text-white ms-1'>Order</button>
//                         <button className='removeBtn'>Remove</button>

//                         <hr/>
//                     </div>
//                     <div className='optionBtns d-md-none d-block m-auto text-center'>
//                           <button className='deleteFood px-2 py-1 mt-2'>Remove</button>
//                           <button type='button' className='orderFood px-3 py-1'>Order</button>
//                     </div>
//                     <hr className='d-sm-none d-md-block' />
//                   </div>
//                   ))}
//                 </div>
//               </div>
//               )}
//       </div>
//     </div>
//   )
// }

export default Cart
