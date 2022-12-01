import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import "./Quiz.css";

const url = "https://opentdb.com/api.php?amount=5";

async function fetchQuizes(url) {
    console.log("fetching...");
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return (data.results.map((quiz) => {
                return { 
                    "uuid": uuidv4(),
                    "question" :  quiz.question,
                    "correct_answer" : quiz.correct_answer,
                    "incorrect_answers" : quiz.incorrect_answers,
                    "selected_answer" : null
                };
            }));
}

function Quiz() {
    const [loading, setLoading] = React.useState(true);
    const [quizes, setQuizes] = React.useState([]);
    const [showResults, setShowResults] = React.useState(false);
    const [score, setScore] = React.useState(0);

    let NewGame = async () => {
        setLoading(true);
        const data = await fetchQuizes(url);    
        setQuizes(data);
        setLoading(false);
    };

    React.useEffect(() => {
        (async () => await NewGame())();
    }, []);

    let clickHandler = (event) => {
        if (!showResults) {
            setScore(quizes.reduce((acc, quiz) => {
               return acc + (quiz.selected_answer === quiz.correct_answer ? 1 : 0);
            }, 0));
            setShowResults(true);
        } else {
            // New Game
            (async () => await NewGame())();
            setScore(0);
            setShowResults(false);
        }
    }

    let updateSelected = (uuid, info) => {
        setQuizes((prevQuizes) => {
            let newQuizes = [...prevQuizes];
            for (let i = 0; i < newQuizes.length; i++) {
                if (newQuizes[i].uuid === uuid) {
                    newQuizes[i].selected_answer = info;
                }
            }
            return newQuizes;
        });
    };

    return (
        <div className="quiz--context">
            <div>
            { loading ? <div>Loading...</div> :
                quizes.map((quiz, index) => {
                    return <QuizItem key={quiz.uuid} info={quiz} submited={showResults} updata={updateSelected}/>
                })
            }
            <div className='quiz--submit'>
                { showResults && <div>You scored {score}/5 correct answers</div>}
                { !loading && <button onClick={(e) => {clickHandler(e)}}>{showResults ? "Play again" : "Check answers"}</button> }
            </div> 
            </div>
        </div>
    );
}

function generateChoice(info) {
    let choices = [...info.incorrect_answers]
    choices.splice(Math.floor(Math.random() * info.incorrect_answers.length), 0, info.correct_answer);
    return choices
}

function QuizItem(props) {
    const [selected, setSelected] = React.useState(null);
    const [choices, setChoices] = React.useState([]);
    let updata = (selected) => { props.updata(props.info.uuid, selected); }
    React.useEffect(() => {
        setChoices(generateChoice(props.info));
    }, [props.info]); 
   
    React.useEffect(() => {
        updata(selected);
    }, [selected]);   

    let choose = (event, info) => {
        if (!props.submited) { 
            setSelected((prevChoose) => prevChoose === info ? null : info);
        }
    }

    
    return (
        <div className="quiz--item">
            <div className="quiz--question">{props.info.question}</div>
            <div className="quiz--choices">
                {
                    choices.map((choice, index) => {
                        return <Choice key={index} 
                                        info={choice} 
                                        click={choose} 
                                        correct_answer={props.info.correct_answer}
                                        selected={selected}
                                        submited={props.submited}
                                />
                    })
                }
            </div>
            <div className='quiz--seperation'/>
        </div>
    );
}

function Choice(props) {
    let style = props.selected === props.info ? "selected" : ""; 
    if (props.submited) {
        if (style !== "") { 
            style = props.info === props.correct_answer ? "correct" : "incorrect";
        } else if (props.info === props.correct_answer) {
            style = "correct";
        }
    }
    
    return (
        <div className={`quiz--choice ${style}`} onClick={(e) => props.click(e, props.info)}>
            {props.info}
        </div>
    );
}

export default Quiz;