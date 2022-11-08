import TrollFace from '../images/TrollFace.svg';
import './Navbar.css'

function Navbar() { 

    return (
        <nav className='Navbar'>
            <div className='Navbar-logo'>
                <img src={TrollFace} alt='Navbar-logo'/>
                <span>Meme Generator</span>
            </div>
            <div className='Navbar-description'>
                React Course - Project 3
            </div>
        </nav>
    );
}

export default Navbar;