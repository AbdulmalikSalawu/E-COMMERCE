import React, {useRef,useState} from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import '../Styles/Navbar.css'
import logo from '../Assets/yinka-logo.png';
import { FaBars, FaTimes} from 'react-icons/fa';
import {useDispatch} from 'react-redux'
import {setShow, removeShow} from '../Features/navSlice'
import { motion, spring, useInView, useAnimation } from "framer-motion"
import cart from '../Assets/cart2.svg'

const Navbar = () => {
    const [openNav,setOpenNav] = useState(true)
    const navRef = useRef();
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav")
    }
     const navLinks = () => {
        navRef.current.classList.toggle("responsive_nav")
        // dispatch(setShow())
        setOpenNav(true)
     }
     const toggle = () => {
       
     }
     const toggle2 = () => {
        
     }

  return (
    <div className='navbar'>
        <header className='sticky-top shadow-sm'>
            <span className='navsvg d-flex ms-lg-3'><img class="logo ms-5" src={logo} alt="svg image"/></span>
            <nav ref={navRef} className='pb-2'>
                <NavLink to='/' onClick={navLinks}>Shop</NavLink>
                <NavLink to='/men' onClick={navLinks}>Men</NavLink>
                <NavLink to='/women' onClick={navLinks}>Women</NavLink>
                <NavLink to='/kids' onClick={navLinks}>Kids</NavLink>
                <NavLink to='/login' className='signinbtn mt-5'><small class='pt-5' onClick={navLinks}>Sign in</small></NavLink>

                <motion.button
                    whileHover={{ scale:1.1 }}
                    className='signupbtn text-white px-4'>Create Account
                </motion.button>
                <img onClick={()=>navigate("/cart")} className='cart ms-lg-' src={cart} alt='cart' />
                <button 
                    className='nav-btn nav-close-btn' onClick={showNavbar}>
                    <FaTimes onClick={toggle2} />
                </button>
            </nav>
            
            {openNav? (<button className='nav-btn nav-open-btn' onClick={showNavbar}>
                <FaBars onClick={toggle} />
            </button>) : ""}
            
        </header>
        
    </div>
  )
}

export default Navbar
