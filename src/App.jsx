import { Bio } from "./components/Bio";
import { Navbar } from "./components/Navbar";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { WorkExperience } from "./components/WorkExperience";
import { Education } from "./components/Education";
import { Certifications } from "./components/Certifications";
import { ContactForm } from "./components/ContactForm";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden antialiased">
      <div className="fixed inset-0 bg-fixed bg-cover bg-center bg-img" />
      <div className="relative z-10 flex flex-col items-center px-4 sm:px-6 md:px-8 lg:px-12 mx-auto w-full max-w-[1440px]">
        <Navbar />
        <Bio />
        <Projects />
        <Skills />
        <WorkExperience />
        <Education />
        <Certifications />
        <ContactForm />
        <Footer />
      </div>
    </div>
  );
}

export default App;
