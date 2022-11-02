import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

function App() {
  return (
    <div className="App">
      <header>
        <Navbar /> 
      </header>      
    <main>
      <Hero />
    </main>
    </div>
  );
}

export default App;
