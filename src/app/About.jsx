import React from "react";
import styles from "./pages/styles/About.module.css";
import pngegg from "../../public/pngegg.png";
import Image from "next/image";
const About = () => {
  return (
    <>
      <div className={styles.main}>
        <h1 className={styles.header}>ABOUT ME</h1>
        {/* <Image src={pngegg} className={styles.underline}/> */}
      </div>
    </>
  );
};

export default About;
