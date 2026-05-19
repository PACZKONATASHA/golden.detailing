import Hero from './components/Hero';
import Services from './components/Services';
import Premium from './components/Premium';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import './App.css';

function App() {
  return (
    <div className="app">
      <Hero />
      <Services />
      <Premium />
      <Gallery />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
