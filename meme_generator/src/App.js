import Navbar from './components/Navbar';
import Meme from './components/Meme';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar /> 
      </header>
      <main>
        <Meme />
      </main>
    </div>
  );
}

export default App;
