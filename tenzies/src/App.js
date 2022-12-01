// import logo from './logo.svg';
import React from 'react';
import Confetti from 'react-confetti';
import Dice from "./Dice";
import './App.css';

function roll(dice) {
  return { ...dice, value: Math.ceil(Math.random() * 6) };
}

function App() {
  const [dices, setDices] = React.useState(() => {
    let dices = [];
    for (let i = 0; i < 10; i++) {
      dices.push(roll({ id: i, value: 0, selected: false }));
    }
    return dices;
  });
  const [round, setRound] = React.useState(0);
  const [tenzies, setTenzies] = React.useState(false);

  React.useEffect(() => {
    const allHedl = dices.every((dice) => { return dice.selected; }); 
    const allSameValue = dices.every((dice) => { return dice.value === dices[0].value; });
    if (allHedl && allSameValue) {
      setTenzies(true);
    }
  }, [dices]);

  let clickHandler = (event, id) => {
    setDices((prevDices) => {
      return prevDices.map(die => {
        if (die.id === id) {
          return { ...die, selected: !die.selected };
        }
        return die;
      });
    });
  }

  return (
    <main>
      { tenzies && <Confetti /> }
      <h1>Tenzies</h1>
      <div className='tenzies-describe'>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</div>
      <div> {`You have rolled ${round} Round`} </div>
      <div className="dice-container">
      {
        dices.map((dice) => { 
          return (
                    <Dice key={dice.id} info={dice} click={clickHandler}/>
                  ); 
        })
      }
      </div>
      <div className='tenzies-roll' onClick={(event) => {
        if (!tenzies) {
          setRound((prevRound) => { return prevRound + 1; });
          setDices((prevDices) => {
            let newDices = [...prevDices];
            for (let i = 0; i < newDices.length; i++) {
              if (!newDices[i].selected) {
                newDices[i] = roll(newDices[i]);
              }
            }
            return newDices;
          }); 
        } else {
          setTenzies(false);
          setRound(0);
          setDices((prevDices) => {
            return prevDices.map(die => {
              let newDie = roll(die);
              return { ...newDie, selected: false };
            }); 
          });
          tenzies.click();
        }
      }}
      >
        { (tenzies)? "New Game": "Roll" }
      </div>
    </main>
  );
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
