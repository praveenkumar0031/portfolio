import projectpic1 from '../projectpics/filimin.jpeg'
import projectpic2 from '../projectpics/bankmanagement.jpeg'
import projectpic3 from '../projectpics/chat.jpeg'
import projectpic4 from '../projectpics/weather.jpeg'
import projectpic5 from '../projectpics/todos.jpeg'
import projectpic6 from '../projectpics/videocall.jpeg'
import projectpic7 from '../projectpics/scms.jpeg'
import projectpic8 from '../projectpics/coach.jpeg'



export const projects=[
{ id: 1, title: "Filimin",type:"Team", tech: "Html,Css,Js,Firebase(Authentication)",des:" Financial Literacy Management System (Filimin) is a gamified webapp to make users to bring up the idea of Budgetting, Saving, Debt Management, Investing, Taxes and Financial Literacy. Financial Literacy is a Vital knowledge to run our life economically healthy. Our game enlightens users about finance and its importance.",url:projectpic1,link:"https://github.com/praveenkumar0031/filim.in",live:"https://praveenkumar0031.github.io/filim.in/home" },
{ id: 2, title: "Smart Classroom Management System ",type:" (SIH) Team ", tech: "Html,Css,Js,Flask,OpenCV,Pandas,Firebase",des:"Smart Classroom Management System: Contributed to the development of an AI-powered platform for classroom operations. My primary role was implementing facial recognition–based attendance automation and integrating analytics to generate real-time reports. The system also supports resource tracking, safety alerts, and interactive learning tools.",url:projectpic7,link:"https://github.com/praveenkumar0031/filim.in" },
{ id: 7, title: "Bank Management System",type:"Solo", tech: "Java ,MySql",des:"Bank Management System Java console-based project with jdbc integration (CRUD operations using SQLDrivers).bms also implements OOPS concepts and Data Structures to manage user and thier data's efficiently   ",url:projectpic2,link:"https://github.com/praveenkumar0031/bank_management_system/tree/v2"},
{ id: 3, title: "Chat app",type:"Solo", tech: "Java",des:"Chat app is a console based project which is to connect only two individuals like private rooms. In this project each user managed as client and server . It helps me to get some knowledge on IO Sockets",url:projectpic3,link:"https://github.com/praveenkumar0031/java-projects/tree/main/chatapp" },
{ id: 4, title: "Weather app",type:"Solo", tech: "React.js, Tailwind CSS, and OpenWeather API",des:"A responsive Real-time weather web application built with React.js, Tailwind CSS, and OpenWeather API, providing current weather and 5-day forecasts for any city.City-based search Displays temperature (°C), humidity, wind speed, and pressure Loading animations & error handling for invalid searches Fully responsive mobile-friendly design",url:projectpic4,link:"https://github.com/praveenkumar0031/weather-app",live:"https://weather-app-rho-wheat.vercel.app" },
{ id: 5, title: "Task-Manager",type:"Solo", tech: "React.js, Java (Springboot API), MySql",des:"Task-Manager: Built a task management web application using Java Spring Boot for the backend and React for the frontend. Implemented features such as task creation, updating, deletion, and status tracking with RESTful APIs. Designed a secure, scalable backend with database integration and deployed the system for real-time task management.",url:projectpic5,link:"https://github.com/praveenkumar0031/filim.in" },
{ id: 6, title: "Video calling app",type:"Solo", tech: "React.js,open-Api",des:"Video Call App: Developed a real-time communication platform using Java Spring Boot for the backend and WebRTC for peer-to-peer video/audio streaming. Implemented secure signaling, user authentication, and session management via REST APIs and WebSockets. Designed a scalable architecture to support smooth video calls, ensuring low latency and reliable connectivity.",url:projectpic6,link:"https://github.com/praveenkumar0031/filim.in" },
{ id: 8, title: "Coach Desk",type:"Solo", tech: "React-vite,Tailwindcss,Express,node,Firebase",des:"A full-stack Coach Management Admin Panel built with React (Vite) on the frontend and Node.js + Express + Firebase Realtime Database on the backend. The system allows administrators to manage coaches — including adding, updating, filtering, sorting, and deleting — with a responsive and elegant interface.",url:projectpic8,link:"https://github.com/praveenkumar0031/CoachDesk",live:"https://coach-desk.vercel.app" },

];
export function getProjectCount() {
    return projects.length;
}