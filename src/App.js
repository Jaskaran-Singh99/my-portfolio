import './App.css';
import './app.scss'
import Navbar from './components/Navbar';
import { Hero } from './components/hero/hero';

function App() {
  return (
    <div className="App">
       <section id='Home'>
        <Navbar></Navbar>
        <Hero></Hero>
        </section>
       <section id="Projects">Hello</section>
       <section id="Contact">Hello</section>
       <section id="Resume">Hello</section>

    </div>
  );
}

export default App;
