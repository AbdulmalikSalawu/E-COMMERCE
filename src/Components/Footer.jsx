import React from 'react'
import '../Styles/Footer.css'
import footerLogo from '../Assets/yinka-logo.png'
import instagram from '../Assets/instagram.svg'
import twitter from '../Assets/twitter.svg'
import facebook from '../Assets/facebook.svg'

const Footer = () => {
  return (
    <div className='footer mt-5'>
        <div className='footer-logo'>
            <img className='fi me-4' src={footerLogo} alt='' />
            <p>SHOPPER</p>
        </div>
        <ul className='footer-links me-4'>
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="footer-socials-icon me-5">
            <div className="footer-icons-container">
                <img className='fi'src={instagram} alt='' />
            </div>
            <div className="footer-icons-container">
                <img className='fi' src={facebook} alt='' />
            </div>
            <div className="footer-icons-container">
                <img className='fi' src={twitter} alt='' />
            </div>
        </div>
        <div className="footer-copyright">
            <hr /><br />
            <p>Copyright @ 2024 - All Right Reserved</p>
        </div>
    </div>
  )
}

export default Footer
