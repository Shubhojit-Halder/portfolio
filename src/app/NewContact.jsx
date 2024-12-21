"use client";
// import React, { useState } from "react";
import styles from "./pages/styles/NewContact.module.css";
// import gmail from "../../public/gmail.png";
// import phone from "../../public/phone.png";
// import pin from "../../public/pin.png";
// import Image from "next/image";
// import { TextField } from "@mui/material";
import Link from "next/link";
import CodeIcon from "@mui/icons-material/Code";
import { Facebook, Instagram, LinkedIn } from "@mui/icons-material";
import { useState } from "react";
import { Alert, AlertTitle } from "@mui/material";
import Snackbar from "@mui/material/Snackbar";

const NewContact = () => {
  async function handleSubmit(e) {
    e.preventDefault();
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: "8b7a1e89-a463-4076-88f2-400b775649e8",
        name: e.target.name.value,
        email: e.target.email.value,
        message: e.target.message.value,
      }),
    });
    const result = await response.json();
    if (result.success) {
      console.log(result);
      setState({ ...state, open: true });
    }
  }
  const handleClose = () => {
    setState({ ...state, open: false });
  };
  const [state, setState] = useState({
    open: false,
    vertical: "top",
    horizontal: "center",
  });
  const { vertical, horizontal, open } = state;
  return (
    <>
      <div className={styles.main} id="contact">
        <Snackbar open={open} autoHideDuration={5000} onClose={handleClose} anchorOrigin={{ vertical,horizontal }}>
          <Alert
            
            onClose={handleClose}
            severity="success"
            // variant="filled"
            sx={{ width: "100%", color: "#fff" }}
          >
            Form submitted successfully, we'll get back to you soon!
          </Alert>
        </Snackbar>
        <h1 className={styles.header}>Contact</h1>
        <div className={styles.secondary}>
          <div className={styles.left}>
            <h1 className={styles.h1}>
              Fill the form, <br /> it's easy.
            </h1>
            <form onSubmit={handleSubmit}>
              <div>
                {" "}
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  className={styles.input}
                />
              </div>
              <div>
                {" "}
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className={styles.input}
                />
              </div>
              <div>
                {" "}
                <textarea
                  name="message"
                  className={styles.textarea}
                  placeholder="Enter your message here."
                ></textarea>
              </div>
              <button type="submit" className={styles.button}>
                Submit
              </button>
            </form>
          </div>
          <div className={styles.line}></div>
          <div className={styles.right}>
            <h1 className={styles.h1}>Get in touch</h1>
            <p className={styles.content}>
              I'm always eager to collaborate on exciting projects or just to
              have a chat about the latest developments in the tech world. Feel
              free to reach out if you share a passion for web development,
              technology, or if you just want to connect or even if you have
              some suggestions for me!
            </p>
            <div className={styles.social}>
              <ul>
                <li>
                  <Link
                    target="_"
                    href={
                      "https://www.facebook.com/profile.php?id=100014167597895"
                    }
                  >
                    <Facebook className={styles.icons} />
                  </Link>
                </li>
                <li>
                  <Link
                    target="_"
                    href={
                      "https://www.linkedin.com/in/shubhojit-halder-06b923244/"
                    }
                  >
                    <LinkedIn className={styles.icons} />
                  </Link>
                </li>
                <li>
                  <Link
                    target="_"
                    href={"https://www.instagram.com/_s.h.u.b.h.o.j.i.t/"}
                  >
                    <Instagram className={styles.icons} />
                  </Link>
                </li>
                <li>
                  <Link
                    target="_"
                    href={"https://auth.geeksforgeeks.org/user/shubhojit357"}
                  >
                    <CodeIcon className={styles.icons} />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewContact;
