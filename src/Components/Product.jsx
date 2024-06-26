import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom'
import "../Styles/Breadcrumb.css"
import Breadcrum from './Breadcrumb'
import ProductDisplay from './ProductDisplay'

const Product = () => {
  const {productData} = useContext(ShopContext);
  const {productId} = useParams();
  const product = productData.find((e)=> e.id === Number(productId));
 
  return (
    <div>
        <Breadcrum product={product} />
        <ProductDisplay />
    </div>
  )
}

export default Product
