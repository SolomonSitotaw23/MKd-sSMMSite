
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { About } from './components/About';
import { Resume } from './components/Resume';
import { Work } from './components/Work';

gsap.registerPlugin(ScrollTrigger);

function App() {
  return (
    <>
      <div className="noise-overlay"></div>
      <Hero />
      <Services />
      <About />
      <Resume />
      <Work />
    </>
  );
}

export default App;
