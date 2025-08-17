// Enter all your detials in this file
// Logo images
import logogradient from "./assets/logo.svg";
import logo from "./assets/logo2.svg";
// Profile Image
import profile from "./assets/profile.jpg";
// Tech stack images
import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
import js from "./assets/techstack/js.png";
import react from "./assets/techstack/react.png";
import redux from "./assets/techstack/redux.png";
import tailwind from "./assets/techstack/tailwind.png";
import bootstrap from "./assets/techstack/bootstrap.png";
import vscode from "./assets/techstack/vscode.png";
import github from "./assets/techstack/github.png";
import git from "./assets/techstack/git.png";
import npm from "./assets/techstack/npm.png";
import postman from "./assets/techstack/postman.png";
import java from "./assets/techstack/java.png";
import springboot from "./assets/techstack/springboot.png";
import mysql from "./assets/techstack/mysql.png";
import mongodb from "./assets/techstack/mongodb.png";
import chatgpt from "./assets/techstack/chatgpt.png";
import copilot from "./assets/techstack/copilot.png";
// Porject Images
import projectImage1 from "./assets/projects/project1.jpg";
import projectImage2 from "./assets/projects/project2.jpg";
import projectImage3 from "./assets/projects/project3.jpg";

// Logos
export const logos = {
  logogradient: logogradient,
  logo: logo,
};

// Enter your Personal Details here
export const personalDetails = {
  name: "Chinmaya Subudhi",
  tagline: "Where Full Stack meets AI innovation",
  img: profile,
  about: `Full-Stack Dev || React + Spring Boot ||
          IT Undergrad || Building real projects
          Learning, Creating, Growing 🚀.`,
};

// Enter your Social Media URLs here
export const socialMediaUrl = {
  linkdein: "https://linkedin.com/in/chinmaya-subudhi-0ab3222b4",
  github: "https://github.com/chinmayax13",
  instagram: "https://www.instagram.com/",
};

// Enter your Work Experience here
export const workDetails = [
  {
    Position: "Java Development",
    Company: `Cognifyz Technologies`,
    Location: "Remote",
    Type: "Internship",
    Duration: "june 2024 - aug 2024",
  },
  {
    Position: "Design and Analysis of Algorithm",
    Company: `NPTEL`,
    Location: "Remote",
    Type: "Internship",
    Duration: "aug 2024 - nov 2024",
  },
];

// Enter your Education Details here
export const eduDetails = [
  {
    Position: "Full Stack Java Development",
    Company: "YouTube, Google, Medium",
    Location: "Online",
    Type: "Full Time",
    Duration: "Dec 2024 - Present",
  },
  {
    Position: "BTech in Computer Science and Information Technology",
    Company: `Trident Academy of Technology`,
    Location: "Bhubaneswar",
    Type: "Full Time",
    Duration: "Dec 2022 - Present",
  },
];

// Tech Stack and Tools
export const techStackDetails = {
  html: html,
  css: css,
  js: js,
  react: react,
  redux: redux,
  tailwind: tailwind,
  bootstrap: bootstrap,
  vscode: vscode,
  postman: postman,
  npm: npm,
  git: git,
  github: github,
  java: java,
  springboot: springboot,
  mysql: mysql,
  mongodb: mongodb,
  chatgpt: chatgpt,
  copilot: copilot,
};

// Enter your Project Details here
export const projectDetails = [
  {
    title: "Hobby Connect",
    image: projectImage1,
    description: `Built a full-stack web application that bridges the gap between hobby enthusiasts and local businesses offering hobby-related services, courses, and products. Implemented secure authentication, location-based search, and responsive design for seamless user experience.`,
    techstack: "React, Springboot, MySql",
    githubLink: "https://github.com/chinmayax13/Hobby-Connect",
  },
  {
    title: "Library Management System",
    image: projectImage2,
    description: `A web-based application built using Java Servlets, JSP, JDBC, and MySQL, designed to manage library operations. It supports student and librarian login/registration, book management (add, view, issue), and student record handling. The project follows the DAO + Model architecture and runs on Apache Tomcat for deployment.`,
    techstack: "HTML/CSS, JSP, Java, MySql",
    githubLink: "https://github.com/chinmayax13/LibraryManagement",
  },
  {
    title: "College ERP System",
    image: projectImage3,
    description: `A comprehensive ERP system designed for college management, facilitating student enrollment, course management, and examination processes. The application features role-based access for students and faculty, ensuring secure and efficient operations.`,
    techstack: "HTML/CSS, React, Spring Boot, MySQL",
    githubLink: "https://github.com/chinmayax13",
  },
];

// Enter your Contact Details here
export const contactDetails = {
  email: "chinmaysubudhi55@gmail.com",
  phone: "+91 8260691809",
};
