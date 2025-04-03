// Importing all necessary assets from the 'assets' folder
import { 
    mobile, backend, creator, web, javascript, typescript, html, css, reactjs, redux, tailwind, 
    mongodb, git, figma, docker, meta, starbucks, tesla, shopify, carrent, jobit, tripguide, 
    threejs  } from "../assets";
  
  // Navigation links for the menu
  export const navLinks = [
    { id: "about", title: "About" },
    { id: "work", title: "Work" },
    { id: "contact", title: "Contact" },
  ];
  
  // Services list with different titles and their corresponding icons
  const services = [
    { title: "Web Developer", icon: web },
    { title: "React Native Developer", icon: mobile },
    { title: "Backend Developer", icon: backend },
    { title: "Content Creator", icon: creator },
    
    // Video Editor: Using aftereffects as the icon for video editing service
  //  { title: "Video Editor", icon: aftereffects },  // Using aftereffects for video editing
  
    // You can replace aftereffects with other options like Photoshop or Premiere Pro if needed
    // { title: "Video Editor", icon: premierepro },  // Using Premiere Pro instead of After Effects
    // { title: "Video Editor", icon: photoshop },  // Using Photoshop instead of After Effects
  ];
  
  // Technologies used with corresponding icons
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
    
    // After Effects: Used for video editing and motion graphics
   // { name: "After Effects", icon: aftereffects },  // After Effects for motion graphics and video editing
    
    // Photoshop: Used for image editing and graphics
   // { name: "Photoshop", icon: photoshop },  // Photoshop for image editing
    
    // Premiere Pro: Used for video editing and content creation
   // { name: "Premiere Pro", icon: premierepro },  // Premiere Pro for video editing
  ];
  
  // Placeholder for experience data (can be populated later)
  const experiences = [
    {
      title: "Google AI-ML Virtual Internship",
      company_name: "Google",
      date: "Jan 2024 - Mar 2024",
      icon: '/src/assets/google.svg', // Replace with actual image path
      iconBg: "#FFFFFF",
      points: ["Worked on AI-ML projects", "Gained hands-on experience in deep learning models"],
    },
    {
      title: "AI-ML Virtual Internship",
      company_name: "AWS Academy",
      date: "Sep 2023 - Nov 2023",
      icon: '/src/assets/aws.svg',
      iconBg: "#FFFFFF",
      points: ["Developed AI models using AWS cloud services", "Worked on machine learning foundations"],
    },
    {
      title: "Deep Learning Model for Cats & Dogs Classification",
      company_name: "Blackbucks-IIDT",
      date: "Jan 2024 - Apr 2024",
      icon: '/src/assets/blackbuckslogo1.png',
      iconBg: "#FFFFFF",
      points: ["Built a CNN model for image classification", "Used Python, TensorFlow, and Keras"],
    },
    {
      title: "Used Car Price Prediction",
      company_name: "CodeGnan IT Solutions",
      date: "May 2023 - Jul 2023",
      icon: '/src/assets/codegnan.png',
      iconBg: "#FFFFFf",
      points: ["Designed predictive analytics pipelines", "Utilized machine learning techniques"],
    },
    {
      title: "Hotel Website Development",
      company_name: "APSSDC",
      date: "Jul 2020 - Jan 2021",
      icon: '/src/assets/apssdc.png',
      iconBg: "#FFFFFF",
      points: ["Created a dynamic website using Django", "Deployed on AWS for scalability"],
    },
  ];
  
  // Testimonials section with quotes from users or clients
    const testimonials = [
    {
      testimonial: "I thought it was impossible to make a website as beautiful as our product, but Dinesh proved me wrong.",
      name: "Dinesh", designation: "Software Engineer", company: "Accenture", image: "https://randomuser.me/api/portraits/men/10.jpg",
    },
    {
      testimonial: "I've never met a web developer who truly cares about their clients' success like Ravi does.",
      name: "Ravi", designation: "Full Stack Developer", company: "Infosys", image: "https://randomuser.me/api/portraits/men/11.jpg",
    },
    {
      testimonial: "After Jagadeesh optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Jagadeesh", designation: "Cloud Architect", company: "Wipro", image: "https://randomuser.me/api/portraits/men/12.jpg",
    },
    {
      testimonial: "Murtuza's expertise took our web presence to the next level. Absolutely amazing work!",
      name: "Murtuza", designation: "AI/ML Engineer", company: "HCL Technologies", image: "https://randomuser.me/api/portraits/men/13.jpg",
    },
];
<<<<<<< HEAD
=======

>>>>>>> 6208ff4 (Added missing images)
  
  // Education background data
  const education = [
    {
      degree: "Bachelor of Computer Science",
      institution: "Dhanekula Institute of Engineering",
      years: "2021-2024",
      cgpa: "7.75/10 CGPA",
    },
    {
      degree: "Diploma in Computer Science",
      institution: "A.A.N.M & V.V.R.S.R Polytechnic",
      years: "2018-2021",
      cgpa: "8.4/10 CGPA",
    },
    {
      degree: "10th Grade CBSE",
      institution: "Nalanda Vidya Niketan",
      years: "2017-2018",
      percentage: "55%",
    },
  ];
  
  // Information for various projects
  const projectsInfo = [
    {
      name: "Auto Caption Generation using Python",
      description: "NLP-based text summarization and image captioning using VGG16 and LSTM, leveraging deep learning techniques to generate automatic captions for images and summarize textual content.",
      organization: "BEL (Dec 2024 - May 2024)",
      image: "/src/assets/code.jpg",
      source_code_link: "https://github.com/",
      tags: [{ name: "Python", color: "text-blue-500" }, { name: "TensorFlow", color: "text-orange-500" }, { name: "Deep Learning", color: "text-red-500" }]
    },
    {
      name: "Deep Learning Model for Classifying Cats and Dogs using Python",
      description: "Built a CNN model to classify images of cats and dogs using Python, TensorFlow, and Keras. This project focuses on binary image classification and deep learning implementation.",
      organization: "Blackbucks-IIDT (Jan 2024 - Apr 2024)",
      image: "/src/assets/code.jpg",
      source_code_link: "https://github.com/",
      tags: [{ name: "Python", color: "text-blue-500" }, { name: "TensorFlow", color: "text-orange-500" }, { name: "Keras", color: "text-pink-500" }]
    },
    {
      name: "Used Car Price Prediction using Machine Learning",
      description: "Designed machine learning pipelines for predictive analytics, analyzing historical vehicle data to predict resale values based on various attributes.",
      organization: "CodeGnan IT Solutions (May 2023 - Jul 2023)",
      image: "/src/assets/code.jpg",
      source_code_link: "https://github.com/",
      tags: [{ name: "Machine Learning", color: "text-green-500" }, { name: "Python", color: "text-blue-500" }, { name: "Pandas", color: "text-yellow-500" }]
    },
    {
      name: "Hotel Website Development using Django",
      description: "Created a dynamic, responsive website using Django and deployed it on AWS. The project included user authentication, dynamic content management, and cloud hosting.",
      organization: "APSSDC (Jul 2020 - Jan 2021)",
      image: "/src/assets/code.jpg",
      source_code_link: "https://github.com",
      tags: [{ name: "Django", color: "text-green-500" }, { name: "AWS", color: "text-purple-500" }, { name: "Web Development", color: "text-indigo-500" }]
    }
  ];

  
  // Exporting all constants so they can be imported and used in other parts of the project
  export { services, technologies, experiences, testimonials, education, projectsInfo };
  
  
