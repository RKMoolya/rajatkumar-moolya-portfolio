import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { AIAssistant } from './components/AIAssistant';
import { Hero } from './sections/Hero';
import { Introduction } from './sections/Introduction';
import { Services } from './sections/Services';
import { Projects } from './sections/Projects';
import { Process } from './sections/Process';
import { Experience } from './sections/Experience';
import { Education } from './sections/Education';
import { Skills } from './sections/Skills';
import { Certifications } from './sections/Certifications';
import { About } from './sections/About';
import { Contact } from './sections/Contact';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Introduction />
        <Services />
        <Projects />
        <Process />
        <Skills />
        <Experience />
        <Education />
        <Certifications />
        <About />
        <Contact />
      </main>
      <Footer />
      <AIAssistant />
    </div>
  );
}

export default App;
