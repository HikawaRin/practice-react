import './Welcome.css';

function Welcome(props) {
    return (
        <div className='quizzical--welcome'>
            <h1>Quizzical</h1>
            <p>Quizzical is a quiz app built with React and Redux.</p>
            <div onClick={(event) => { return props.click(event) }}>Start quiz</div>
        </div>
    );
}

export default Welcome;