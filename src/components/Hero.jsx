import { motion } from "framer-motion";
import Tilt from "react-tilt";

import { styles } from "../styles";
import { fadeIn } from "../utils/motion";

import {
  mobile,
  creator,
} from "../assets";

const services = [
  {
    title: "My LinkedIn",
    icon: mobile,
    url: "https://www.linkedin.com/in/hamdi-akin",
  },
  {
    title: "My GitHub",
    icon: creator,
    url: "https://github.com/hakin2",
  },
];

// ServiceCard component
const ServiceCard = ({ index, title, icon, url }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <a href={url} target="_blank" rel="noopener noreferrer">
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img
            src={icon}
            alt={title}
            className='w-16 h-16 object-contain'
          />
          <h3 className='text-white text-[20px] font-bold text-center'>
            {title}
          </h3>
        </div>
      </a>
    </motion.div>
  </Tilt>
);

// Hero component
const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div 
      style={{
        background: "#000842",
        color: "#ffffff",
        padding: "px",
        borderRadius: "px",
        marginTop: "px",
        width: "2000px",
        height: "250px",
        boxShadow: "0 16px 32px 0 rgba(0, 0, 0, 0.2), 0 32px 64px 0 rgba(0, 0, 0, 0.19)", // Added shadow
      }}
      > </div>
      <div className={`absolute inset-0 top-[px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5' style={{ marginTop: '15px' }}>
        </div>

        <div
        style={{
              background: "#000842",
              color: "#ffffff",
              padding: "20px",
              borderRadius: "10px",
              marginTop: "40px",
              width: "1100px",
              height: "210px",
            }}>
          <h1 className={`${styles.heroHeadText} text-white`} style={{ textShadow: "-4px 4px 1px rgba(255, 255, 255, 0.7)" }}>
            <span className='text-white'> Hi, I'm</span> <span className='text-white'>Selim.</span>
          </h1>
          <h1 className={`${styles.heroSubText} text-white`} style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)" }}>
            <span className='text-white'> Welcome to my Portfolio Website.</span> 
            <div className='w-5 h-5 rounded-full bg-[#ffffff]' style={{ marginTop: '0px' }} />
            <div className='h-1 w-90 bg-[#ffffff]' style={{ marginTop: '-11px' }} />
          </h1>  
          
        </div>
      </div>
      <div className={`absolute top-[550px] right-[50px] flex flex-row items-center gap-10`}>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </section>
  );
};

export default Hero;
