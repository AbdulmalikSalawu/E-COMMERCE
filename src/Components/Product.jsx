import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom'
import "../Styles/Breadcrumb.css"
import Breadcrum from './Breadcrumb'
import ProductDisplay from './ProductDisplay'
import Navbar from './Navbar'

const Product = () => {
  const {productData} = useContext(ShopContext);
  const {productId} = useParams();
  const product = productData.find((e)=> e.id == (productId));
 
  return (
    <div>
      <Navbar />
      <Breadcrum product={product} />
      <ProductDisplay product={product} />
    </div>
  )
}

export default Product
