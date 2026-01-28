import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Summary from "./components/Summary";
import Competencies from "./components/Competencies";
import Experience from "./components/Experience";
import Toolkit from "./components/Toolkit";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="antialiased selection:bg-cyan-900 selection:text-cyan-100 min-h-screen bg-[#0a0a0a] text-[#e5e5e5] overflow-x-hidden">
      {/* Scanlines Overlay */}
      <div className="scanlines"></div>

      <Navbar />

      {/* 
         LAYOUT FIX: 
         - 'flex flex-col' allows us to use 'gap'
         - 'gap-32' adds ~128px of space between every section (Hero, Summary, etc.)
         - 'pb-32' adds space at the very bottom before the footer
      */}
      <main className="relative z-10 pt-10 pb-32 px-6 max-w-[100vw] flex flex-col gap-32 md:gap-40">
        <Hero />
        <Summary />
        <Competencies />
        <Experience />
        <Toolkit />
        <Projects />
        <Education />
      </main>

      <Footer />
    </div>
  );
}

export default App;
