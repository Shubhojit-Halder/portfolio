"use client";
import React from "react";
import styles from "./pages/styles/Projects.module.css";
import github from "../../public/github1.png";
import link from "../../public/link.png";
import portfolio from "../../public/portfolio.jpeg";
import Image from "next/image";
import next from "../../public/next.png";
import react from "../../public/react.png";
import node from "../../public/node.png";
import exp from "../../public/expressjs.png";
import firebase from "../../public/firebase.png";
import mongo from "../../public/mongo.png";
const Projects = () => {
  return (
    <>
      <section className={styles.main}>
        <h1 className={styles.header}>Projects</h1>
        <div className={styles.card_container}>
          <ProjectCard />
        </div>
      </section>
    </>
  );
};

export default Projects;
const TechStack = [next, react, node, exp, mongo, firebase];
// const TechStack
const ProjectCard = () => {
  return (
    <>
      <div className={styles.card}>
        <div
          style={{
            width: "140px",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            height: "60px",
            background: "#ffffff",
            marginLeft: "-25px",
            padding: "5px 10px 5px 20px",
            borderRadius: "5px 10px 10px 5px",
          }}
        >
          <span>
            <Image src={github} style={{ width: "40px", height: "40px" }} />
          </span>
          <span>
            <Image src={link} style={{ width: "40px", height: "40px" }} />
          </span>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <div>
            <h3 className={styles.portfolio_header}>Portfolio 2023</h3>
            <span style={{width:"350px",display:"flex",margin:"10px 0px"}}>
              This is my portfolio that showcases my ideology,accomplishments
              and my achievements.
            </span>
            <div className={styles.techstack}>
              {TechStack.map((item, id) => {
                return (
                  <Image
                    src={item}
                    style={{
                      width: "50px",
                      height: "100%",
                      boxSizing: "border-box",
                      padding: "10px",
                      borderRadius: "50%",
                    }}
                  />
                );
              })}
            </div>
          </div>
          <Image src={portfolio} style={{ width: "50%", height: "100%",borderRadius:"10px"}} />
        </div>
      </div>
    </>
  );
};
