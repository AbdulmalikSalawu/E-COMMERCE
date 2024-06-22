import React from 'react'
import '../Styles/NewCollections.css'
import productData from './Data'
import Items from './Items'

const NewCollections = () => {
  return (
    <div className='collections'>
        <h2 className='mt-3'>NEW COLLECTIONS</h2>
        <hr />
        <div className='collections-item'>
            {productData.map((item,i)=>{
                return <Items key={i} id={item.id} name={item.name} image={item.image} newPrice={item.newPrice} oldPrice={item.oldPrice}/>
            })}
        </div>
    </div>
  )
}

export default NewCollections
