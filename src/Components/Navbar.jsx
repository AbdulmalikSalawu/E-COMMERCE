import React from 'react'
import '../Styles/Navbar.css'
import logo from '../Assets/yinka-logo.png';

const Navbar = () => {
  return (
    <div className='navbar'>
        <header className='sticky-top shadow-sm'>
            <span className='navsvg d-flex ms-lg-3'><img class="logo ms-5" src={logo} alt="svg image"/><span class="brandname mb-lg-3 fw-bold">saveWyse</span></span>
            <nav ref={navRef} className='pb-2'>
                <NavLink to='/invest' onClick={navLinks}>Invest</NavLink>
                <NavLink to='/stories' onClick={navLinks}>Stories</NavLink>
                <NavLink to='/faqs' onClick={navLinks}>FAQs</NavLink>
                <NavLink to='/resources' onClick={navLinks}>Resources</NavLink>
                <NavLink to='/login' onClick={()=>navigate('login')} className='signinbtn mt-5'><small class='pt-5' onClick={navLinks}>Sign in</small></NavLink>
                <button onClick={goToSignup} className='signupbtn text-white px-4'>Create Free Account</button>
                <button className='nav-btn nav-close-btn' onClick={showNavbar}>
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
