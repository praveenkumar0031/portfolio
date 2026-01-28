import img from '../pro.jpg';
import eye from '../stickers/eye.jpg';
import dev from '../stickers/dev.jpg';
import mik from '../stickers/mik.jpg';
export const selfimg = img;
export const aboutData = {
    intro: "I am a dedicated and analytical Information Technology student with hands-on experience in software development through academic and personal projects. My goal is to leverage my skills in programming and problem-solving to contribute to a forward-thinking organization.",

    image: {
        src: selfimg,
        alt: "Professional portrait of the developer",
    },stk:{
        src1: dev,
        alt: "developer sticker",
        src2: mik,
        alt: "mik sticker",
        src3: eye,
        alt: "eye sticker",
    },

    competencies: [
        {
            title: "Aspiring Software Engineer | React , Java and SQL",
            type: "main-title"
        },
        {
            title: "My core competencies include:",
            type: "section-title"
        },
        {
            title: "Backend Development:",
            details: "Proficient in Java and SQL, demonstrated by building a Java Stack Task-manager,chat-app,video-calling,console-based banking application with MySQL for data management.",
            type: "skill-area"
        },
        {
            title: "Web Technologies:",
            details: "Familiar with front-end (React, HTML, CSS, JS) and back-end (Java SpringBoot) REST api development for creating interactive applications and data management. Developed a production ready Containers using docker.",
            type: "skill-area"
        },
        {
            title: "Product Deployment:",
            details: "Had Experience with platforms like linux ,docker ",
            type: "skill-area"
        },
        {
            title: "Developer Tools:",
            details: "Experienced with Linux(unbuntu), Git, Eclipse, Docker.",
            type: "skill-area"
        },
    ]
};

