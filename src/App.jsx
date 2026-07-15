import './App.css';
import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Languages from './components/Languages';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Education />
      <Certifications />
      <Skills />
      <Languages />
      <Contact />
      <Footer />
    </>
  );
}
