import projectpic1 from '../projectpics/filimin.jpeg'
import projectpic2 from '../projectpics/bankmanagement.jpeg'
import projectpic3 from '../projectpics/chat.jpeg'
import projectpic4 from '../projectpics/weather.jpeg'
import projectpic5 from '../projectpics/todos.jpeg'
import projectpic6 from '../projectpics/videocall.jpeg'




export const projects=[
{ id: 1, title: "Filimin", tech: "Html,Css,Js,Firebase(Authentication)",des:" Financial Literacy Management System (Filimin) is a gamified webapp to make users to bring up the idea of Budgetting, Saving, Debt Management, Investing, Taxes and Financial Literacy. Financial Literacy is a Vital knowledge to run our life economically healthy. Our game enlightens users about finance and its importance.",url:projectpic1,link:"https://github.com/praveenkumar0031/filim.in",live:"https://praveenkumar0031.github.io/filim.in/home" },
{ id: 2, title: "Bank Management System", tech: "Java ,MySql",des:"Bank Management System Java console-based project with jdbc integration (CRUD operations using SQLDrivers).bms also implements OOPS concepts and Data Structures to manage user and thier data's efficiently   ",url:projectpic2,link:"https://github.com/praveenkumar0031/bank_management_system/tree/v2"},
{ id: 3, title: "Chat app", tech: "Java",des:"Chat app is a console based project which is to connect only two individuals like private rooms. In this project each user managed as client and server . It helps me to get some knowledge on IO Sockets",url:projectpic3,link:"https://github.com/praveenkumar0031/java-projects/tree/main/chatapp" },
{ id: 4, title: "Weather app", tech: "React.js, Tailwind CSS, and OpenWeather API",des:"A responsive Real-time weather web application built with React.js, Tailwind CSS, and OpenWeather API, providing current weather and 5-day forecasts for any city.City-based search Displays temperature (°C), humidity, wind speed, and pressure Loading animations & error handling for invalid searches Fully responsive mobile-friendly design",url:projectpic4,link:"https://github.com/praveenkumar0031/weather-app",live:"https://weather-app-rho-wheat.vercel.app" },
{ id: 5, title: "Task-Manager", tech: "React.js, Java (Springboot API), MySql",des:"",url:projectpic5,link:"https://github.com/praveenkumar0031/filim.in" },
{ id: 6, title: "Video calling app", tech: "React.js,open-Api",des:"maskdiuan",url:projectpic6,link:"https://github.com/praveenkumar0031/filim.in" },
{ id: 7, title: "Sih ", tech: "React.js,open-Api",des:"maskdiuan",url:projectpic6,link:"https://github.com/praveenkumar0031/filim.in" },
];
export function getProjectCount() {
    return projects.length;
}