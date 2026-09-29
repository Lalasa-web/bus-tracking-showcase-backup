import { Navbar } from './components/layout/Navbar';
import { QuickAccess } from './components/layout/QuickAccess';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Modules } from './components/sections/Modules';
import { Features } from './components/sections/Features';
import { TechStack } from './components/sections/TechStack';
import { Gallery } from './components/sections/Gallery';
import { Timeline } from './components/sections/Timeline';
import { FutureEnhancements } from './components/sections/FutureEnhancements';
import { LiveDemo } from './components/sections/LiveDemo';
import { Reviews } from './components/sections/Reviews';
import { Contact } from './components/sections/Contact';

function App() {
  return (
    <div className="min-h-screen bg-background text-text-primary selection:bg-primary-500/30 selection:text-primary-400 overflow-x-hidden">
      <Navbar />
      <QuickAccess />
      
      <main>
        <Hero />
        <About />
        <Modules />
        <Features />
        <TechStack />
        <Gallery />
        <Timeline />
        <FutureEnhancements />
        <LiveDemo />
        <Reviews />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
