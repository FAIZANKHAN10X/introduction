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
    <div className="min-h-screen bg-bg-dark text-text-primary selection:bg-accent selection:text-bg-dark">
      {/* Fixed Background Noise - Moved to z-0 for performance */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-noise" />

      <Navbar />

      {/* Main content z-10 ensures it sits ABOVE the noise layer */}
      <main className="relative z-10 flex flex-col gap-24 md:gap-32 lg:gap-40 pb-32">
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
