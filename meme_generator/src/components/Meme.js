import './Meme.css';
import memesData from "../memesData.js";

const response = memesData();

function Meme() { 
    function getMeme() { 
        let index = Math.floor(Math.random() * response.data.memes.length);
        console.log(response.data.memes[index]) 
    } 

    return (
        <div className="Meme">
            <input id='Meme-upper' type='text' value='Shut up'/>
            <input id='Meme-lower' type='text' value='and take my money'/>
            <button className="Meme-btn" type="button"
                onClick={getMeme}>
                Get a new meme image 🖼
            </button>
                    
        </div>
    );
}

export default Meme;