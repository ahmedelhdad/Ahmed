import React from "react";
import icon from '../../img/humble.png'
import "./Serivces.css";
import Cv from './Mern Stack Cv.pdf'
import {motion} from 'framer-motion'
const Serivces = () => {
  const transiton = {duration:2,type:'spring'}
  return (
    <div className="serices" id="services">
      <div className="container">
        <motion.div 
        initial={{translateX:'-60%'}}
        whileInView={{translateX:'0%'}}
        transition={transiton}
        className="left">
          <h1>services </h1>
          <h4>
            Frondend Developer with high level of experience in web designing
            and development producting the Quality work
          </h4>
          <a href={Cv}
          target={"blank"}

          >
          <button className="button n-button">Download Cv</button>
          </a>
        </motion.div>
        <motion.div 
        initial={{translateX:'90%'}}
        whileInView={{translateX:'0%'}}
        transition={transiton}
        className="right">
            <div className="card">
                <img src={icon} alt=''/>
                <h1>Developer</h1>
                <ul>
                    <li>Html</li>
                    <li>Css</li>
                    <li>Bootstrap</li>
                    <li>Tailwind</li>
                    <li>Javascript</li>
                    <li>OOP</li>
                    <li>Typescript</li>
                    <li>Tailwind</li>
                    <li>React Js</li>
                    <li>React Hooks</li>
                    <li>Redux Toolkit</li>
                    <li>React router</li>
                    <li>Next Js</li>
                    <li>React Formik</li>
                    <li>React </li>
                    <li>React Query</li>
                    <li>Firebase</li>
                    <li>Node Js</li>
                    <li>Express</li>
                    <li>Mongoose db</li>
                    <li>Socket io</li>
                    <li>Git / GitHub</li>
                </ul>
            </div>
        </motion.div>
        <div className="blur"></div>
      </div>
    </div>
  );
};

export default Serivces;
