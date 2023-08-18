import {
    mobile,
    android,
    basket,
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
    nodejs,
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
    basket2,
    questrade,
    asat,
    qrhunter,
    wordle,
    w2e
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Angular Developer",
      icon: backend,
    },
    {
      title:"Android Developer",
      icon : android
    }
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
  ];
  
  const experiences = [
    {
      title: "Angular.js Developer",
      company_name: "Questrade",
      icon: questrade,
      iconBg: "#383E56",
      date: "May 2023 - August 2023",
      points: [
        "Empowered brokers to add new brokerages and addresses when unable to locate them in the drop-down menus, while effectively patching the values for these new brokerages",
        "Investigated and resolved crashing issues on Staff Journey's policy details page by fixing failing endpoints and integrating it with real data API’s. Demoed the accomplishment to co-founders.",
        "Contributed to reducing technical debt by migrating the Add Mortgagee feature to the new Broker Journey. ",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
      ],
    },
    {
      title: "FullStack Developer(Upcoming)",
      company_name: "AlbertaSat",
      icon: asat,
      iconBg: "#E6DEDD",
      date: "June 2023 - Present",
      points: [
        "Contributed to AlbertaSat's GroundStation Software team by successfully completing a mini-project that involved implementing Object-Oriented Programming (OOP) concepts in C.",
        "Developed TCP/IP client and server applications using Python, showcasing proficiency in network programming and communication protocols.",
        "Mastered React fundamentals through a comprehensive tutorial, enhancing skills in modern web development technologies."
    ]
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "QR-Hunter",
      description: "IHuntWithJavalins is a project and team tasked with creating the Android mobile application called 'QRHunter'. This app allows us to hunt for the coolest QR codes that score the most points. Players will run around scanning QR codes, barcodes, etc. trying to find barcodes and QR codes that give them the most points.",
      tags: [
        {
          name: "Android Studio",
          color: "blue-text-gradient",
        },
        {
          name: "Java",
          color: "green-text-gradient",
        },
        {
          name: "Figma",
          color: "pink-text-gradient",
        },
      ],
      image: qrhunter,
      source_code_link: "https://github.com/CMPUT301W23T03/IHuntWithJavalins",
    },
    {
      name: "Wordle Solver",
      description:
        "The Wordle Solver is a program that helps users solve the popular word guessing game, Wordle. It uses a list of English words to generate all legible 5-letter words, and allows users to enter a combination of letters and symbols that represent their guess and the position of correct letters in that guess. The program then filters the list of words to find all possible matches based on the user's guess and symbols.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "nltk library",
          color: "pink-text-gradient",
        },
      ],
      image: wordle,
      source_code_link: "https://github.com/VirajCommits/Wordle_Solver",
    },
    {
      name: "What2Eat(Hackathon Project)",
      description: "What2Eat is an app where users input available ingredients, and it suggests recipes with the closest match. It shows ingredient count and calories for health-conscious choices. Future plans include optimizing data usage, expanding results, object recognition for ingredients, and nutritional breakdown display.",
      tags: [
        {
          name: "react-js",
          color: "blue-text-gradient",
        },
        {
          name: "firebase",
          color: "green-text-gradient",
        },
        {
          name: "restAPI",
          color: "pink-text-gradient",
        },
        {
          name: "flask",
          color: "blue-text-gradient",
        },
      ],
      image: w2e,
      source_code_link: "https://github.com/AaryanHazCompter/What2Eat-Error-418",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };