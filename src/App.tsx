import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Education } from './components/Education';
import { Contact } from './components/Contact';

function App() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen text-[#ededed]">
      <Navbar />
      <main className="relative z-10 space-y-24 pb-20">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Education />
        <Contact />
      </main>
      
      {/* Background Gradients */}
      <div className="fixed top-0 left-0 right-0 bottom-0 pointer-events-none z-0 opacity-20">
        <div className="absolute top-[10%] left-[20%] w-[500px] h-[500px] rounded-full bg-indigo-900/40 blur-[100px]" />
        <div className="absolute bottom-[20%] right-[10%] w-[600px] h-[600px] rounded-full bg-purple-900/40 blur-[120px]" />
      </div>
    </div>
  );
}

export default App;
