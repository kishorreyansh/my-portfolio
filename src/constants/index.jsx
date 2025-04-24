import { FaGithub, FaLinkedin } from "react-icons/fa6";

import projectImage1 from "../assets/project1.jpeg";
import projectImage2 from "../assets/project2.jpeg";
import projectImage3 from "../assets/project3.jpeg";
import projectImage4 from "../assets/project4.jpeg";
import projectImage5 from "../assets/project5.jpeg";
import projectImage6 from "../assets/project6.jpeg";

import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { FaAws } from "react-icons/fa6";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiSencha } from "react-icons/si";
import { SiSpringboot } from "react-icons/si";
import { SiSpring } from "react-icons/si";
import { FaJava } from "react-icons/fa";
//import { RiAngularjsFill } from "react-icons/ri";

import meritLetter from "../documents/kishorkumar_recommendletter.pdf";
import opentextAward from "../documents/opentext_award.pdf";
import dbsAward from "../documents/kishor_dbs_award.pdf";

export const NAVIGATION_LINKS = [
  { label: "Bio", href: "#bio" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Work Experience", href: "#work" },
  { label: "Education", href: "#education" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export const HERO = {
  name: "KISHOR KUMAR ANDEKAR",
  greet: "Hello there! 👋🏻",
  description:
    "I am a passionate frontend developer with a knack for creating beautiful and functional user interfaces. I like transforming ideas into engaging web experiences for over a half decade.",
};

export const PROJECTS = [
  {
    id: 1,
    name: "Professional Portfolio",
    description:
      "A personal portfolio website built with React and Tailwind CSS to showcase my skills, projects, and contact information.",
    image: projectImage1,
    githubLink:
      "https://github.com/kishorreyansh/KISHOR-PROFESSIONAL-PORTFOLIO",
  },
  {
    id: 2,
    name: "REACT-TEXTUTILS",
    description:
      "Text Utils based on Text which ever you want to do. Using React Create App",
    image: projectImage2,
    githubLink: "https://github.com/kishorreyansh/REACT-TEXTUTILS",
  },
  {
    id: 3,
    name: "IMDB-NEO4J-AURA-DB-PROGRAMMING",
    description:
      "Using Python connecting to Neo4j DB and fetching,inserting,updating,deleting records based on POSTMAN.",
    image: projectImage3,
    githubLink:
      "https://github.com/kishorreyansh/IMDB-NEO4J-AURA-DB-PROGRAMMING",
  },
  {
    id: 4,
    name: "Taxi Trip Duration Analysis Using NNDL",
    description:
      "Develop a deep learning model to accurately predict taxi trip durations in urban settings.Incorporate advanced techniques like Dropout, BatchNormalization, and the Adam Optimizer to improve model performance and generalization.",
    image: projectImage4,
    githubLink: "https://github.com/kishorreyansh/NNDL_Final_Project",
  },
  {
    id: 5,
    name: "IPL Ticketing System Using React",
    description:
      "The IPL Ticket Master database aims to provide a comprehensive and user-friendly platform for managing the ticket booking process for (IPL) cricket matches. It will streamline operations from match scheduling to user authentication and payments.",
    image: projectImage5,
    githubLink: "https://github.com/kishorreyansh/ADBMS-IPL-TM-2023",
  },
  {
    id: 6,
    name: "PRODUCT SPRING MVC APP",
    description: "A Product App developed in Spring MVC using ORM",
    image: projectImage6,
    githubLink: "https://github.com/kishorreyansh/SPRING-MVC-ORM-PRODUCT-APP",
  },
];

export const BIO = [
  "Specialize in designing scalable fintech/telecom systems for Fortune 500 clients (Verizon, OpenText, DBS, Polaris, Citi Bank) using Java/Spring Boot microservices, React UIs, and AWS cloud infrastructure. Delivered mission-critical platforms like Citi’s Global Pricing Server (50k+ daily transactions) and Verizon’s Automated Customer Support.",
  "End-to-End Technologist: Agile leader managing CI/CD pipelines (Jenkins/Docker), security frameworks (OAuth2.0), and cloud deployments (EC2/S3). Recognized with Verizon Spotlight and OpenText Delivery Excellence awards for technical execution.",
  "MS in Computer Science (3.8 GPA). Academic rigor with 10+ years of hands-on system architecture experience.",
];

export const SKILLS = [
  {
    icon: "./svgs/extjs.png",
    name: "Ext JS",
    experience: "6+ years",
  },
  {
    icon: "./svgs/angular.jpeg",
    name: "Angular",
    experience: "4+ years",
  },
  {
    icon: "./svgs/react.svg",
    name: "React",
    experience: "2+ years",
  },
  {
    icon: "./svgs/java.svg",
    name: "Java",
    experience: "2+ years",
  },
  {
    icon: "./svgs/spring.svg",
    name: "Spring",
    experience: "2+ years",
  },
  {
    icon: "./svgs/spring-boot-1.svg",
    name: "Spring Boot",
    experience: "2+ years",
  },
  {
    icon: "./svgs/sql.jpeg",
    name: "SQL",
    experience: "4+ years",
  },
  {
    icon: "./svgs/mongodb-icon.svg",
    name: "MongoDB",
    experience: "1.5+ years",
  },
  {
    icon: "./svgs/postgresql.svg",
    name: "Postgre SQL",
    experience: "1+ year",
  },
  {
    icon: "./svgs/aws_dark.svg",
    name: "AWS",
    experience: "3+ years",
  },
  {
    icon: "./svgs/github.png",
    name: "Github",
    experience: "1+ year",
  },
  /*{
    icon: "./svgs/redux.svg",
    name: "Redux",
    experience: "1+ year",
  },
  {
    icon: "./svgs/redux.svg",
    name: "Redux Toolkit",
    experience: "1+ year",
  },
  {
    icon: <RiAngularjsFill className="text-4xl text-red-500 lg:text-5xl" />,
    name: "Angular",
    experience: "2+ years",
  },
  {
    icon: "./svgs/react-router-dark.svg",
    name: "React Router",
    experience: "1+ year",
  },*/
  /*
  {
    icon: <TbBrandNextjs className="text-4xl text-white lg:text-5xl" />,
    name: "Next.js",
    experience: "1+ year",
  },
  {
    icon: <DiRedis className="text-4xl text-red-600 lg:text-5xl" />,
    name: "Redis",
    experience: "1+ year",
  },
  {
    icon: <FaNodeJs className="text-4xl text-green-600 lg:text-5xl" />,
    name: "Node.js",
    experience: "2+ years",
  },*/
];

export const EXPERIENCES = [
  {
    title: "Senior Consultant",
    company: "OpenText Technologies India Private. Ltd",
    client: "Client - DBS",
    duration: "May 2019 - December 2022",
    location: "Hyderabad, India",
    pdf: dbsAward,
    logo: "./companylogo/dbs.png",
    responsibilities: [
      "Developed core banking features for DBS digital platform using React & Spring Security",
      "Optimized database queries improving transaction processing by 40%",
      "Designed real-time analytics dashboard with WebSocket integration",
      "Mentored 3 junior developers in Agile practices and code quality standards",
      "Awarded DBS Wall of Fame Award for technical innovation",
    ],
    techStack: [
      "Teamsite",
      "React",
      "Spring Framework",
      "Spring Boot",
      "Oracle DB",
      "AWS",
      "Jenkins",
    ],
  },
  {
    title: "Senior Consultant",
    company: "OpenText Technologies India Private. Ltd",
    duration: "January 2018 - December 2022",
    location: "Hyderabad, India",
    pdf: opentextAward,
    logo: "./companylogo/opentext.png",
    responsibilities: [
      "Designed and implemented Data Capture Records (DCRs) for structured content management.",
      "Developed FreeMarker templates for dynamic HTML generation and preview functionality.",
      "Built an automation utility to convert Excel data into XML for seamless content integration.",
      "Worked closely with teams, actively contributing to OpenText TeamSite expertise and implementation.",
      "Received Delivery Excellence Award for critical system migration",
    ],
    techStack: [
      "Teamsite",
      "React",
      "Spring Framework",
      "Oracle DB",
      "Jenkins",
      "JBoss",
    ],
  },
  {
    title: "System Development Analyst",
    company: "Verizon Data Services India Pvt. Ltd",
    client: "",
    duration: "December 2014 - December 2017",
    location: "Hyderabad, India",
    pdf: "",
    logo: "./companylogo/verizon.png",
    responsibilities: [
      "Built automated customer support system using Ext JS and Java EE stack",
      "Implemented IoT data processing pipeline handling 1M+ daily events",
      "Reduced server costs by 25% through cloud optimization strategies",
      "Awarded Verizon Spotlight Award for technical innovation",
    ],
    techStack: [
      "Ext JS",
      "Java EE",
      "Jenkins",
      "IE Edge",
      "IoT",
      "Volte",
      "What If",
      "TAP",
    ],
  },
  {
    title: "Associate Consultant",
    company: "Polaris Consulting and Services Limited - CitiBank",
    client: "Client - Citi Bank",
    duration: "November 2011 - December 2014",
    location: "Hyderabad, India",
    pdf: "",
    responsibilities: [
      "Specialized in Ext JS front-end component development, creating responsive UI elements with HTML5, CSS3, and JavaScript.",
      "Designed and implemented complex applications using Ext JS, ensuring seamless integration of components for CitiBank.",
      "Optimized front-end performance with modern JavaScript features (ES6/ES7) and ensured fast loading times.",
      "Collaborated with cross-functional teams to deliver high-quality, user-friendly web applications",
    ],
    techStack: ["Ext JS", "Java EE", "Servlets", "JSP"],
  },
];

export const CERTIFICATIONS = [
  {
    title: "AWS Certified Developer – Associate",
    company: "AWS",
  },
  {
    title: "AWS Certified Cloud Practitioner",
    company: "AWS",
  },
  {
    title: "Oracle Certified Professional, Java SE 6 Programmer",
    company: "Oracle",
  },
];

export const EDUCATION = [
  {
    degree: "Master of Science in Computer Science",
    institution: "University of Central Missouri",
    duration: "May 2023 - December 2024",
    gpa: "3.8/4",
    pdf: meritLetter,
    description:
      "Graduated with a Master of Science in Computer Science, concentrating on software engineering and cloud computing. This program has deepened my expertise in key technologies or skills, such as Advanced Algorithms, Advanced Database, Cloud platforms, Neural Networks, or Prog Found and AI , enabling me to tackle complex problems and drive innovative solutions. Graduated with a high GPA. Received Merit Letter from Professor.",
  },
  {
    degree: "Bachelor of Science in Information Technology",
    institution: "Global Institute of Engineering and Technology, India",
    duration: "",
    gpa: "3.68/4 or 74%",
    pdf: "",
    description:
      "Received Topper of the College Award. Focused on web development, programming languages, and database management. Actively involved in coding clubs and hackathons, where I developed several web applications using HTML, CSS, JavaScript, and PHP. Completed a senior project on developing an e-commerce platform. Graduated with a high GPA.",
  },
];

export const SOCIAL_MEDIA_LINKS = [
  /*{
    href: "https://facebook.com/",
    icon: <FaFacebook fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://discord.com/",
    icon: <FaDiscord fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.instagram.com/",
    icon: <FaInstagram fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/",
    icon: <FaXTwitter fontSize={25} className="hover:opacity-80" />,
  },*/
  {
    href: "https://github.com/kishorreyansh",
    icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/in/kishor-kumar-andekar/",
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
  },
];
