import React from "react";
import { motion } from "framer-motion";
import "./project.css";
const projects = [
  {
    title: "Umang - Mental Health Platform",
    description:
      "Umang is an advanced mental health platform designed to assess the mental wellness of individuals using scientifically proven psychological tests. It incorporates machine learning algorithms to calculate a mental score based on various cognitive and emotional assessments. The platform includes a range of tests: a remembrance test where users are provided with words to memorize and later recall, a trail-making test to evaluate cognitive flexibility, and an emotion-reading test after story reading. Additionally, the app features PTSD, anxiety, and depression tests, a journaling feature for self-reflection, and a guided meditation tool with a timer. The platform also offers community-driven support and allows users to interact with doctors via blog posts. The entire system is protected using JWT token authentication and bcrypt.js for secure password hashing.",
    stack:
      "MERN Stack (MongoDB, Express, React, Node.js), Chart.js, JWT, bcrypt.js, Raw CSS",
    github: "https://github.com/adityatiwari212/umang-mental-health",
  },
  {
    title: "LearnHub",
    description:
      "LearnHub is an innovative educational platform aimed at revolutionizing the way students connect and learn. The app provides access to a wide variety of study resources, and it uses machine learning to match students with compatible study groups or rooms based on their learning style and subject preferences. LearnHub also features AI-moderated chats for real-time discussions and doubt-solving, ensuring that students can get instant answers to their academic queries. The platform further promotes community engagement by allowing students to participate in forums, discussions, and group studies. Real-time communication is facilitated through Socket.IO, enabling students to collaborate effectively. The app's intuitive UI, built using Tailwind CSS, ensures a seamless and engaging learning experience.",
    stack:
      "MERN Stack (MongoDB, Express, React, Node.js), Tailwind CSS, AI, Socket.IO",
    github: "https://github.com/adityatiwari212/LearnHub",
  },
  {
    title: "India Team Cricket ODI Analysis",
    description:
      "This project presents a comprehensive Exploratory Data Analysis (EDA) of India's One Day International (ODI) cricket history. By leveraging advanced data cleaning, feature engineering, and visualization techniques, this project uncovers valuable insights into the performance trends of the Indian cricket team over the years. The analysis includes statistical visualizations such as histograms, bar plots, and line plots to depict the distribution of key performance metrics and the progression of India's performance across decades. Furthermore, box plots are used to analyze performance variability, while heatmaps reveal correlations between different cricketing variables. This analysis also highlights the shifting dynamics of ODI cricket, including the declining popularity of the format due to the rise of T20I cricket and the emergence of newer teams like Afghanistan and Ireland. The insights drawn from this analysis can help in strategic decision-making for the future of Indian cricket in the ODI format.",
    stack: "Python, Pandas, Matplotlib, Seaborn, Jupyter Notebook",
    github: "https://github.com/adityatiwari212/eda-cricket-odi-india",
  },
  {
    title: "YouTube Filtering Extension",
    description:
      "This browser extension is designed to help users filter out unwanted YouTube videos and channels from their feed. Using web scraping techniques, the extension allows users to specify criteria for filtering content based on keywords, video types, and other parameters. The extension’s primary functionality includes hiding videos that don't match the user's preferences and displaying only the most relevant content. This tool helps users avoid irrelevant or unwanted content while curating their YouTube feed to match their interests. It also features an easy-to-use interface and can be customized to work with different filtering parameters. The extension is built using JavaScript and is packaged as a Chrome extension, making it easily accessible to users.",
    stack: "JavaScript, Web Scraping, Chrome Extensions",
    github:
      "https://github.com/adityatiwari212/YouTube-Video-Filtering-Chrome-Extension",
  },
];

const ProjectSection = () => {
  return (
    <section
      id="projects"
      className="px-6 md:px-16 py-12"
      style={{ backgroundColor: "#030E20" }} // Custom background color
    >
      <h2 className="text-4xl font-bold text-center text-white">My Projects</h2>
      <p className="text-center text-gray-300 mt-2">
        Explore some of the projects I’ve worked on recently.
      </p>

      <motion.div
        className="mt-8 space-y-12"
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.3,
            },
          },
          exit: { opacity: 0, transition: { duration: 0.5 } },
        }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-blue-900 shadow-lg rounded-lg p-6 md:p-8 transition-transform transform"
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
              exit: { opacity: 0, y: -50 },
            }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 10px 20px rgba(59, 130, 246, 0.5)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            <h3 className="text-2xl font-semibold text-white">
              {project.title}
            </h3>
            <p className="text-gray-300 mt-2">{project.description}</p>
            <p className="mt-4 text-gray-300">
              <span className="font-semibold">Tech Stack:</span> {project.stack}
            </p>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-white font-semibold relative px-6 py-2 rounded-full border-2 border-transparent overflow-hidden group bg-black"
            >
              <span className="relative z-10">View on GitHub &rarr;</span>
              <span className="absolute inset-0 w-full h-full border-2 border-silver-500 opacity-100 rounded-full animate-border" />
            </a>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default ProjectSection;
