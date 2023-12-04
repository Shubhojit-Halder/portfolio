import React from "react";
import styles from "./pages/styles/Resume.module.css";
const Resume = () => {
  return (
    <>
      <div className={styles.resume_main} id="resume">
        <h1 className={styles.header}>RESUME</h1>
        <div className={styles.all_cards}>
          <div className={styles.education}>
            <h3 className={styles.small_head}>Education</h3>
            <div className={styles.edu_sec}>
              <h4 style={{marginBottom:"0.3125rem"}}>Meghnad Saha Institute of Technology</h4>
              <p  style={{marginBottom:"0.3125rem"}}>B.Tech in ECE</p>
              <p>2020-24</p>
            </div>
            <div className={styles.edu_sec}>
              <h4 style={{marginBottom:"0.3125rem"}}>Behala High School(H.S.)</h4>
              <p style={{marginBottom:"0.3125rem"}}>Higher Secondary</p>
              <p style={{marginBottom:"0.3125rem"}}>2018-20</p>
            </div>
          </div>
          <div className={styles.mid_line} />
          <div className={styles.experience}>
            <h3 className={styles.small_head}>Experience</h3>
            <div className={styles.edu_sec}>
              <h4 style={{marginBottom:"0.3125rem"}}>Settyl Inc.</h4>
              <p style={{marginBottom:"0.3125rem"}}>Intern - Full Stack Developer</p>
              <p style={{marginBottom:"0.3125rem"}}>February,2023-March,2023</p>
            </div>
            <div className={styles.edu_sec}>
              <h4 style={{marginBottom:"0.3125rem"}}>Megatronix</h4>
              <p style={{marginBottom:"0.3125rem"}}>Volunteer - Full Stack Developer</p>
              <p style={{marginBottom:"0.3125rem"}}>2022-Present</p>
            </div>
          </div>
          <div className={styles.mid_line} />

          <div className={styles.languages}>
            <h3 className={styles.small_head}>Language & Frameworks</h3>
            <div className={styles.edu_sec}>
              <h4>C++</h4>
              <p
                style={{
                  width: "12.5rem",
                  height: "0.1875rem",
                  backgroundColor: "grey",
                }}
              >
                <p
                  style={{
                    width: "11.875rem",
                    height: "0.1875rem",
                    backgroundColor: "blue",
                  }}
                />
              </p>
            </div>
            <div className={styles.edu_sec}>
              <h4>Javascript</h4>
              <p
                style={{
                  width: "12.5rem",
                  height: "0.1875rem",
                  backgroundColor: "grey",
                }}
              >
                <p
                  style={{
                    width: "11.25rem",
                    height: "0.1875rem",
                    backgroundColor: "blue",
                  }}
                />
                {/* 90% */}
              </p>
            </div>
            <div className={styles.edu_sec}>
              <h4>React JS</h4>
              <p
                style={{
                  width: "12.5rem",
                  height: "0.1875rem",
                  backgroundColor: "grey",
                }}
              >
                <p
                  style={{
                    width: "10.9375rem",
                    height: "0.1875rem",
                    backgroundColor: "blue",
                  }}
                />
                {/* 80% */}
              </p>
            </div>
            <div className={styles.edu_sec}>
              <h4>Node JS/Express JS</h4>
              <p
                style={{
                  width: "12.5rem",
                  height: "0.1875rem",
                  backgroundColor: "grey",
                }}
              >
                <p
                  style={{
                    width: "10rem",
                    height: "0.1875rem",
                    backgroundColor: "blue",
                  }}
                />
                {/* 80% */}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const Cards = (props) => {
  return <div className="card"></div>;
};
export default Resume;
