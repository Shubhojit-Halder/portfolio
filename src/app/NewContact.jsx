"use client";
import React, { useState } from "react";
import styles from "./pages/styles/NewContact.module.css";
import gmail from "../../public/gmail.png";
import phone from "../../public/phone.png";
import pin from "../../public/pin.png";
import Image from "next/image";
import { TextField } from "@mui/material";
import Link from "next/link";
import CodeIcon from "@mui/icons-material/Code";
import { Facebook, Instagram, LinkedIn } from "@mui/icons-material";
import axios from "axios";
const NewContact = () => {
  const [newData, setData] = useState({ names: "", email: "", message: "" });
  // const [email, setEmail] = useState("");
  // const [message, setMessage] = useState("");
  // const handleSubmit = async (event) => {
  //   event.preventDefault();

  //   // const formData = new FormData(event.target);
  //   const response = await axios.post("/api/submit", newData);

  //   // Handle response if necessary
  //   const data = await response.json();
  //   // Perform your form submission logic here
  //   console.log(data);
  //   console.log("Submitted:", newData);
  // };
  const handleChange = (event) => {
    let value = event.target.value;
    let name = event.target.name;

    setData((prevalue) => {
      return {
        ...prevalue, // Spread Operator
        [name]: value,
      };
    });
  };
  return (
    <>
      {/* <div className={styles.card_container}>
        <Cards logo={gmail} content={`shubhojit357@gmail.com`} />
        <Cards logo={phone} />
        <Cards logo={pin} />
      </div> */}
      <div className={styles.main} id="contact">
        {/* <h1 className={styles.header}>Contact</h1> */}
        <div className={styles.secondary}>
          <div className={styles.left}>
            <h1 className={styles.h1}>
              Fill the form, <br /> it's easy.
            </h1>
            <form action="#">
              <div>
                {" "}
                <input
                  type="text"
                  placeholder="Name"
                  name="names"
                  className={styles.input}
                  onChange={handleChange}
                />
              </div>
              <div>
                {" "}
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className={styles.input}
                  onChange={handleChange}
                />
              </div>
              <div>
                {" "}
                <textarea
                  name="message"
                  className={styles.textarea}
                  placeholder="Enter your message here."
                  onChange={handleChange}
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

const Cards = ({ logo, content }) => {
  return (
    <div className={styles.card}>
      <Image
        src={logo}
        alt="logo"
        style={{ width: "1.25rem", height: "1.25rem", padding: "0.625rem" }}
      />
    </div>
  );
};
export default NewContact;
