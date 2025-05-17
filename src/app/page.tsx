import Header from "./Header";
import Hero from "./Hero";
import Projects from "./Projects";
import Experience from "./Experience";
import Education from "./Education";
import LanguagesSkills from "./LanguageSkills";
import Footer from "./Footer";

export default function Home() {
  return(
    <div>
      <Header />
      <Hero />
      <Projects />
      <Experience />
      <Education />
      <LanguagesSkills />
      <Footer />
    </div>
  );
}