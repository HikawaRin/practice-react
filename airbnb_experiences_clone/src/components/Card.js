import React from 'react';
import './Card.css';
import katie from '../images/katie-zaferes.png';

const bulletChar = '\u2022';

function Card() { 
    return (
        <div className="card">
            <img src={katie} alt='katie' />
            <div className='card--description'>
                <div className='card--status'>
                    <i className="fa-solid fa-star"></i>
                    <span>5.0</span>
                    <span className='gray'>(6) {bulletChar} </span>
                    <span className='gray'>USA</span>
                </div>
                <p>Life lessons with Katie Zaferes</p>
                <p><span className='bold'>From $136</span> / person</p>
            </div>
        </div>
    );    
}

export default Card;