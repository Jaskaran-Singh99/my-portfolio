import './App.css';
import './app.scss'
import Navbar from './components/navbar/Navbar';
import { Hero } from './components/hero/hero';
import { Parallax } from './components/parallax/Parallax';
import  Projects  from './components/projects/Projects';

function App() {
  return (
    <div className="App">
       <section id='Home'>
        <Navbar></Navbar>
        <Hero></Hero>
        </section>
       
       <section> <Parallax></Parallax></section>
       <Projects id="Projects"></Projects>
       <section id="Contact">Hello</section>
       <section id="Resume">Hello</section>

    </div>
  );
}

export default App;
