// HomePage.js
import React from "react";
import Header from "./Header";
import Skills from "./Skills";
import Experience from "./Experience";
import Education from "./Education";
import Certifications from "./Certifications";
import Projects from "./Projects";
import Interests from "./Interests";
import Mentorship from "./Mentorship"
import Welcome from "./Welcome"
import MasterclassReg from "./MasterclassReg"
import IndustryExperience from "./IndustryExperience"
// Contact from "./Contact";
import Features from "./Features";

const HomePage = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-8">
      {/* Header Section */}
      <Header />

      {/* Skills Section */}
      <Skills />

      {/* Experience Section */}
      <Experience />
      <IndustryExperience/>
      {/* Education Section */}
      <Education />

      {/* Certifications Section */}
      <Certifications />
      
      {/* Projects Section */}
      <Projects />
        {/* Skills Section */}
        <Features />
      
      {/* Interests Section */}
      <Interests />

 {/* Interests Section */}
 <Mentorship />
 {/* Interests Section */}
<Welcome/>
 <MasterclassReg/>
  
      {/* Contact Section 
      <Contact />*/}
    </div>
  );
};

export default HomePage;
