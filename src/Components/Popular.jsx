import React,{useState,useEffect} from 'react'
import '../Styles/Popular.css'
// import productData from './Data'
import Items from './Items'

const Popular = () => {

  const [productData,setProductData] = useState([])

  useEffect(()=>{
    fetch("https://storeformalik.onrender.com/popularInWomen")
    .then((response)=>response.json())
    .then((data)=>setProductData(data))
  },[])

  return (
    <div className='popular'>
        <h2>Popular in Women</h2>
        <hr />
        <div className='popular-item'>
            {productData.map((item,i)=>{
                return <Items key={i} id={item.id} name={item.name} image={item.newImage} newPrice={item.newPrice} oldPrice={item.oldPrice} />
            })}
        </div>
    </div>
  )
}

export default Popular
