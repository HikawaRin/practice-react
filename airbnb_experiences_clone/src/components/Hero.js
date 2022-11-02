import React from 'react';
import photo from '../images/photo_grid.png';
import './Hero.css';

function Hero() { 
    return (
        <div className='hero'>
            <img src={photo} className='hero--photo' alt='hero_photo' />
            <h1>Online Experiences</h1>
            <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </div>
    );
}

export default Hero;