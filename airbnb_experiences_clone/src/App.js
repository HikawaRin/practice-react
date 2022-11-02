import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';

function App() {
  return (
    <div className="App">
      <header>
        <Navbar /> 
      </header>      
    <main>
      <Hero />
      <Card />
    </main>
    </div>
  );
}

export default App;
