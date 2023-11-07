import next from "../../public/next.png";
import react from "../../public/react.png";
import node from "../../public/node.png";
import exp from "../../public/expressjs.png";
import firebase from "../../public/firebase.png";
import mongo from "../../public/mongo.png";
import portfolio from "../../public/portfolio.jpeg";
import paridhi from "../../public/Paridhi.jpeg";
import halders from "../../public/halders.jpeg";
const Project = [
  {
    name: "Portfolio 2023",
    desc: "This is my portfolio that showcases my ideology, accomplishments and my achievements.",
    tech: [next, react],
    img: portfolio,
    github: "https://github.com/Shubhojit-Halder/portfolio",
    link: "https://github.com/Shubhojit-Halder/portfolio",
  },
  {
    name: "Halder's - Ecommerce",
    desc: "The website incorporates contemporary ecommerce functionalities, such as the ability to add products to a cart and sort by size, color, and price etc.",
    tech: [react, node, exp, mongo, firebase],
    img: halders,
    github: "https://github.com/Shubhojit-Halder/ClientNew",
    link: "https://halders.web.app/",
  },
  {
    name: "Paridhi 2023",
    desc: "Developed the official website for the techno-management fest hosted by MEGHNAD SAHA INSTITUTE OF TECHNOLOGY.",
    tech: [react, node, exp, mongo],
    img: paridhi,
    github:"https://github.com/MSIT-Megatronix/ParidhiWebsite2023",
    link:"http://msitparidhi.in/"
  },
  // {
  //   name: "Daakticket",
  //   desc: "A social media webapp in which me and my team tried to incorporate the best features of different social media. I've mostly worked on the frontend and incorporated backend apis with the ",
  //   tech: [react, node, exp, mongo],
  //   img: portfolio,
  //   github:"https://github.com/Shubhojit-Halder/SIH-FRONTEND-REACT-2022",
  //   link:""
  // },
];
export default Project;
