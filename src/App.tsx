import Header from './components/ui/Header';
import Hero from './pages/pageA/sections/Hero';
import About from './pages/pageA/sections/Aboutme';
import Experience from './pages/pageA/sections/Experience';

function App() {
  return (
    <>
    <Header />
    <main>
    <Hero /> 
    <About /> 
    <Experience />
    </main>
    </>
  );
}

export default App;
