import React from 'react'
import '../Styles/item.css'
import { Link } from 'react-router-dom'

const Items = (props) => {
  return (
    <div className="grid-container">
    <div className='item'>
      <Link to={`/product/${props.id}`}><img className='d-block m-auto popimg' src={props.image} alt='' /></Link>
        <p className='text-center'>{props.name}</p>
        <div className='item-prices'>
            <div className='newPrice'>
                ${props.newPrice}
            </div>
            <div className='oldPrice'>
                ${props.oldPrice}
            </div>
        </div>
    </div>
    </div>
  )
}

export default Items
