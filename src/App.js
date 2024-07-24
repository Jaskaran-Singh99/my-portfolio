import './App.css';
import './app.scss'
import Navbar from './components/navbar/Navbar';
import { Hero } from './components/hero/hero';
import { Parallax } from './components/parallax/Parallax';
import  Projects  from './components/projects/Projects';
import Contact from './components/contact/Contact';
import Cursor from './components/cursor/Cursor';

function App() {
  return (
    <div className="App">
      <Cursor></Cursor>
       <section id='Home'>
        <Navbar></Navbar>
        <Hero></Hero>
        </section>
       
       <section> <Parallax></Parallax></section>
        <div id='Projects'><Projects></Projects></div>
       <section id="Contact"><Contact></Contact></section>
      

    </div>
  );
}

export default App;
