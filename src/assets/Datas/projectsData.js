import projectpic1 from '../projectpics/filimin.jpeg'
import projectpic2 from '../projectpics/bankmanagement.jpeg'
import projectpic3 from '../projectpics/chat.jpeg'
import projectpic4 from '../projectpics/weather.jpeg'
import projectpic5 from '../projectpics/todos.jpeg'
import projectpic6 from '../projectpics/videocall.jpeg'
import projectpic7 from '../projectpics/scms.jpeg'
import projectpic8 from '../projectpics/coach.jpeg'
// New project image imports (Make sure these images exist in your directory)
import projectpic9 from '../projectpics/skyflow.jpg'
import projectpic10 from '../projectpics/hashtag.jpg'
import projectpic11 from '../projectpics/excherish.jpg'
import projectpic12 from '../projectpics/voxel.jpg'

export const projects = [
  { 
    id: 1, 
    title: "SkyFlow", 
    type: "Solo", 
    tech: "Jenkins, Terraform, Docker, Ansible, AWS (EC2, VPC)", 
    des: "An enterprise-grade, automated CI/CD infrastructure project. Leveraged Terraform for Infrastructure as Code (IaC) to provision secure AWS environments, Docker for containerization, and Ansible for seamless configuration management, all orchestrated dynamically via Jenkins pipelines.", 
    url: projectpic9, 
    link: "https://github.com/praveenkumar0031/SkyFlow" 
  },
  { 
    id: 2, 
    title: "Hashtag (Tea Talks)", 
    type: "Solo", 
    tech: "MongoDB, Express.js, React.js, Node.js, Socket.io", 
    des: "A real-time, ephemeral group chat web application built on the MERN stack. Features live message streaming via WebSockets and a unique 24-hour automatic message expiration database policy for private, casual conversations.", 
    url: projectpic10, 
    link: "https://github.com/praveenkumar0031/Hashtag" 
  },
  { 
    id: 3, 
    title: "Excherish", 
    type: "Solo", 
    tech: "React.js, Node.js, Express.js, MongoDB", 
    des: "A comprehensive full-stack web application designed for interactive experiences. Built with a scalable robust backend REST API architecture and a fluid, responsive user interface to handle dynamic user data smoothly.", 
    url: projectpic11, 
    link: "https://github.com/praveenkumar0031/excherish" 
  },
  { 
    id: 4, 
    title: "3D Block Builder Tool", 
    type: "Solo", 
    tech: "React.js, Three.js / React Three Fiber, Tailwind CSS", 
    des: "An interactive, web-based 3D block-building simulator inspired by Roblox and Minecraft. Utilizes WebGL components to allow users to generate, place, texture, and destroy blocks in a dynamic 3D canvas environment in real time.", 
    url: projectpic12, 
    link: "https://github.com/praveenkumar0031/3d-block-builder" 
  },
  { 
    id: 5, 
    title: "Coach Desk", 
    type: "Solo", 
    tech: "React (Vite), Tailwind CSS, Node.js, Express, Firebase", 
    des: "A full-stack Coach Management Admin Panel. The system allows administrators to seamlessly manage coach profiles — including adding, updating, filtering, sorting, and deleting records — backed by a responsive, elegant dashboard UI.", 
    url: projectpic8, 
    link: "https://github.com/praveenkumar0031/CoachDesk", 
    live: "https://coach-desk-dev.vercel.app" 
  },
  { 
    id: 6, 
    title: "Filimin", 
    type: "Team", 
    tech: "HTML, CSS, JavaScript, Firebase (Auth)", 
    des: "Financial Literacy Management System (Filimin) is a gamified web app designed to teach budgeting, saving, debt management, investing, and taxes. The interactive mechanics enlighten users on keeping their economic life healthy.", 
    url: projectpic11, 
    link: "https://github.com/praveenkumar0031/filim.in", 
    live: "https://praveenkumar0031.github.io/filim.in/home" 
  },
  { 
    id: 7, 
    title: "Smart Classroom Management System", 
    type: "(SIH) Team", 
    tech: "HTML, CSS, JavaScript, Flask, OpenCV, Pandas, Firebase", 
    des: "An AI-powered platform for smart classroom operations. Contributed facial recognition–based automated attendance tracking and integrated data analytics to generate real-time reports alongside resource optimization features.", 
    url: projectpic7, 
    link: "https://github.com/praveenkumar0031/Smart-Classroom" 
  },
  { 
    id: 8, 
    title: "Task-Manager", 
    type: "Solo", 
    tech: "React.js, Java (Spring Boot), MySQL", 
    des: "Built a full-stack task management web application. Implemented features such as task creation, tracking, state updates, and categorization via secure RESTful backend APIs integrated with a relational database.", 
    url: projectpic5, 
    link: "https://github.com/praveenkumar0031/task-manager" 
  },
  { 
    id: 9, 
    title: "Video calling app", 
    type: "Solo", 
    tech: "React.js, Java (Spring Boot), WebRTC, WebSockets", 
    des: "Developed a real-time peer-to-peer communication platform. Integrated WebRTC for low-latency video/audio streaming, utilizing a Spring Boot backend alongside WebSockets for stable signaling and session management.", 
    url: projectpic6, 
    link: "https://github.com/praveenkumar0031/video-streaming-app" 
  },
  { 
    id: 10, 
    title: "Bank Management System", 
    type: "Solo", 
    tech: "Java, MySQL (JDBC)", 
    des: "A console-based financial system executing robust CRUD operations using SQL Drivers. Strongly leverages core OOP concepts and custom data structures to manage secure account records efficiently.", 
    url: projectpic2, 
    link: "https://github.com/praveenkumar0031/bank_management_system/tree/v2" 
  },
  { 
    id: 11, 
    title: "Chat app", 
    type: "Solo", 
    tech: "Java", 
    des: "A terminal-driven private network room connecting clients directly. Built from scratch using native Java Network I/O Sockets to establish point-to-point server-client communication channels.", 
    url: projectpic3, 
    link: "https://github.com/praveenkumar0031/java-projects/tree/main/chatapp" 
  },
  { 
    id: 12, 
    title: "Weather app", 
    type: "Solo", 
    tech: "React.js, Tailwind CSS, OpenWeather API", 
    des: "A responsive real-time weather web application providing precise 5-day atmospheric forecasts. Features dynamic loading animations, error catch blocks, and geographical parameters like wind speed and pressure.", 
    url: projectpic4, 
    link: "https://github.com/praveenkumar0031/weather-app", 
    live: "https://weather-app-rho-wheat.vercel.app" 
  }
];

export function getProjectCount() {
  return projects.length;
}