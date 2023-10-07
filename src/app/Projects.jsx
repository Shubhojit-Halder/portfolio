"use client";
import React from "react";
import styles from "./pages/styles/Projects.module.css";
import github from "../../public/github1.png";
import weblink from "../../public/weblink.png";
import Image from "next/image";
import Project from "./Project";
import Link from "next/link";

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
// const TechStack = [next, react, node, exp, mongo, firebase];
// const TechStack
const ProjectCard = () => {
  return (
    <>
      {Project.map((item, id) => {
        return (
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
              {/* <span> */}
              <Link href={item.github} target="_blank">
                {" "}
                <Image src={github} style={{ width: "35px", height: "35px" }} />
              </Link >
              {/* </span> */}
              {/* <span> */}
              <Link href={item.link} target="_blank">
                <Image
                  src={weblink}
                  style={{ width: "35px", height: "35px" }}
                />
              </Link>
              {/* </span> */}
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              <div style={{flex:1}}>
                <h3 className={styles.portfolio_header}>{item.name}</h3>
                <span
                  style={{
                    maxWidth: "350px",
                    display: "flex",
                    margin: "10px 0px",
                  }}
                >
                  {item.desc}
                </span>
                <div className={styles.techstack}>
                  {item.tech.map((img, id) => {
                    return (
                      <Image
                        src={img}
                        style={{
                          width: "50px",
                          height: "100%",
                          boxSizing: "border-box",
                          padding: "10px",
                          // borderRadius: "50%",

                        }}
                      />
                    );
                  })}
                </div>
              </div>
              <Image
                src={item.img}
                className={styles.prod_img}
              />
            </div>
          </div>
        );
      })}
    </>
  );
};
