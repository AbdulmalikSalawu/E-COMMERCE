import React from 'react'
import arrowIcon from '../Assets/arrow-right.svg'
import "../Styles/Breadcrumb.css"

const Breadcrum = (props) => {
    const {product} = props;

  return (
    <div className='breadcrumb'>
        HOME ▶ SHOP ▶ {product.category} ▶ {product.name}
    </div>
  )
}

export default Breadcrum
