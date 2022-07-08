import './App.css';
// import Home from './components/Home/Home';
// import About from './components/About/About';
// import Contact from './components/Contact/Contact';
// import Projects from './components/Projects/Projects';
// import Skills from './components/Skills/Skills';
// import Services from './components/Services/Services';
import {Home, About, Contact, Projects, Skills, Services} from './components'

import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
