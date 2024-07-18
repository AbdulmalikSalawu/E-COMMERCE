import React, { useContext } from 'react'
import '../Styles/ShopCategory.css'
import { ShopContext } from '../Context/ShopContext'
import Footer from './Footer'
import Navbar from './Navbar'
import dropdown from '../Assets/menu-down.svg'
import Items from './Items'

const Shopcategory = (props) => {
  const {productData} = useContext(ShopContext)
  return (
    <div className='shop-category mt-3'>
      <Navbar />

      <img className='bannerImage' src={props.banner} alt='' />
      <div className="shopIndexSort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="shopSort">
          Sort by <img className='dropdown' src={dropdown} alt='' />
        </div>
      </div>
      <div className="shopProducts">
        {productData.map((item,i)=>{
            if(props.category===item.category) {
              return <Items key={i} id={item.id} name={item.name} image={item.newImage} newPrice={item.newPrice} oldPrice={item.oldPrice}/>
            }
            else{
              return null
            }
        })}
      </div>

      <Footer />
    </div>
  )
}

export default Shopcategory
