import React from "react";
import styles from "./pages/styles/Contact.module.css";
const Contact = () => {
  return (
    <>
      <section className={styles.main}>
        <h1 className={styles.header}>Contact</h1>
        <div>
          <div className={styles.left}>
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
          </div>
          <div className={styles.right}></div>
        </div>
      </section>
    </>
  );
};

export default Contact;
