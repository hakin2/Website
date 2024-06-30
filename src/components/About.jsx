import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>About Me.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I am passionate about research in graph machine learning and creating effective and scalable software solutions that address real-life issues.
        <br className='sm:block hidden' />
        <br className='sm:block hidden' />
        I have co-written a paper on efficient graph embedding, participated in notable hackathons, and completed internships at Amazon and Signify.
        
        <br className='sm:block hidden' />
        <br className='sm:block hidden' />
        Let's collaborate to build a better future!
      </motion.p>
    </>
  );
};

export default SectionWrapper(About, "about");
