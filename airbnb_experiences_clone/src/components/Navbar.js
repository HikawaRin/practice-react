import React from 'react';
import logo from '../images/airbnb_icon.svg';
import './Navbar.css'

function Navbar() { 
    return (
        <nav className='navbar'>
            <img src={logo} alt='logo'/>
        </nav>
    );
}

export default Navbar;