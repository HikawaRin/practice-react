import React from 'react';

import Welcome from './components/Welcome.js';
import Quiz from './components/Quiz.js';
import './App.css';

function App() {
  const [isStarted, setIsStarted] = React.useState(false);
  let ClickStart = () => { setIsStarted(true); }

  return (
    <main className="App">
      { isStarted ? <Quiz /> : <Welcome click={ClickStart} />}
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
