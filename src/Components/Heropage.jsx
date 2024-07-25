import React, { useEffect, useState } from 'react'
import Navbar from './Navbar';
import { motion, spring, useInView, useAnimation } from "framer-motion"
import croppedLady from '../Assets/herolady.PNG'
import {useNavigate } from 'react-router-dom';
import '../Styles/Heropage.css'
import Popular from './Popular';
import Offers from './Offers';
import NewCollections from './NewCollections';
import NewsLetter from './NewsLetter';
import Footer from './Footer';

const Heropage = () => {

  const [email,setEmail] = useState("")

  useEffect(() => {
    if(localStorage.getItem('token')){
      // fetch("http://localhost:4000/userData", {
      fetch("https://storeformalik.onrender.com/userData", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        token:localStorage.getItem("token"),
      }),
    })
    .then((res)=>res.json())
    .then((data)=> {
        console.log(data, "userData")
        setEmail(data.data.email)
        if (data.data=="token expired") {
          alert("session expired, login again");
          localStorage.clear();
          navigate('/login')
        }
      })}
  }, [])

    const navigate = useNavigate()

  return (
    <div>
        <Navbar />
      
        <div className='row pt-5 mb-5 herodiv'>
              <div className='col-sm-12 col-md-10 col-lg-6 mt-lg-5 pt-4 pe-'>

              <motion.div 
                variants={{
                  hidden: {opacity:0, y:75},
                  visible:{opacity:1, y:0}
                }}
                initial="hidden"
                animate="visible"
                transition={{duration:0.5, delay:0.25}}
              >  
                {email}
                <h1 className='mt-5 ms-5 bigHeading fw-bold'>New Collections for Everyone</h1>
                <p className='pe-lg-5 ms-5 fs-5 mission'>Discover exclusive deals and premium products. Shop now for unbeatable prices, fast shipping, and exceptional customer service. Elevate your shopping experience with us today!</p>
              </motion.div>

                <motion.button

                  initial={{ x: '-50vw' }} 
                  animate={{ x:0 }}
                  // animate={{ scale:1.5 }} 
                  transition={{duration: 1,  type: 'spring', stiffness: 120 }}
                  whileHover={{ scale:1.02 }}
                  onClick={() => navigate('/signup')} className='herobutton ms-lg-5 mt-3'>Latest collection

                </motion.button><br/>
              </div>
              <div className='col-lg-5 ps-lg-5 pt-5 me-3'>
                  <img src={croppedLady} className='lady mt-5 ms-lg-2' alt='happy lady' />
              </div> 
          </div><br/>
          <Popular />
          <Offers />
          <NewCollections />
          <NewsLetter />
          <Footer />

    </div>
  )
}

export default Heropage
