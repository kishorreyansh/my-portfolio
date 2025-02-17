import React from "react";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Bio from "./components/Bio";
import Skills from "./components/Skills";
import WorkExperience from "./components/WorkExperience";
import Education from "./components/Education";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

import CertificationsNew from "./components/CertificationsNew";

function App() {
  return (
    <div className="relative h-full overflow-y-auto antialiased">
      <div className="fixed inset-0 bg-fixed bg-cover bg-center bg-img"></div>
      <div className="relative z-10 flex flex-col items-center p-4 space-y-2 gap-2 container mx-auto">
        <Navbar />
        <Bio />
        <Projects />
        <Skills />
        <WorkExperience />
        <Education />
        <CertificationsNew />
        <ContactForm />
        <Footer />
      </div>
    </div>
  );
}

export default App;
