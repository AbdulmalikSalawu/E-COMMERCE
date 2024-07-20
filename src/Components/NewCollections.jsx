import React,{useState,useEffect} from 'react'
import '../Styles/NewCollections.css'
// import productData from './Data'
import Items from './Items'

const NewCollections = () => {

  const [productData,setProductData] = useState([])

  useEffect(()=>{
    fetch("https://storeformalik.onrender.com/newCollections")
    .then((response)=>response.json())
    .then((data)=>setProductData(data))
  },[])

  return (
    <div className='collections'>
        <h2 className='mt-3'>NEW COLLECTIONS</h2>
        <hr />
        <div className='collections-item'>
            {productData.filter((item)=>item.id>7).map((item,i)=>{
                return <Items key={i} id={item.id} name={item.name} image={item.newImage} newPrice={item.newPrice} oldPrice={item.oldPrice}/>
            })}
        </div>
    </div>
  )
}

export default NewCollections
