"use client";

import styles from "./pages/styles/Projects.module.css";
import github from "../../public/github1.png";
import weblink from "../../public/weblink.png";
import Image from "next/image";
import Project from "./Project";
import Link from "next/link";

const Projects = () => {
  return (
    <>
      <section className={styles.main} id="projects">
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
          <div  className={styles.mini_container}  key={id} >
            <div style={{boxShadow:"0px 5px 10px #0008312b"}} className={styles.card} key={id}>
              <div
                style={{
                  width: "8.75rem",
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                  height: "3.75rem",
                  background: "#ffffff",
                  marginLeft: "-1.5625rem",
                  padding: "0.3125rem 0.625rem 0.3125rem 1.25rem",
                  borderRadius: "0.3125rem 0.625rem 0.625rem 0.3125rem",
                }}
              >
                {/* <span> */}
                <Link href={item.github} target="_blank">
                  {" "}
                  <Image
                    src={github}
                    style={{ width: "35px", height: "35px" }}
                    alt="github_logo"
                  />
                </Link>
                {/* </span> */}
                {/* <span> */}
                <Link href={item.link} target="_blank">
                  <Image
                    alt="webpage_link"
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
                <div style={{ flex: 1 }}>
                  <h3 className={styles.portfolio_header}>{item.name}</h3>
                  <span
                    style={{
                      maxWidth: "21.875rem",
                      display: "flex",
                      margin: "0.625rem 0rem",
                    }}
                  >
                    {item.desc}
                  </span>
                  <div className={styles.techstack}>
                    {item.tech.map((img, id) => {
                      return (
                        <Image
                          key={"img" + id}
                          alt={"tech_stack"}
                          src={img}
                          style={{
                            width: "3.125rem",
                            height: "100%",
                            boxSizing: "border-box",
                            padding: "0.625rem",
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
                  alt="project_img"
                />
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};
