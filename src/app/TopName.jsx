"use client";
import React from "react";
import styles from "./pages/styles/Topname.module.css";
import { motion } from "framer-motion";
import { Button } from "@mui/material";
const TopName = () => {
  return (
    <>
      <div>
        <motion.div
          // initial={{x:-100}}
          animate={{x: 100}}
          transition={{ ease: "easeOut", duration: 2 }}
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
        <div className={styles.head1}>A Fullstack Developer.</div>
        {/* <Button variant="contained" style={{background:"#560bad",}} >View Resume</Button> */}
      </div>
    </>
  );
};

export default TopName;
