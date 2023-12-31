"use client";

import styles from "./pages/styles/Topname.module.css";
import { motion } from "framer-motion";

import Typewriter from "typewriter-effect";
const TopName = () => {
  return (
    <>
      <div>
        <motion.div
          initial={{ x: -500 }}
          animate={{ x: 0 }}
          transition={{ ease: "linear", duration: 0.5 }}
          className={styles.head1}
          // transition={{ duration: 0.5, delay: 0.25 }}
        >
          Hey,There!!
        </motion.div>
        <div className={styles.head2}>
          I AM
          <br />
          SHUBHOJIT
          <br /> HALDER
        </div>

        <div className={styles.head1}>
          <Typewriter
            options={{
              strings: ["Fullstack Developer","Frontend Developer", "Software Enginner"],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        {/* <Button variant="contained" style={{background:"#560bad",}} >View Resume</Button> */}
      </div>
    </>
  );
};

export default TopName;
