import React from 'react';
import './Card.css';

const bulletChar = '\u2022';

function Card(props) { 
    let {coverImg: img, stats: {rating, reviewCount}, location: country, title, price} = props.info
    return (
        <div className="card">
            <img src={img} alt='katie' />
            <div className='card--description'>
                <div className='card--status'>
                    <i className="fa-solid fa-star"></i>
                    <span>{rating.toFixed(1)}</span>
                    <span className='gray'>({reviewCount}) {bulletChar} </span>
                    <span className='gray'>{country}</span>
                </div>
                <p>{title}</p>
                <p><span className='bold'>From ${price}</span> / person</p>
            </div>
        </div>
    );    
}

export default Card;