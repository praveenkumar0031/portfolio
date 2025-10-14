
import './App.css';
import Project from './components/Projects/Project';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Skill from './components/Skills/Skill'
import Resume from './components/Resume/Resume';


import Contactlink from './components/Contact/Contactlink';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <About/>
      <Project/>
      <Skill/>
      <Resume/>
      <Contactlink/>
    </div>
  );
}

export default App;
