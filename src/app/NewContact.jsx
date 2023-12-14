"use client";
import React, { useState } from "react";
import styles from "./pages/styles/NewContact.module.css";
import gmail from "../../public/gmail.png";
import phone from "../../public/phone.png";
import pin from "../../public/pin.png";
import Image from "next/image";
import { TextField } from "@mui/material";
const NewContact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform your form submission logic here
    console.log("Submitted:", { name, email, message });
  };
  return (
    <>
      {/* <div className={styles.card_container}>
        <Cards logo={gmail} content={`shubhojit357@gmail.com`} />
        <Cards logo={phone} />
        <Cards logo={pin} />
      </div> */}
      <div className={styles.main} id="contact">
        <div className={styles.secondary}>
          <div className={styles.left}>
            <h1 className={styles.h1}>
              Fill the from, <br /> it's easy.
            </h1>
            <form action="#" method="post">
              <div>
                {" "}
                <input
                  type="text"
                  placeholder="Name"
                  className={styles.input}
                />
              </div>
              <div>
                {" "}
                <input
                  type="text"
                  placeholder="Email"
                  className={styles.input}
                />
              </div>
              <div>
                {" "}
                <textarea className={styles.textarea} placeholder="">
                  Enter your message here.
                </textarea>
              </div>
              <button type="submit" className={styles.button}>
                Submit
              </button>
            </form>
          </div>
          <div className={styles.line}></div>
          <div className={styles.right}>
            <h1 className={styles.h1}>Get in touch</h1>
          </div>
        </div>
      </div>
    </>
  );
};

const Cards = ({ logo, content }) => {
  return (
    <div className={styles.card}>
      <Image
        src={logo}
        alt="logo"
        style={{ width: "4.125rem", height: "4.125rem", padding: "0.625rem" }}
      />
      <span className="a">shubhojit357@gmail.com</span>
    </div>
  );
};
export default NewContact;
