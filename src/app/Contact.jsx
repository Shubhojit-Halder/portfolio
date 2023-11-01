"use client";
import React from "react";
import styles from "./pages/styles/Contact.module.css";
import { TextField } from "@mui/material";
import Box from "@mui/material/Box";
const Contact = () => {
  return (
    <>
      <section className={styles.main} id="contact">
        <h1 className={styles.header}>Contact</h1>
        <div className={styles.container}>
          <div className={styles.map}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3685.997261228311!2d88.32385647465695!3d22.50428593547188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0270a880883a05%3A0xe64b20f174780487!2s45%2C%20Agarwal%20Gdn%20Rd%2C%20Chamrapatti%2C%20Behala%2C%20Kolkata%2C%20West%20Bengal%20700034!5e0!3m2!1sen!2sin!4v1696868665090!5m2!1sen!2sin"
              style={{ border: 0, minHeight: "400px", minWidth: "350px" }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className={styles.left}>
            <TextField
              id="outlined-basic"
              placeholder="Name"
              variant="outlined"
              className={styles.input}
            />
            <TextField
              id="outlined-basic"
              placeholder="Email"
              variant="outlined"
              className={styles.input}
            />
            <TextField
              id="outlined-basic"
              placeholder="Mobile No."
              variant="outlined"
              className={styles.input}
            />
            {/* </div> */}
            {/* <div className={styles.right}> */}
            <textarea
              className={styles.textbox}
              placeholder="Write a message"
              rows={10}
            ></textarea>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
