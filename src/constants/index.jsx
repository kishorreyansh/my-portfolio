import {
  FaXTwitter,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaDiscord,
  FaInstagram,
} from "react-icons/fa6";

import projectImage1 from "../assets/project1.jpeg";
import projectImage2 from "../assets/project2.jpeg";
import projectImage3 from "../assets/project3.jpeg";
import projectImage4 from "../assets/project4.jpeg";
import projectImage5 from "../assets/project5.jpeg";
import projectImage6 from "../assets/project6.jpeg";

import { RiReactjsLine } from "react-icons/ri";
import { RiJavaLine } from "react-icons/ri";
import { RiAngularjsFill } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { FaAws } from "react-icons/fa6";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiSencha } from "react-icons/si";
import { SiSpringboot } from "react-icons/si";
import { SiSpring } from "react-icons/si";
/*import { TbBrandNextjs } from "react-icons/tb";
import { DiRedis } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";*/

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

/*"Kishor Kumar Andekar studied Information Technology at the JNTUH,from which he graduated in 2024. Following his education, he honed his craft and expertise over the course of 7 years at Tech Innovations Inc., where he immersed himself in the world of frontend development.",*/
export const BIO = [
  "Specialize in designing scalable fintech/telecom systems for Fortune 500 clients (Citi, DBS, Verizon) using Java/Spring Boot microservices, React UIs, and AWS cloud infrastructure. Delivered mission-critical platforms like Citi’s Global Pricing Server (50k+ daily transactions) and Verizon’s Automated Customer Support.",
  "End-to-End Technologist: Agile leader managing CI/CD pipelines (Jenkins/Docker), security frameworks (OAuth2.0), and cloud deployments (EC2/S3). Recognized with Verizon Spotlight and OpenText Delivery Excellence awards for technical execution.",
  "MS in Computer Science (3.8 GPA). Academic rigor with 10+ years of hands-on system architecture experience.",
];

export const SKILLS = [
  {
    icon: <RiReactjsLine className="text-4xl text-cyan-400 lg:text-5xl" />,
    name: "React",
    experience: "2+ years",
  },
  {
    icon: <RiJavaLine className="text-4xl text-blue-400 lg:text-5xl" />,
    name: "Java",
    experience: "2+ years",
  },
  {
    icon: <SiSpring className="text-4xl text-green-400 lg:text-5xl" />,
    name: "Spring",
    experience: "2+ years",
  },
  {
    icon: <SiSpringboot className="text-4xl text-green-500 lg:text-5xl" />,
    name: "Spring Boot",
    experience: "2+ years",
  },
  {
    icon: <FaAws className="text-4xl text-white-500 lg:text-5xl" />,
    name: "AWS",
    experience: "3+ years",
  },
  {
    icon: <SiSencha className="text-4xl text-green-500 lg:text-5xl" />,
    name: "Ext JS",
    experience: "6+ years",
  },
  {
    icon: <RiAngularjsFill className="text-4xl text-red-500 lg:text-5xl" />,
    name: "Angular",
    experience: "2+ years",
  },
  {
    icon: <SiMongodb className="text-4xl text-green-600 lg:text-5xl" />,
    name: "MongoDB",
    experience: "1.5+ years",
  },
  {
    icon: <BiLogoPostgresql className="text-4xl text-sky-700 lg:text-5xl" />,
    name: "PostgreSQL",
    experience: "1+ year",
  },
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
    title: "Senior Full-Stack Developer",
    company: "Citi Bank · Polaris Consulting",
    duration: "Aug 2024 - December 2024",
    location: "Kansas, United States",
    responsibilities: [
      "Led development of Citi's Global Pricing Server handling 50k+ daily transactions",
      "Architected microservices using Spring Boot & React with AWS cloud deployment",
      "Implemented CI/CD pipelines reducing deployment time by 30%",
      "Mentored 5 junior developers in Agile practices and code quality standards",
    ],
    techStack: [
      "Java",
      "Spring Framework",
      "Spring Boot",
      "React",
      "AWS",
      "Kafka",
      "Docker",
    ],
  },
  {
    title: "Senior Consultant",
    company: "Development Bank of Singapore · OpenText",
    duration: "May 2019 - Dec 2022",
    location: "Hyderabad, India",
    responsibilities: [
      "Developed core banking features for DBS digital platform using Angular & Spring Security",
      "Optimized database queries improving transaction processing by 40%",
      "Designed real-time analytics dashboard with WebSocket integration",
      "Awarded DBS Wall of Fame Award for technical innovation",
    ],
    techStack: [
      "Teamsite",
      "Angular",
      "Spring MVC",
      "Oracle DB",
      "WebSocket",
      "Jenkins",
    ],
  },
  {
    title: "Senior Consultant",
    company: "•	OpenText Technologies India Private. Ltd",
    duration: "January 2018 - Dec 2022",
    location: "Hyderabad, India",
    responsibilities: [
      "Developed core banking features for DBS digital platform using Angular & Spring Security",
      "Optimized database queries improving transaction processing by 40%",
      "Designed real-time analytics dashboard with WebSocket integration",
      "Received Delivery Excellence Award for critical system migration",
    ],
    techStack: [
      "Teamsite",
      "Angular",
      "Spring MVC",
      "Oracle DB",
      "WebSocket",
      "Jenkins",
    ],
  },
  {
    title: "System Development Analyst",
    company: "Verizon Data Services",
    duration: "Dec 2014 - Dec 2017",
    location: "Hyderabad, India",
    responsibilities: [
      "Built automated customer support system using Java EE stack",
      "Implemented IoT data processing pipeline handling 1M+ daily events",
      "Reduced server costs by 25% through cloud optimization strategies",
      "Awarded Verizon Spotlight Award for technical innovation",
    ],
    techStack: [
      "Ext JS",
      "Java EE",
      "IE Edge",
      "IoT",
      "Volte",
      "What If",
      "TAP",
    ],
  },
  {
    title: "Associate Consultant",
    company: "Polaris Consulting and Services Limited ",
    duration: "Nov 2013 - Dec 2014",
    location: "Hyderabad, India",
    responsibilities: [
      "Specialized in Ext JS front-end component development, creating responsive UI elements with HTML5, CSS3, and JavaScript.",
      "Designed and implemented complex applications using Ext JS, ensuring seamless integration of components.",
      "Optimized front-end performance with modern JavaScript features (ES6/ES7) and ensured fast loading times.",
      "Collaborated with cross-functional teams to deliver high-quality, user-friendly web applications",
    ],
    techStack: ["Java EE", "Ext JS"],
  },
];

export const EXPERIENCES1 = [
  {
    title: "Frontend Developer",
    company: "DBS",
    duration: "May 2019 - December 2022",
    description:
      "As the Senior Frontend Developer, I spearheaded the development of advanced web applications using cutting-edge technologies like React, Redux, and TypeScript. I worked closely with cross-functional teams, including designers, product managers, and backend developers, to deliver seamless and high-performance user experiences.",
  },
  {
    title: "Frontend Engineer",
    company: "OpenText",
    duration: "January 2018 - December 2022",
    description:
      "At Digital Creations, I focused on building highly interactive and responsive web interfaces using HTML, CSS, JavaScript, and modern libraries like React. I collaborated closely with UX/UI designers to implement design changes that enhanced user engagement and satisfaction. My role involved optimizing website performance, ensuring cross-browser compatibility, and implementing SEO best practices. ",
  },
  {
    title: "Analyst",
    company: "Verizon",
    duration: "December 2014 - December 2017",
    description:
      "In my role as a Junior Web Developer, I assisted in the development and maintenance of various web applications. I gained hands-on experience in utilizing HTML, CSS, and JavaScript, Ext JS to create user-friendly interfaces. I actively participated in team meetings, contributed to project planning, and collaborated with senior developers to implement new features.",
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
    description:
      "Pursuing a Master of Science in Computer Science with a focus on software engineering, data science, cloud computing, etc. This program has deepened my expertise in key technologies or skills, such as Advanced Algorithms, Advanced Database, cloud platforms, Neural Networks, or Prog Found and AI , enabling me to tackle complex problems and drive innovative solutions. Graduated with a high GPA. Received Merit Letter from Professor.",
  },
  {
    degree: "Bachelor of Science in Information Technology",
    institution: "JNTU Hyderabad, India",
    duration: "September 2012 - May 2016",
    gpa: "3.68/4 or 74%",
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
