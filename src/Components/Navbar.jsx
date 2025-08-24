import React, {useContext, useRef,useState} from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import '../Styles/Navbar.css'
import logo from '../Assets/yinka-logo.png';
import { FaBars, FaTimes} from 'react-icons/fa';
import {useDispatch} from 'react-redux'
import {setShow, removeShow} from '../Features/navSlice'
import { motion, spring, useInView, useAnimation } from "framer-motion"
import cart from '../Assets/cart2.svg'
import person from '../Assets/person.svg'
import { ShopContext } from '../Context/ShopContext';
import { useEffect } from 'react';

const Navbar = () => {
    const [openNav,setOpenNav] = useState(true)
    const [userData, setUserData] = useState({})
    const navRef = useRef();
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {getTotalItems} = useContext(ShopContext)

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
            setUserData(data.data)
            if (data.data=="token expired") {
              alert("session expired, login again");
              localStorage.clear();
              navigate('/login')
            }
          })}
      }, [])

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
                <NavLink to='/' className='shop' onClick={navLinks}>Shop</NavLink>
                <NavLink to='/men' onClick={navLinks}>Men</NavLink>
                <NavLink to='/women' onClick={navLinks}>Women</NavLink>
                <NavLink to='/kids' onClick={navLinks}>Kids</NavLink>
                <NavLink to='/gadgets' onClick={navLinks}>Gadgets</NavLink>
                <NavLink to='/beauty' onClick={navLinks}>Beauty</NavLink>
                <NavLink to='/login' className='signinbtn mt-5'>
                    {localStorage.getItem("token")?
                    <small class='pt-5' onClick={()=>{localStorage.removeItem("token");window.location.replace('/')}}>Logout</small>
                    :<small class='pt-5' onClick={navLinks}>Sign in</small>}
                </NavLink>

                <motion.button
                    // onClick={navigate('/signup')}
                    whileHover={{ scale:1.1 }}
                    className='signupbtn text-white px-4'><small className='px-2' onClick={()=>navigate('/signup')}>Create Account</small>
                </motion.button>
                <img onClick={()=>navigate("/cart")} className='cart ms-lg-' src={cart} alt='cart' /><span className='fw-bold cartCount'>{getTotalItems()}</span>
                <img onClick={()=>navigate("/profile",{state:userData})} className='person ms-lg-' src={person} alt='profile' />
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
