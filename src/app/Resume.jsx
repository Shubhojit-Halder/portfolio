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
              <h6  style={{marginBottom:"0.3125rem"}}>B.Tech in ECE</h6>
              <h6>2020-24</h6>
            </div>
            <div className={styles.edu_sec}>
              <h4 style={{marginBottom:"0.3125rem"}}>Behala High School(H.S.)</h4>
              <h6 style={{marginBottom:"0.3125rem"}}>Higher Secondary</h6>
              <h6 style={{marginBottom:"0.3125rem"}}>2018-20</h6>
            </div>
          </div>
          <div className={styles.mid_line1} />
          <div className={styles.experience}>
            <h3 className={styles.small_head}>Experience</h3>
            <div className={styles.edu_sec}>
              <h4 style={{marginBottom:"0.3125rem"}}>Settyl Inc.</h4>
              <h6 style={{marginBottom:"0.3125rem"}}>Intern - Full Stack Developer</h6>
              <h6 style={{marginBottom:"0.3125rem"}}>February,2023-March,2023</h6>
            </div>
            <div className={styles.edu_sec}>
              <h4 style={{marginBottom:"0.3125rem"}}>Megatronix</h4>
              <h6 style={{marginBottom:"0.3125rem"}}>Volunteer - Full Stack Developer</h6>
              <h6 style={{marginBottom:"0.3125rem"}}>2022-Present</h6>
            </div>
          </div>
          <div className={styles.mid_line2} />

          <div className={styles.languages}>
            <h3 className={styles.small_head}>Language & Frameworks</h3>
            <div className={styles.edu_sec}>
              <h4>C++</h4>
              <h6
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
              </h6>
            </div>
            <div className={styles.edu_sec}>
              <h4>Javascript</h4>
              <h6
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
                
              </h6>
            </div>
            <div className={styles.edu_sec}>
              <h4>React JS</h4>
              <h6
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
                
              </h6>
            </div>
            <div className={styles.edu_sec}>
              <h4>Node JS/Express JS</h4>
              <h6
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
                
              </h6>
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
