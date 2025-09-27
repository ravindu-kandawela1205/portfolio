import Header from './components/ui/Header';
import Hero from './pages/pageA/sections/Hero';
import About from './pages/pageA/sections/Aboutme';
import Experience from './pages/pageA/sections/Experience';
import Projects from './pages/pageA/sections/Projects';

function App() {
  return (
    <>
    <Header />
    <main>
    <Hero /> 
    <About /> 
    <Experience />
    <Projects />
    </main>
    </>
  );
}

export default App;
