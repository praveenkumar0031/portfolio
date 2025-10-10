
import './App.css';
import Project from './components/Projects/Project';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <About/>
      <Project/>
    </div>
  );
}

export default App;
