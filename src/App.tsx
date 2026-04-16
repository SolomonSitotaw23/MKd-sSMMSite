
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { About } from './components/About';
import { Resume } from './components/Resume';
import { Work } from './components/Work';
import { Footer } from './components/Footer';

gsap.registerPlugin(ScrollTrigger);

function App() {
  return (
    <>
      <div className="noise-overlay"></div>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Resume />
      <Work />
      <Footer />
    </>
  );
}

export default App;
