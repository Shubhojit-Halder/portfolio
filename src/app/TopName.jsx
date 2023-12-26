"use client";

import styles from "./pages/styles/Topname.module.css";
import { motion } from "framer-motion";

import Typewriter from "typewriter-effect";
const TopName = () => {
  return (
    <>
      <div>
        <motion.div
          initial={{ x: -200 }}
          animate={{ x: 0 }}
          transition={{ ease: "linear", duration: 0.5 }}
          className={styles.head1}
          // transition={{ duration: 0.5, delay: 0.25 }}
        >
          Hey,There!!
        </motion.div>
        <div className={styles.head2}>
          <p >
            <motion.p
              initial={{ width: "150px", opacity: 1 }}
              animate={{ width: 0 }}
              transition={{ delay: 0.6, duration: 0.5, ease: "easeIn" }}
              className={styles.cover}
            />{" "}
            I AM
          </p>
          <br />
          <p>
            {" "}
            <motion.p
              initial={{ width: "395px", opacity: 1 }}
              animate={{ width: 0}}
              transition={{ delay: 1, duration: 0.5, ease: "easeIn" }}
              className={styles.cover}
            />{" "}
            SHUBHOJIT
          </p>
          <br />
          <span />{" "}
          <p>
            <motion.p
              initial={{ width: "300px", opacity: 1 }}
              animate={{ width: 0 }}
              transition={{ delay: 1.3, duration: 0.5, ease: "easeIn" }}
              
              className={styles.cover}
            />{" "}
            HALDER
          </p>
        </div>

        <div className={styles.head1}>
          <Typewriter
            options={{
              strings: [
                "Fullstack Developer",
                "Frontend Developer",
                "Software Enginner",
              ],
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
