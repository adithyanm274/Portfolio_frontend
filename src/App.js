import './App.css';
import NavigationBar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
function App() {
  return (
     <>
      <NavigationBar />
      <Hero />
      <About />
      <Skills />
      <Experience /> 
      <Projects />
      <Certifications />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
