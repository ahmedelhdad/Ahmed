import React from "react";
import "./Experience.css";
import {motion} from 'framer-motion'
import Data from "../data/Data";
const Experience = () => {
  const transiton = {duration:2,type:'spring'}
  return (
    <div className="experience" id="experience">
      <div className="container">
        <motion.h1 
        initial={{translateX:'99%'}}
        whileInView={{translateX:'0%'}}
        transiton={transiton}
        >
        Experience
        </motion.h1>
        <motion.div 
        initial={{translateX:'-99%'}}
        whileInView={{translateX:'0%'}}
        transiton={transiton}
        className="center-experience">
          <div className="box">
            <h1>3+</h1>
            <h5>years</h5>
            <h3>Experience</h3>
          </div>
          <div className="box">
            <h1>{Data.length}+</h1>
            <h5>completed</h5>
            <h3>Projects</h3>
          </div>
        </motion.div>
        <div className="blur"></div>
      </div>
    </div>
  );
};

export default Experience;
