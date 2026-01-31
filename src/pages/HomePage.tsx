import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageShell from "../components/PageShell";

import Hero from "../sections/Hero";
import Summary from "../sections/Summary";
import Competencies from "../sections/Competencies";
import Experience from "../sections/Experience";
import Toolkit from "../sections/Toolkit";
import Projects from "../sections/Projects";
import Education from "../sections/Education";
import FAQ from "../sections/FAQ";

export default function HomePage() {
  return (
    <PageShell>
      <Navbar />

      <main className="relative z-10">
        <Hero />
        <Summary />
        <Competencies />
        <Experience />
        <Toolkit />
        <Projects />
        <Education />
        <FAQ />
      </main>

      <Footer />
    </PageShell>
  );
}
