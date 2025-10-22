import React from "react";
import resume from '../../assets/resume.pdf'
import './resume.css';
const Resume = () => {
  const resumeLink = resume; 

  return (
    <div id="resume" className="flex flex-col items-center justify-center p-8">
      <h2 className="text-3xl font-bold mb-6">My Resume</h2>
      <a
        href={resumeLink}
        download="Praveen_Kumar_Resume.pdf"
        className="download-btn"
      >
        Download Resume
      </a>
    </div>
  );
};

export default Resume;
