import React from 'react'
import '../Styles/Newsletter.css'

const NewsLetter = () => {
  return (
    <div className='newsletter'>
        <h2>Get Exclusive Offers on your Email</h2>
        <p>Subscribe to our news letter and stay updated.</p>
        <div>
            <input type='email' placeholder='your email' />
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default NewsLetter
