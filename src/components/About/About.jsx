import "./about.css";
import { aboutData, selfimg } from '../../assets/Datas/aboutData';

export default function About() {
    const renderCompetencies = () => {
        return aboutData.competencies.map((item, index) => {
            switch (item.type) {
                case 'main-title':
                    return <h2 key={index}>{item.title}</h2>;
                case 'section-title':
                    return <h2 key={index} className="section-title-underline">{item.title}</h2>;
                case 'skill-area':
                    return (
                        <div key={index} className="skill-item">
                            <h3>{item.title}</h3>
                            <p>{item.details}</p>
                        </div>
                    );
                default:
                    return null;
            }
        });
    };

    return (
        <div id="about" className="about">
            <div className="txt-box">
                <div className="txt">
                    {renderCompetencies()}
                    <p className="intro-text">{aboutData.intro}</p>
                </div>
            </div>
            <div className="img-box">
                <div className="box">
                    <img
                        id="img"
                        src={aboutData.image.src}
                        alt={aboutData.image.alt}
                    />
                </div>
            </div>
        </div>
    );
}