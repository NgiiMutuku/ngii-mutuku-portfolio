
import {
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiMail,
  FiGrid,
  FiTable,
  FiFilter,
  FiBarChart2,
  FiPieChart,
  FiTarget,
  FiCheckCircle,
  FiTrendingUp,
  FiDatabase,
  FiCode,
  FiActivity,
  FiFileText,
} from "react-icons/fi";

import type { IconType } from "react-icons";
    

/**
 * Edit this file to personalize the template.
 * No other files need to change for basic content updates.
 */

export const site = {
  name: "Ngii Mutuku",
  role: "Data Analyst | Healthcare MEL | Data Visualisation",
  bio: "I bring experience in healthcare Monitoring, Evaluation and Learning (MEL), programme reporting, data quality and data analysis. My background includes supporting HIV, TB and malaria programmes, as well as analysing participant data and programme outcomes in mentorship initiatives. I am building on this experience through data analytics, with an interest in transforming data into meaningful insights that support informed decision-making.",
  email: "",
  location: "Nairobi, Kenya",
  cvUrl: "/cv.pdf",
  // Replace with your Formspree endpoint: https://formspree.io
  formspreeEndpoint: "https://formspree.io/f/your-id",
};

export const about = {
  paragraphs: [
    "My professional journey combines a background in Finance and Banking with experience in Monitoring, Evaluation and Learning (MEL), programme reporting, data quality and digital operations. I have supported healthcare programmes focused on HIV, tuberculosis and malaria, where accurate data and reporting played an important role in programme monitoring and decision-making.",
    "I have also worked with participant data, mentorship initiatives and digital operations. I am now building on this experience through data analytics, developing practical skills in Excel, SQL, Python and data visualisation. I enjoy exploring data, identifying patterns and turning information into insights that can support better decisions.",
  ],
};

export type Project = {
  title: string;
  description: string;
  tags: string[];
  image: string;
  demo: string;
  github: string;
};



export const projects: Project[] = [
  {
    title: "Alliance Integrated Harm Reduction Project – Excel Dashboard Development",
    description:
      "Developed an Excel-based programme dashboard to organise and visualise project data, making key programme indicators easier to interpret and supporting informed decision-making. Used Pivot Tables and charts to summarise programme information and present findings clearly.",
    tags: [
      "Microsoft Excel",
      "Pivot Tables",
      "Data Visualisation",
      "Dashboard Reporting",
    ],
    image: "/placeholder.svg",
    demo: "",
    github: "",
  },
  {
    title: "Ajira Mentorship Initiative – Participant Data Analysis",
    description:
      "Worked with participant data from a mentorship initiative, analysing information on registration, training-centre participation, awareness channels and programme outcomes. Used data summaries and visualisations to explore participation patterns and present findings.",
    tags: [
      "Data Analysis",
      "Excel",
      "Data Visualisation",
      "Programme Monitoring",
    ],
    image: "/placeholder.svg",
    demo: "",
    github: "",
  },
];

export type Skill = {
  name: string;
  Icon: IconType;
  status: "experienced" | "learning";
};

export const skills: Skill[] = [
  { name: "Microsoft Excel", Icon: FiTable, status: "experienced" },
  { name: "Google Sheets", Icon: FiGrid, status: "experienced" },
  { name: "Data Cleaning", Icon: FiFilter, status: "experienced" },
  { name: "Data Analysis", Icon: FiActivity, status: "experienced" },
  { name: "Dashboards & Reporting", Icon: FiBarChart2, status: "experienced" },
  { name: "Data Visualisation", Icon: FiPieChart, status: "experienced" },
  { name: "Monitoring & Evaluation", Icon: FiTarget, status: "experienced" },
  { name: "Data Quality Assurance", Icon: FiCheckCircle, status: "experienced" },
  { name: "Indicator Tracking", Icon: FiTrendingUp, status: "experienced" },
  { name: "Google Analytics", Icon: FiActivity, status: "experienced" },
  { name: "Meta Business Suite", Icon: FiGrid, status: "experienced" },
  { name: "SQL", Icon: FiDatabase, status: "learning" },
  { name: "Python", Icon: FiCode, status: "learning" },
  { name: "Power BI", Icon: FiBarChart2, status: "learning" },
  { name: "Tableau", Icon: FiPieChart, status: "learning" },
];


export const socials = [
  { name: "GitHub", href: "https://github.com/NgiiMutuku", Icon: FiGithub },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/ngiimutuku/", Icon: FiLinkedin },
];


export const nav = [
  { label: "Work", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];
