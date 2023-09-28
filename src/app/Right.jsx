import React from "react";
import styles from "./pages/styles/Right.module.css";
const Right = () => {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.nav}>
            <ul className={styles.nav_ul}>
                <li>About</li>
                <li>Resume</li>
                <li>Projects</li>
                <li>Contact</li>
            </ul>
        </div>
      </div>
    </>
  );
};

export default Right;
