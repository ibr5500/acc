import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Icon from './components/Icon';
import About from './components/About';
import Goals from './components/Goals';
import Mission from './components/Mission';
import Value from './components/Value';
import Service from './components/Service';
import Vision from './components/Vision';
import Contact from './components/Contact';
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Icon />
        <About />
        <Service />
        <Goals />
        <Value />
        <Mission />
        <Vision />
        <Contact />
      </div>
    </BrowserRouter>
  );
}

export default App;
