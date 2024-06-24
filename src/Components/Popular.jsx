import React from 'react'
import '../Styles/Popular.css'
import productData from './Data'
import Items from './Items'

const Popular = () => {
  return (
    <div className='popular'>
        <h2>Popular in Women</h2>
        <hr />
        <div className='popular-item'>
            {productData.map((item,i)=>{
              if(item.category==="women"){
                return <Items key={i} id={item.id} name={item.name} image={item.image} newPrice={item.newPrice} oldPrice={item.oldPrice} />
              }
            })}
        </div>
    </div>
  )
}

export default Popular
