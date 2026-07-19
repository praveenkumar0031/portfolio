import img from '../suits.jpeg';

export const selfimg = img;
export const aboutData = {
    heroTitle: "Praveen Kumar S — Software Engineer",

marqueeText: "Backend • Full-Stack • DevOps • Open Source • Let's Build •",

intro: "Software Engineer with hands-on experience building full-stack applications, cloud-native infrastructure, and developer tools. I enjoy designing scalable backend systems, automating deployments with modern DevOps practices, and contributing to open-source projects that solve real engineering challenges.",
    image: {
        src: selfimg,
        alt: "Professional portrait of the developer",
    },

    competencies: [
    {
        title: "Backend Development:",
        details: "Strong foundation in Java, Spring Boot, Node.js, Express.js, SQL, and MongoDB. Built scalable REST APIs, authentication systems, real-time applications, microservices, and event-driven solutions using Kafka with a focus on clean architecture and performance.",
        type: "skill-area"
    },
    {
        title: "Full-Stack Development:",
        details: "Experienced in building modern MERN applications with React, Node.js, Express.js, MongoDB, JWT authentication, WebSockets, and responsive UI design. Developed production-ready projects featuring real-time communication, secure authentication, and intuitive user experiences.",
        type: "skill-area"
    },
    {
        title: "DevOps & Cloud:",
        details: "Hands-on experience with GitHub Actions, Docker, Kubernetes, AWS, Terraform, Jenkins, Prometheus, Grafana, and CI/CD automation. Skilled in containerization, Infrastructure as Code, cloud deployments, monitoring, and production-ready delivery pipelines.",
        type: "skill-area"
    }
],

sidebar: [
    {
        title: "",
        details: "I build scalable software with a strong focus on backend engineering, cloud-native deployments, and developer productivity. Passionate about system design, DevOps automation, and open-source development, I enjoy creating tools that improve developer workflows and simplify complex engineering challenges."
    },
    {
        title: "What I bring",
        details: [
            "Production-ready full-stack applications using React, Java/Spring Boot, Node.js, SQL, and MongoDB.",
            "Cloud-native deployment experience with Docker, Kubernetes, AWS, Terraform, and CI/CD pipelines.",
            "Strong backend engineering, API design, system architecture, and DevOps automation skills.",
            "Open-source mindset with rapid learning ability, ownership, and collaborative team communication."
        ]
    }
]
};

