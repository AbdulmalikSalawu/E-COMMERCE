import React, { useContext } from 'react'
import "../Styles/ProductDisplay.css"
import star from "../Assets/star-fill.svg"
import starLight from "../Assets/star.svg"
import { ShopContext } from '../Context/ShopContext'

const ProductDisplay = (props) => {
    const {product} = props;
    const {addToCart} = useContext(ShopContext);

  return (
    <div className='displayProduct'>
        <div className="displayLeft">
            <div className="imageList">
                <img src={product.newImage} alt="" />
                <img src={product.newImage} alt="" />
                <img src={product.newImage} alt="" />
                <img src={product.newImage} alt="" />
            </div>
            <div className="displayImage">
                <img className='mainImage' src={product.newImage} alt="" />
            </div>
        </div>

        <div className="displayRight">
            <h1>{product.name}</h1>
            <div className="ratings">
                <img className='starIcon' src={star} alt="" />
                <img className='starIcon' src={star} alt="" />
                <img className='starIcon' src={star} alt="" />
                <img className='starIcon' src={star} alt="" />
                <img className='starIcon' src={starLight} alt="" />
            </div>
                {/* <p>122</p> */}
            <div className="price">
                <div className="oldPrice">${product.oldPrice}</div>
                <div className="newPrice">${product.newPrice}</div>
            </div>
            <div className="description">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis aliquid, quibusdam quisquam deserunt qui ipsa beatae a. Tenetur, corrupti quaerat.
            </div>
            <div className="size">
                <h1>Select size</h1>
                {product.category=="gadgets"?"No Size Option for Gadgets":(
                    <div className="sizeCategories">
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>
                </div>
                )}
                
            </div>
            <button onClick={()=> {addToCart(product.id)}} className='addToCart'>ADD TO CART</button>
            <p className='category'><span>Category :</span>{product.category}</p>
            <p className='category'><span>Tags :</span>Modern, Latest</p>
        </div>
    </div>
  )
}

export default ProductDisplay
