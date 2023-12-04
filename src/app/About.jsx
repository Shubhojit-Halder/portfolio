"use client";
import React from "react";
import styles from "./pages/styles/About.module.css";
import { Tilt } from "react-tilt";
import {motion} from "framer-motion";
// import './TiltScale.demozap.scss';
const defaultOptions = {
  reverse: true, // reverse the tilt direction
  max: 35, // max tilt rotation (degrees)
  perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
  scale: 1.2, // 2 = 200%, 1.5 = 150%, etc..
  speed: 1000, // Speed of the enter/exit transition
  transition: true, // Set a transition on enter/exit.
  axis: null, // What axis should be disabled. Can be X or Y.
  reset: true, // If the tilt effect has to be reset on exit.
  easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
};

const About = () => {
  return (
    <>
      <div className={styles.main} id="about">
        {/* <div className={gc}></div> */}
        <h1 className={styles.header}>ABOUT ME</h1>
        <div className={styles.who_am_i}>
          Welcome! I'm Shubhojit, and I'm thrilled to have you here. Let me
          share a bit about myself and what you can expect from this website.
        </div>
        {/* <Image src={pngegg} className={styles.underline}/> */}
        {/* <div className={styles.colour_circle}></div> */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            flexWrap: "wrap",
            padding: "0px 20px",
          }}
        >
          <AboutBoxes
            className={styles.box_header}
            heading={"Who am I?"}
            content={
              "Currently, I am studying Electronics and Communication Engineering and I've deep passion for web development. I've been working in this field for more than two years now and it's been a wonderful journey. Recently, I was awarded top honors at the SMART INDIA HACKATHON in 2022, which has helped me to enhance my skills and knowledge further."
            }
          />
          <AboutBoxes
            className={styles.box_header}
            heading={"My Philosophy"}
            content={
              "I strongly believe in the effectiveness of hard work and commitment, which motivates me to design websites and web applications that are both visually appealing and functional. I am convinced that persistence and consistency will always yield positive results, and I apply this principle to every project that I take on."
            }
          />
          <AboutBoxes
            className={styles.box_header}
            heading={"Future Goals"}
            content={
              "I am extremely enthusiastic about the continual growth and advancement of web technology. I am eager to expand my skills and knowledge in this field and strive to make a meaningful contribution to the tech industry. My ultimate objective is to establish a successful career in this field of expertise."
            }
          />
        </div>
      </div>
    </>
  );
};

const AboutBoxes = ({ heading, content }) => {
  return (
    <>
      <Tilt options={defaultOptions}>
        <motion.div
          className={styles.box}
          initial={{ y: +500,x:-200 }}
          animate={{ y: 0,x:0 }}
          transition={{ ease: "easeInOut", duration: 0.5 }}
        >
          <div className={styles.sub_heading}>{heading}</div>
          <div className={styles.sub_content}>{content}</div>
        </motion.div>
      </Tilt>
    </>
  );
};
export default About;
