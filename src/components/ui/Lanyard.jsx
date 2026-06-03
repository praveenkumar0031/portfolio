import "./Lanyard.css";

export default function Lanyard({ texture, alt }) {
  return (
    <div className="lanyard-root">
      <div className="lanyard-ring" aria-hidden="true" />
      <img className="lanyard-image" src={texture} alt={alt} />
      <div className="lanyard-glow" aria-hidden="true" />
    </div>
  );
}
