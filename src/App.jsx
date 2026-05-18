import Services from './components/Services';
import Premium from './components/Premium';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import './App.css';

function App() {
  return (
    <div className="app">
      <Services />
      <Premium />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
