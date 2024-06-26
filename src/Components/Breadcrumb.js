import React from 'react'
import arrowIcon from '../Assets/arrow-right.svg'
import "../Styles/Breadcrumb.css"

const Breadcrum = (props) => {
    const {product} = props;

  return (
    <div className='breadcrumb'>
        HOME <img className='arrowIcon' src={arrowIcon} alt='' />SHOP <img className='arrowIcon' src={arrowIcon} alt='' /> {product.category} <img className='arrowIcon' src={arrowIcon} alt='' /> {product.name}
    </div>
  )
}

export default Breadcrum
