import "./Dice.css";

function Dice(props) { 
    let Status = (props.info.selected)? "selected" : "";
    return (
        <div className={`dice ${Status}`} onClick={(event) => props.click(event, props.info.id)}>
            <p>{ props.info.value }</p>
        </div>
    );
}

export default Dice;