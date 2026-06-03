import "./resume.css";
import resumeFile from "../../assets/resume.pdf";
import { resumeTimeline } from "../../assets/Datas/resumeData";

export default function Resume() {
  return (
    <section id="resume" className="resume-section">
      <div className="resume-header">
        <p className="resume-label">Timeline</p>
        <h2>Experience & Education</h2>
      </div>

      <div className="resume-timeline">
        {resumeTimeline.map((entry, index) => (
          <article className="timeline-card" key={entry.id || index}>
            <div className="timeline-marker">{String(index + 1).padStart(2, "0")}</div>
            <div className="timeline-content">
              <div className="timeline-top">
                <h3>{entry.title}</h3>
                <span className="timeline-period">{entry.start} — {entry.end}</span>
              </div>
              {entry.live && (
                <div className="timeline-top-action">
                  <a href={entry.live} target="_blank" rel="noopener noreferrer" className="timeline-org live-link">
                    {entry.location}
                  </a>
                </div>
              )}
              <p className="timeline-org">{entry.organization} · {entry.location}</p>
              <ul>
                {entry.bullets.map((bullet, bulletIndex) => (
                  <li key={bulletIndex}>{bullet}</li>
                ))}
              </ul>
              {entry.live && (
                <div className="timeline-actions">
                  <a
                    href={entry.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="checkout-btn"
                  >
                    Checkout
                  </a>
                </div>
              )}
            </div>
          </article>
        ))}
      </div>

      <div className="resume-actions">
        <a className="resume-btn" href={resumeFile} target="_blank" rel="noopener noreferrer">
          View Resume
        </a>
        <a className="resume-btn outline" href={resumeFile} download="Resume.pdf">
          Download Resume
        </a>
      </div>
    </section>
  );
}
