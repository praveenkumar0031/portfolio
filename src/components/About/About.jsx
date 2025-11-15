import "./about.css";
import { aboutData } from '../../assets/Datas/aboutData';

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
            {/* Paper Pieces */}
            <div className="paper-piece"></div>
            <div className="paper-piece"></div>
            <div className="paper-piece"></div>
            <div className="paper-piece"></div>
            <div className="paper-piece"></div>

            {/* Stickers */}
            <div className="sticker s1">
                <img src={aboutData.stk.src1} alt="sticker" />
            </div>
            <div className="sticker s2">
                <img src={aboutData.stk.src2} alt="sticker" />
            </div>
            <div className="sticker s3">
                <img src={aboutData.stk.src3} alt="sticker" />
            </div>

            {/* Doodle Arrows */}
            <div className="arrow a1">
                <svg viewBox="0 0 100 100">
                    <path d="M10,80 Q50,10 90,40" />
                    <path d="M85,35 L90,40 L82,42" />
                </svg>
            </div>
            <div className="arrow a2">
                <svg viewBox="0 0 100 100">
                    <path d="M10,20 Q60,90 90,60" />
                    <path d="M85,55 L90,60 L82,62" />
                </svg>
            </div>

            {/* Left Text Box */}
            <div className="txt-box">
                <div className="txt">
                    {renderCompetencies()}
                    {/* Mini doodles in left area */}
                    <div className="doodle mini1">✦</div>
                    <div className="doodle mini2">*</div>
                    <div className="doodle mini3">~</div>
                </div>
            </div>

            {/* Right Image Box with Speech Bubble Below */}
            <div className="img-box">
                <div className="box">
                    <img
                        id="img"
                        src={aboutData.image.src}
                        alt={aboutData.image.alt}
                    />
                </div>
                <p className="intro-text">{aboutData.intro}</p>

                {/* Doodles under image */}
                <div className="doodle star">*</div>
                <div className="doodle spark">✦</div>
                <div className="doodle squiggle">~</div>
                <div className="doodle star2">*</div>
                <div className="doodle spark2">✦</div>

                {/* Sticky notes near second arrow */}
                <div className="small-note note1">💡</div>
                <div className="small-note note2">📝</div>
            </div>
        </div>
    );
}
