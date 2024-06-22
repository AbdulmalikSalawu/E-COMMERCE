import React from 'react'
import '../Styles/item.css'

const Items = (props) => {
  return (
    <div className='item'>
        <img className='d-block m-auto popimg' src={props.image} alt='' />
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
  )
}

export default Items
