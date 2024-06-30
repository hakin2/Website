import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const projects = [
  
  {
    title: "Exploring Similarity-Based Graph Compression for Efficient Network Analysis and Embedding",
    description: [
      "Investigated the effect of various node similarity measures on graph compression, including Common Neighbors, Jaccard, Overlap, Wasserstein, and Resource Allocation Index.",
      "Applied the compression method to network embedding, improving efficiency and maintaining accuracy in single and multi-label classification tasks.",
      "Co-authored a paper titled 'Exploring Similarity-Based Graph Compression for Efficient Network Analysis and Embedding,' accepted into the workshop program at ICCCN 2024."
    ],
    dates: "01/2024 - 05/2024"
  },
  {
    title: "GaTech (Hacklytics) Hackathon Competition Project",
    description: [
      "Developed an interactive website utilizing a RandomForest classifier for diabetes prediction, based on user-inputted health data.",
      "Implemented real-time data submission via Fetch API and instant display of diabetes probability."
    ],
    dates: "02/2024 - 02/2024"
  },
  {
    title: "Florida International University (ShellHacks) Hackathon Competition Project",
    description: [
      'Co-led the development of an advanced generative AI system to match resumes with job descriptions.',
      "Provides a unique compatibility score out of 100, enabling precise and efficient candidate-job matching."
    ],
    dates: "09/2023 - 09/2023"
  },
  {
    title: "Weather & Forecast Application",
    description: [
      "Developed a responsive weather application using React, showcasing the ability to integrate third-party APIs.",
      "Developed a client-side application that processes and presents real-time weather data."
    ],
    dates: "11/2023 - 12/2023"
  }

];

const ProjectCard = ({ index, title, description, location, dates }) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="bg-black-200 p-10 rounded-3xl md:w-[1025px] w-full mb-7"
  >
    <div className="mt-1">
      <h3 className="text-white font-semibold text-[24px]">{title}</h3>
      <ul className="mt-3 text-white">
        {description.map((point, idx) => (
          <li key={idx} className="flex items-center gap-1">
            <span className="text-blue-500">•</span>
            <span>{point}</span>
          </li>
        ))}
      </ul>
      <p className="mt-4 text-gray-400 text-xs">{location}</p>
      <p className="text-gray-400 text-xs">{dates}</p>
    </div>
  </motion.div>
);

const Projects = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div className={`bg-black-100 rounded-2xl ${styles.padding} min-h-[300px]`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Explore My Work</p>
          <h2 className={styles.sectionHeadText}>Projects</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX}`}>
        {projects.map((project, index) => (
          <ProjectCard key={index} index={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Projects, "Projects");

