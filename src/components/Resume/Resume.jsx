import React, { useState } from "react";
import resume from "../../assets/resume.pdf";
import "./resume.css";

const Resume = () => {
  const [open, setOpen] = useState(false);
  const resumeLink = resume;

  return (
    <div id="resume" className="resume-container">

      {/* Top heading */}
      {!open && (
        <h2
          className="resume-title clickable-title"
          onClick={() => setOpen(true)}
        >
          My Resume
        </h2>
      )}

      {/* Floating Back Button */}
      {open && (
        <button className="back-btn" onClick={() => setOpen(false)}>
          ← Back
        </button>
      )}

      {/* Resume Card */}
      {open && (
        <div className="resume-card">
          <iframe
            src={resumeLink}
            title="Resume Preview"
            className="resume-preview"
          ></iframe>

          <div className="resume-actions">
            <a
              href={resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="resume-btn view"
            >
              👀 View
            </a>

            <a
              href={resumeLink}
              download="Praveen_Kumar_Resume.pdf"
              className="resume-btn download"
            >
              ⬇ Download
            </a>

            <a
              href="https://drive.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="resume-btn drive"
            >
              📁 Drive
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Resume;
