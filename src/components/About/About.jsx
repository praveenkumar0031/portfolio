import mypic from "../../assets/hood-pic.png";
import "./about.css";
export default function About(){
    return(
        <div id="about" className="about">
            <div className="txt-box">
                <div className="txt">
                    <h2>Aspiring Software Engineer | Java, Python, and SQL</h2>
                    I am a dedicated and analytical Information Technology student with hands-on experience in software development through academic and personal projects. My goal is to leverage my skills in programming and problem-solving to contribute to a forward-thinking organization.

<h2>My core competencies include:</h2>

<h3>Backend Development:</h3> Proficient in Java and SQL, demonstrated by building a console-based banking application with MySQL for data management.
<h3>Machine Learning:</h3> Developed an attendance automation system using Python, Flask, and OpenCV, achieving high accuracy in face recognition.
<h3>Web Technologies:</h3> Familiar with front-end (React ,HTML, CSS, JS) and back-end (Node.js) development for creating interactive applications.
<h3>Developer Tools: </h3>Experienced with linux,Git,eclipse,Docker.
                </div>
            </div>
            <div className="img-box">
                <div className="box">
                <img id="img" src={mypic} alt="mine" />
                </div>
            </div>
        </div>
    );
}