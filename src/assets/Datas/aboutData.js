import img from '../suits.jpeg';

export const selfimg = img;
export const aboutData = {
    heroTitle: "Praveen Kumar S — Software Engineer",
    marqueeText: "Let's Talk • Let's Build • Let's Ship •",
    intro: "I am a dedicated and analytical Information Technology student with hands-on experience in software development through academic and personal projects. My goal is to leverage my skills in programming and problem-solving to contribute to a forward-thinking organization.",

    image: {
        src: selfimg,
        alt: "Professional portrait of the developer",
    },

    competencies: [
        
        
        {
            title: "Backend Development:",
            details: "Proficient in Java and SQL, demonstrated by building a Java Stack Task-manager,kafka based stock monitoring system using Java SpringBoot,chat-app,video-calling,console-based banking application with MySQL for data management.",
            type: "skill-area"
        },
        {
            title: "MERN Technologies:",
            details: "Familiar with front-end React and back-end (Node js,Express) REST api development with JWT authentication and rate limiting and MongoDB for creating interactive production ready applications .",
            type: "skill-area"
        },
        {
            title: "Product Deployment:",
            details: "Had Experience with devops tools like GitHub,Jenkins,docker,kubernetes and cloudplatforms like aws with terraform and monitoring tools like prometheus and grafana for tracking server metrics.",
            type: "skill-area"
        },
        
    ]
};

