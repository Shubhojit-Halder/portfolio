import React from "react";
import styles from "./pages/styles/Navbar.module.css";
const Navbar = () => {
  return (
    <main className={styles.main}>
      <div className={styles.nav}>
        <ul className={styles.nav_ul}>
          <li>About</li>
          <li>Resume</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </div>
    </main>
  );
};

export default Navbar;
