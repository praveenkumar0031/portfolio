
import './App.css';
import Project from './components/Projects/Project';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Skill from './components/Skills/Skill'
function App() {
  return (
    <div className="App">
      <Navbar/>
      <About/>
      <Project/>
      <Skill/>
    </div>
  );
}

export default App;
