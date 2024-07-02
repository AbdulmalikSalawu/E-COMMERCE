import React from 'react'
import offerImage from '../Assets/offersImage.png'
import '../Styles/Offers.css'
import { motion, spring, useInView, useAnimation } from "framer-motion"

const Offers = () => {
  return (
    <div className='offers'>
        <div className="offers-left">
            <h1 className='text-center d-block m-auto'>Exclusive</h1>
            <h2>Offers for you</h2>
            <p>ONLY ON BEST SELLERS PRODUCT</p>
            <motion.button initial={{ x: '-50vw' }} 
                  animate={{ x:0 }}
                  // animate={{ scale:1.5 }} 
                  transition={{duration: 1,  type: 'spring', stiffness: 120 }}
                  whileHover={{ scale:1.03 }}>Check Now</motion.button>
        </div>
        <div className="offers-right">
            <img className='offerImage' src={offerImage} alt='' />
        </div>
    </div>
  )
}

export default Offers
