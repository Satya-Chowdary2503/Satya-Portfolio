// Importing all necessary assets from the 'assets' folder
import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  google,
  aws,
  blackbuckslogo as blackbucks, // aliasing for consistency
  codegnan,
  apssdc,
  diet,
  aanm,
  nalanda,
  code,
} from "../assets";

// Navigation links for the menu
export const navLinks = [
  { id: "about", title: "About" },
  { id: "work", title: "Work" },
  { id: "contact", title: "Contact" },
];

// Services list
const services = [
  { title: "Web Developer", icon: web },
  { title: "React Native Developer", icon: mobile },
  { title: "Backend Developer", icon: backend },
  { title: "Content Creator", icon: creator },
];

// Technologies used
const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "TypeScript", icon: typescript },
  { name: "React JS", icon: reactjs },
  { name: "Redux Toolkit", icon: redux },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "MongoDB", icon: mongodb },
  { name: "Three JS", icon: threejs },
  { name: "git", icon: git },
  { name: "figma", icon: figma },
  { name: "docker", icon: docker },
];

// Experience data
const experiences = [
  {
    title: "Google AI-ML Virtual Internship",
    company_name: "Google",
    date: "Jan 2024 - Mar 2024",
    icon: google,
    iconBg: "#FFFFFF",
    points: [
      "Worked on AI-ML projects",
      "Gained hands-on experience in deep learning models",
    ],
  },
  {
    title: "AI-ML Virtual Internship",
    company_name: "AWS Academy",
    date: "Sep 2023 - Nov 2023",
    icon: aws,
    iconBg: "#FFFFFF",
    points: [
      "Developed AI models using AWS cloud services",
      "Worked on machine learning foundations",
    ],
  },
  {
    title: "Deep Learning Model for Cats & Dogs Classification",
    company_name: "Blackbucks-IIDT",
    date: "Jan 2024 - Apr 2024",
    icon: blackbucks,
    iconBg: "#FFFFFF",
    points: [
      "Built a CNN model for image classification",
      "Used Python, TensorFlow, and Keras",
    ],
  },
  {
    title: "Used Car Price Prediction",
    company_name: "CodeGnan IT Solutions",
    date: "May 2023 - Jul 2023",
    icon: codegnan,
    iconBg: "#FFFFFF",
    points: [
      "Designed predictive analytics pipelines",
      "Utilized machine learning techniques",
    ],
  },
  {
    title: "Hotel Website Development",
    company_name: "APSSDC",
    date: "Jul 2020 - Jan 2021",
    icon: apssdc,
    iconBg: "#FFFFFF",
    points: [
      "Created a dynamic website using Django",
      "Deployed on AWS for scalability",
    ],
  },
];

// Testimonials section
const testimonials = [
  {
    testimonial:
      "Satya created a stunning website that truly reflects our brand. I was amazed by the attention to detail and creativity.",
    name: "Dinesh",
    designation: "Software Engineer",
    company: "Accenture",
    image: "https://randomuser.me/api/portraits/men/10.jpg",
  },
  {
    testimonial:
      "Satya genuinely cares about his clients' success. Working with him was a smooth and rewarding experience.",
    name: "Ravi",
    designation: "Full Stack Developer",
    company: "Infosys",
    image: "https://randomuser.me/api/portraits/men/11.jpg",
  },
  {
    testimonial:
      "Thanks to Satya’s optimization skills, our website's performance skyrocketed. He’s a true professional!",
    name: "Jagadeesh",
    designation: "Cloud Architect",
    company: "Wipro",
    image: "https://randomuser.me/api/portraits/men/12.jpg",
  },
  {
    testimonial:
      "Satya’s work exceeded our expectations. His knowledge in modern web technologies is top-notch.",
    name: "Murtuza",
    designation: "AI/ML Engineer",
    company: "HCL Technologies",
    image: "https://randomuser.me/api/portraits/men/13.jpg",
  },
];

// Education background data
const educations = [
  {
    degree: "Bachelor of Computer Science",
    name: "Dhanekula Institute of Engineering",
    year: "2021-2024",
    marks: "7.75/10 CGPA",
    image: diet,
  },
  {
    degree: "Diploma in Computer Science",
    name: "A.A.N.M & V.V.R.S.R Polytechnic",
    year: "2018-2021",
    marks: "8.4/10 CGPA",
    image: aanm,
  },
  {
    degree: "10th Grade CBSE",
    name: "Nalanda Vidya Niketan",
    year: "2017-2018",
    marks: "55%",
    image: nalanda,
  },
];

// Projects Information
const projectsInfo = [
  {
    name: "Auto Caption Generation using Python",
    description:
      "NLP-based text summarization and image captioning using VGG16 and LSTM, leveraging deep learning techniques to generate automatic captions for images and summarize textual content.",
    organization: "BEL (Dec 2024 - May 2024)",
    image: code,
    source_code_link: "https://github.com/",
    tags: [
      { name: "Python", color: "text-blue-500" },
      { name: "TensorFlow", color: "text-orange-500" },
      { name: "Deep Learning", color: "text-red-500" },
    ],
  },
  {
    name: "Deep Learning Model for Classifying Cats and Dogs using Python",
    description:
      "Built a CNN model to classify images of cats and dogs using Python, TensorFlow, and Keras.",
    organization: "Blackbucks-IIDT (Jan 2024 - Apr 2024)",
    image: code,
    source_code_link: "https://github.com/",
    tags: [
      { name: "Python", color: "text-blue-500" },
      { name: "TensorFlow", color: "text-orange-500" },
      { name: "Keras", color: "text-pink-500" },
    ],
  },
  {
    name: "Used Car Price Prediction using Machine Learning",
    description:
      "Designed machine learning pipelines for predictive analytics, analyzing historical vehicle data to predict resale values.",
    organization: "CodeGnan IT Solutions (May 2023 - Jul 2023)",
    image: code,
    source_code_link: "https://github.com/",
    tags: [
      { name: "Machine Learning", color: "text-green-500" },
      { name: "Python", color: "text-blue-500" },
      { name: "Pandas", color: "text-yellow-500" },
    ],
  },
  {
    name: "Hotel Website Development using Django",
    description:
      "Created a dynamic, responsive website using Django and deployed it on AWS.",
    organization: "APSSDC (Jul 2020 - Jan 2021)",
    image: code,
    source_code_link: "https://github.com",
    tags: [
      { name: "Django", color: "text-green-500" },
      { name: "AWS", color: "text-purple-500" },
      { name: "Web Development", color: "text-indigo-500" },
    ],
  },
];

// Export all constants
export {
  services,
  technologies,
  experiences,
  testimonials,
  educations,
  projectsInfo,
};
