import pic1 from './pics/filimin.jpeg'
import pic2 from './pics/bankmanagement.jpeg'
import pic3 from './pics/chat.jpeg'
import pic4 from './pics/weather.jpeg'
import pic5 from './pics/todos.jpeg'
import pic6 from './pics/videocall.jpeg'
export const projects=[
     { id: 1, title: "Filimin", tech: "Html,Css,Js,Firebase",des:"kahyb",url:pic1,link:"https://github.com/praveenkumar0031/filim.in" },
  { id: 2, title: "Blog Platform", tech: "Gatsby, Markdown",des:"kahyb",url:pic2},
{ id: 3, title: "Platform", tech: "java, Markdown",des:"maskdiuan",url:pic3,link:"https://github.com/praveenkumar0031/filim.in" },
{ id: 4, title: "Weather app", tech: "React.js,open-Api",des:"maskdiuan",url:pic4,link:"https://github.com/praveenkumar0031/filim.in" },
];
export function getProjectCount() {
  return projects.length;
}
export const Navlinks = [
    {
        id: 'about',
        label: 'About',
    },
    {
        id: 'projects',
        label: 'Projects',
        
    },
    {
        id: 'skills',
        label: 'Skills',
    },
    {
        id: 'resume',
        label: 'Resume',
    },
    {
        id: 'contact',
        label: 'Contact',
    },
]; 