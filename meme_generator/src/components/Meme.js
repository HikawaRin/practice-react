import React from 'react';
import './Meme.css';
import memesData from "../memesData.js";

const response = memesData();

function Meme() { 
    const [meme, UpdateMeme] = React.useState({
        'topText': '',
        'bottomText': '',
        'randomImage': response.data.memes[0].url,
    });

    let getMeme = () => { 
        let index = Math.floor(Math.random() * response.data.memes.length);
        UpdateMeme((prevMeme) => {
            return ({ ...prevMeme, randomImage : response.data.memes[index].url });
        });
    };

    return (
        <div className='Meme'>
            <div className='Meme-form'>            
                <input id='Meme-upper' type='text' value='Shut up'/>
                <input id='Meme-lower' type='text' value='and take my money'/>
                <button className="Meme-btn" type="button"
                    onClick={getMeme}>
                    Get a new meme image 🖼
                </button>
            </div>
            <img className='Meme-img' src={meme.randomImage} alt='Meme-pic'/>                    
        </div>
    );
}

export default Meme;